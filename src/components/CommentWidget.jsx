/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable react-hooks/purity */
'use client';

import { useState, useEffect, useRef } from 'react';

const STORAGE_KEY = 'cybernaxe-my-feedback';

export default function CommentWidget() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState('write'); // 'write' | 'mine'

  // Form
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [sending, setSending] = useState(false);

  // Local-only comments (never fetched from server)
  const [myComments, setMyComments] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showHint, setShowHint] = useState(true);

  const listRef = useRef(null);

  // ─── Load hint dismissal state ───
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const dismissed = sessionStorage.getItem('cw-hint-dismissed');
    if (dismissed === 'true') setShowHint(false);
  }, []);

  useEffect(() => {
    if (open && typeof window !== 'undefined') {
      sessionStorage.setItem('cw-hint-dismissed', 'true');
      setShowHint(false);
    }
  }, [open]);

  // ─── Load this user's past feedback from localStorage ───
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      setMyComments(saved);
    } catch (err) {
      console.error('Failed to load local feedback:', err);
    }
  }, []);

  // ─── Submit ───
  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmed = comment.trim();
    const trimmedName = name.trim() || 'Anonymous';

    if (!trimmed) return;
    if (trimmed.length > 500) return;

    setSending(true);

    const now = new Date();
    const newEntry = {
      id: `local-${now.getTime()}`,
      name: trimmedName,
      comment: trimmed,
      rating,
      timestamp: now.toISOString(),
    };

    // Persist locally (visible only on this browser)
    const updated = [newEntry, ...myComments].slice(0, 20);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (err) {
      console.error('Local save failed:', err);
    }
    setMyComments(updated);

    // Send to Google Sheet (for admin only - never displayed publicly)
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
            private: true,
          }),
        });
      }

      // Reset form
      setName('');
      setComment('');
      setRating(0);
      setShowSuccess(true);

      // Switch to "mine" tab and scroll to top
      setTab('mine');
      if (listRef.current) {
        listRef.current.scrollTo({ top: 0, behavior: 'smooth' });
      }

      setTimeout(() => setShowSuccess(false), 4000);
    } catch (err) {
      console.error('Submit error:', err);
      // Keep it locally even if server fails - user experience first
    } finally {
      setSending(false);
    }
  };

  const handleDelete = (id) => {
    if (typeof window === 'undefined') return;
    if (!window.confirm('Remove this feedback from your device?')) return;

    const updated = myComments.filter((c) => c.id !== id);
    setMyComments(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (err) {
      console.error('Delete failed:', err);
    }
  };

  const handleClearAll = () => {
    if (typeof window === 'undefined') return;
    if (!window.confirm('Remove all your feedback from this device?')) return;
    setMyComments([]);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (err) {
      console.error('Clear failed:', err);
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

  const myCount = myComments.length;

  return (
    <>
      {/* ─── Hint + Trigger ─── */}
<div className="cw-trigger-wrap">
  {!open && showHint && (
    <button
      type="button"
      className="cw-hint"
      onClick={() => setOpen(true)}
      tabIndex={-1}
    >
      <span className="cw-hint-icon" aria-hidden="true">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <rect x="4" y="11" width="16" height="10" rx="2" />
          <path d="M8 11V7a4 4 0 118 0v4" strokeLinecap="round" />
        </svg>
      </span>
      <span className="cw-hint-text">Only visible to you</span>
      <span className="cw-hint-close" aria-hidden="true">✕</span>
    </button>
  )}

  <button
    className={`cw-trigger ${open ? 'cw-trigger-hidden' : ''}`}
    onClick={() => setOpen(true)}
    aria-label="Open private feedback"
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path
        d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    {myCount > 0 && <span className="cw-badge">{myCount}</span>}
  </button>
</div>

      {/* ─── Overlay ─── */}
      <div
        className={`cw-overlay ${open ? 'show' : ''}`}
        onClick={() => setOpen(false)}
      />

      {/* ─── Panel ─── */}
      <div className={`cw-panel ${open ? 'show' : ''}`}>
        {/* Header */}
        <div className="cw-header">
          <div className="cw-header-title">
            <span className="cw-header-icon">🔒</span>
            <div>
              <h3>Private feedback</h3>
              <p>We Valued Your Feedback</p>
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
            className={`cw-tab ${tab === 'mine' ? 'active' : ''}`}
            onClick={() => setTab('mine')}
          >
            🔒 My feedback
            {myCount > 0 && <span className="cw-tab-count">{myCount}</span>}
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
                <label htmlFor="cw-comment">Your feedback</label>
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
                {sending ? 'Sending...' : 'Send Private Feedback'}
              </button>

              <p className="cw-note">
                🔒 Your feedback is private. It goes directly to the Cybernaxe
                team - no one else sees it.
              </p>
            </form>
          )}

          {tab === 'mine' && (
            <>
              {showSuccess && (
                <div className="cw-success">
                  <span>✓</span>
                  Thanks! Your feedback has been received.
                </div>
              )}

              {myCount === 0 && (
                <div className="cw-empty">
                  <div className="cw-empty-icon">🔒</div>
                  <p>No feedback yet.</p>
                  <span>
                    Your comments will appear here - only on this device.
                  </span>
                  <button
                    type="button"
                    className="cw-empty-cta"
                    onClick={() => setTab('write')}
                  >
                    Write feedback
                  </button>
                </div>
              )}

              {myCount > 0 && (
                <>
                  <div className="cw-feed" ref={listRef}>
                    {myComments.map((c) => (
                      <div key={c.id} className="cw-item cw-item-own">
                        <div className="cw-item-head">
                          <div className="cw-avatar">
                            {c.name.charAt(0).toUpperCase()}
                          </div>
                          <div className="cw-meta">
                            <strong>
                              {c.name}
                              <span className="cw-you-badge">You</span>
                            </strong>
                            <span>{timeAgo(c.timestamp)}</span>
                          </div>
                          {c.rating > 0 && (
                            <div className="cw-item-rating">
                              {'★'.repeat(c.rating)}
                            </div>
                          )}
                          <button
                            type="button"
                            className="cw-item-delete"
                            onClick={() => handleDelete(c.id)}
                            aria-label="Remove this feedback"
                            title="Remove from device"
                          >
                            ✕
                          </button>
                        </div>
                        <p className="cw-item-text">{c.comment}</p>
                      </div>
                    ))}
                  </div>

                  <div className="cw-feed-footer">
                    <button
                      type="button"
                      className="cw-clear-all"
                      onClick={handleClearAll}
                    >
                      Clear all from this device
                    </button>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}