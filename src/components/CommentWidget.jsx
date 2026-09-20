/* eslint-disable react-hooks/purity */
/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable react-hooks/refs */
'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

const STORAGE_KEY = 'cybernaxe-feedback';
const SUBMITTED_KEY = 'cybernaxe-feedback-submitted';
const PAGE_SIZE = 5;

export default function CommentWidget() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState('write'); // 'write' | 'recent'

  // Form state
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [sending, setSending] = useState(false);
  const [showHint, setShowHint] = useState(true);

  // Feed state
  const [comments, setComments] = useState([]);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);

  const feedRef = useRef(null);
  const sentinelRef = useRef(null);
  const ownCommentsRef = useRef(new Set());

  // ─── Load local markers on mount ───
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      ownCommentsRef.current = new Set(
        saved.map((c) => `${c.comment}|${c.timestamp}`)
      );
    } catch {}
  }, []);

  // ─── Fetch comments ───
  const fetchComments = useCallback(async () => {
    const url = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
    if (!url) return;
    setLoading(true);
    try {
      const res = await fetch(`${url}?action=getComments`, { cache: 'no-store' });
      if (!res.ok) throw new Error('fetch failed');
      const data = await res.json();
      const list = (data.comments || []).map((c, i) => ({
        id: `${c.timestamp}-${i}`,
        name: c.name || 'Anonymous',
        comment: c.comment || '',
        rating: Number(c.rating) || 0,
        timestamp: new Date(c.timestamp).toISOString(),
      }));
      setComments(list);
    } catch (err) {
      console.error('fetch comments error:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  // ─── Infinite scroll inside feed ───
  useEffect(() => {
    if (tab !== 'recent') return;
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        if (loading) return;
        if (visibleCount >= comments.length) return;
        setVisibleCount((v) => Math.min(v + PAGE_SIZE, comments.length));
      },
      { root: feedRef.current, rootMargin: '80px' }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [tab, comments.length, visibleCount, loading]);

  useEffect(() => {
    setHasMore(visibleCount < comments.length);
  }, [visibleCount, comments.length]);

  // ─── Submit ───
  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmed = comment.trim();
    const trimmedName = name.trim() || 'Anonymous';

    if (!trimmed) return;
    if (trimmed.length > 500) return;

    setSending(true);

    const now = new Date();
    const optimistic = {
      id: `local-${now.getTime()}`,
      name: trimmedName,
      comment: trimmed,
      rating,
      timestamp: now.toISOString(),
    };

    // Optimistic insert
    setComments((prev) => [optimistic, ...prev]);
    ownCommentsRef.current.add(`${trimmed}|${now.toISOString()}`);

    // Persist locally
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      const updated = [
        {
          name: trimmedName,
          comment: trimmed,
          rating,
          timestamp: now.toISOString(),
        },
        ...saved,
      ].slice(0, 10);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      localStorage.setItem(SUBMITTED_KEY, 'true');
    } catch {}

    try {
      const url = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
      if (url) {
        await fetch(url, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify({
            type: 'comment',
            name: trimmedName,
            comment: trimmed,
            page: 'Homepage',
            rating: rating || '',
          }),
        });
      }

      // Reset form
      setName('');
      setComment('');
      setRating(0);
      setShowSuccess(true);

      // Switch to recent tab and show their comment
      setTab('recent');
      setVisibleCount((v) => v + 1);

      // Re-sync with server after a moment
      setTimeout(fetchComments, 2500);

      // Auto-hide success after a few seconds
      setTimeout(() => setShowSuccess(false), 3500);
    } catch (err) {
      console.error('submit error:', err);
      setComments((prev) => prev.filter((c) => c.id !== optimistic.id));
    } finally {
      setSending(false);
    }
  };

  const timeAgo = (iso) => {
    const diff = (Date.now() - new Date(iso).getTime()) / 1000;
    if (diff < 60) return 'just now';
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    if (diff < 604800) return `${Math.floor(diff / 86400)}d ago`;
    return new Date(iso).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });
  };

  const visible = comments.slice(0, visibleCount);
  const totalCount = comments.length;

  // Hide the hint once the user has opened the widget
useEffect(() => {
  if (typeof window === 'undefined') return;
  const dismissed = sessionStorage.getItem('cw-hint-dismissed');
  if (dismissed === 'true') {
    setShowHint(false);
  }
}, []);

// Persist dismissal when the widget is opened
useEffect(() => {
  if (open && typeof window !== 'undefined') {
    sessionStorage.setItem('cw-hint-dismissed', 'true');
    setShowHint(false);
  }
}, [open]);

  return (
    <>
      {/* ─── Hint label + Trigger button ─── */}
<div className="cw-trigger-wrap">

  {/* Hint chip — only shown when closed and not dismissed */}
  {!open && showHint && (
    <button
      type="button"
      className="cw-hint"
      onClick={() => setOpen(true)}
      aria-hidden="true"
      tabIndex={-1}
    >
      <span className="cw-hint-icon" aria-hidden="true">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <rect x="4" y="11" width="16" height="10" rx="2" />
          <path d="M8 11V7a4 4 0 118 0v4" strokeLinecap="round" />
        </svg>
      </span>
      <span className="cw-hint-text">
        Only visible to you
      </span>
      <span className="cw-hint-close" aria-hidden="true">✕</span>
    </button>
  )}

  {/* Trigger button */}
  <button
    className={`cw-trigger ${open ? 'cw-trigger-hidden' : ''}`}
    onClick={() => setOpen(true)}
    aria-label="Open feedback"
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path
        d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    {totalCount > 0 && <span className="cw-badge">{totalCount}</span>}
  </button>
</div>

      {/* ─── Overlay ─── */}
      <div
        className={`cw-overlay ${open ? 'show' : ''}`}
        onClick={() => setOpen(false)}
      />

      {/* ─── Widget panel ─── */}
      <div className={`cw-panel ${open ? 'show' : ''}`}>
        {/* Header */}
        <div className="cw-header">
          <div className="cw-header-title">
            <span className="cw-header-icon">💬</span>
            <div>
              <h3>Share your thoughts</h3>
              <p>Comment and rate this page</p>
            </div>
          </div>
          <button
            className="cw-close"
            onClick={() => setOpen(false)}
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Tabs */}
        <div className="cw-tabs">
          <button
            className={`cw-tab ${tab === 'write' ? 'active' : ''}`}
            onClick={() => setTab('write')}
          >
            ✏️ Write
          </button>
          <button
            className={`cw-tab ${tab === 'recent' ? 'active' : ''}`}
            onClick={() => setTab('recent')}
          >
            💬 Recent
            {totalCount > 0 && <span className="cw-tab-count">{totalCount}</span>}
          </button>
        </div>

        {/* Body */}
        <div className="cw-body">
          {tab === 'write' && (
            <form className="cw-form" onSubmit={handleSubmit}>
              <div className="cw-field">
                <label htmlFor="cw-name">Your name (optional)</label>
                <input
                  id="cw-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Anonymous"
                  maxLength={40}
                  autoComplete="off"
                />
              </div>

              <div className="cw-field">
                <label htmlFor="cw-comment">Your comment</label>
                <textarea
                  id="cw-comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="What do you think about Cybernaxe?"
                  rows={4}
                  maxLength={500}
                  required
                />
                <div className="cw-char-count">{comment.length} / 500</div>
              </div>

              <div className="cw-field">
                <label>Rate this page</label>
                <div
                  className="cw-stars"
                  onMouseLeave={() => setHoveredRating(0)}
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className={`cw-star ${
                        star <= (hoveredRating || rating) ? 'active' : ''
                      }`}
                      onClick={() => setRating(star === rating ? 0 : star)}
                      onMouseEnter={() => setHoveredRating(star)}
                      aria-label={`Rate ${star} of 5`}
                    >
                      ★
                    </button>
                  ))}
                  {rating > 0 && (
                    <span className="cw-rating-label">
                      {rating === 5
                        ? 'Excellent'
                        : rating === 4
                        ? 'Great'
                        : rating === 3
                        ? 'Good'
                        : rating === 2
                        ? 'Okay'
                        : 'Needs work'}
                    </span>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="cw-submit"
                disabled={sending || !comment.trim()}
              >
                {sending ? 'Posting...' : 'Post Comment'}
              </button>

              <p className="cw-note">
                Your comment is public and helps us improve.
              </p>
            </form>
          )}

          {tab === 'recent' && (
            <>
              {showSuccess && (
                <div className="cw-success">
                  <span>✓</span>
                  Thanks! Your feedback has been posted.
                </div>
              )}

              {loading && comments.length === 0 && (
                <div className="cw-skeletons">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="cw-skeleton">
                      <div className="cw-skeleton-avatar" />
                      <div className="cw-skeleton-lines">
                        <div className="cw-skeleton-line short" />
                        <div className="cw-skeleton-line" />
                        <div className="cw-skeleton-line medium" />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {!loading && comments.length === 0 && (
                <div className="cw-empty">
                  <div className="cw-empty-icon">💭</div>
                  <p>No comments yet.</p>
                  <span>Be the first to share your thoughts.</span>
                </div>
              )}

              {comments.length > 0 && (
                <div className="cw-feed" ref={feedRef}>
                  {visible.map((c) => {
                    const isOwn = ownCommentsRef.current.has(
                      `${c.comment}|${c.timestamp}`
                    );
                    return (
                      <div
                        key={c.id}
                        className={`cw-item ${isOwn ? 'cw-item-own' : ''}`}
                      >
                        <div className="cw-item-head">
                          <div className="cw-avatar">
                            {c.name.charAt(0).toUpperCase()}
                          </div>
                          <div className="cw-meta">
                            <strong>
                              {c.name}
                              {isOwn && (
                                <span className="cw-you-badge">You</span>
                              )}
                            </strong>
                            <span>{timeAgo(c.timestamp)}</span>
                          </div>
                          {c.rating > 0 && (
                            <div className="cw-item-rating">
                              {'★'.repeat(c.rating)}
                            </div>
                          )}
                        </div>
                        <p className="cw-item-text">{c.comment}</p>
                      </div>
                    );
                  })}

                  {hasMore && (
                    <div ref={sentinelRef} className="cw-sentinel" />
                  )}

                  {!hasMore && comments.length > PAGE_SIZE && (
                    <div className="cw-end">— end of feed —</div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}