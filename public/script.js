  // Navbar scroll
  window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20);
  });
 
  // Mobile menu
  function toggleMenu() {
    document.getElementById('hamburger').classList.toggle('open');
    document.getElementById('mobileMenu').classList.toggle('open');
  }
  function closeMenu() {
    document.getElementById('hamburger').classList.remove('open');
    document.getElementById('mobileMenu').classList.remove('open');
  }
  
  // Chatbot
  function openChat() {
    const modal = document.getElementById('chatbotModal');
    const overlay = document.getElementById('chatbotOverlay');
    modal.classList.add('show');
    overlay.classList.add('show');
  }

  function closeChat() {
    const modal = document.getElementById('chatbotModal');
    const overlay = document.getElementById('chatbotOverlay');
    modal.classList.remove('show');
    overlay.classList.remove('show');
  }
 
  // Scroll reveal + progress bars
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(el => {
      if (el.isIntersecting) {
        el.target.classList.add('visible');
 
        // Animate progress rings
        el.target.querySelectorAll('.progress-ring-fg').forEach(ring => {
          const circumference = 188.4;
          const pct = parseFloat(ring.dataset.progress) / 100;
          ring.style.strokeDashoffset = circumference * (1 - pct);
        });
 
        // Animate learning progress bars
        el.target.querySelectorAll('.learning-progress-fill').forEach(bar => {
          bar.style.width = bar.dataset.width;
        });
      }
    });
  }, { threshold: 0.15 });
 
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  document.querySelectorAll('.progress-item, .learning-card').forEach(el => observer.observe(el));
 
  // Also observe about section for progress rings
  const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.progress-ring-fg').forEach(ring => {
          const circumference = 188.4;
          const pct = parseFloat(ring.dataset.progress) / 100;
          ring.style.strokeDashoffset = circumference * (1 - pct);
        });
      }
    });
  }, { threshold: 0.2 });
  const aboutEl = document.getElementById('about');
  if (aboutEl) aboutObserver.observe(aboutEl);
 
  // Form submit
  function handleSubmit(e) {
    e.preventDefault();
    const btn = e.target.querySelector('.btn-submit');
    btn.textContent = 'Sending…';
    btn.disabled = true;
    setTimeout(() => {
      showToast('success', '🎉', 'Message Sent!', 'Thanks! I\'ll get back to you within 24 hours.');
      e.target.reset();
      btn.innerHTML = '<svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg> Send Message';
      btn.disabled = false;
    }, 1500);
  }
 
  function showToast(type, icon, title, sub) {
    const t = document.getElementById('toast');
    t.className = 'toast ' + type;
    document.getElementById('toastIcon').textContent = icon;
    document.getElementById('toastTitle').textContent = title;
    document.getElementById('toastSub').textContent = sub;
    t.classList.add('show');
    setTimeout(hideToast, 4500);
  }
  function hideToast() {
    document.getElementById('toast').classList.remove('show');
  }
  
  // Scroll indicator click
  const scrollIndicator = document.querySelector('.scroll-indicator');
  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
      document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    });
    scrollIndicator.style.cursor = 'pointer';
  }
 
  // Counter animation for hero stats
  function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
      const target = parseInt(counter.dataset.target);
      const duration = 2000; // 2 seconds
      const start = Date.now();
      
      const updateCounter = () => {
        const elapsed = Date.now() - start;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.floor(progress * target);
        counter.textContent = current + '+';
        
        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        }
      };
      updateCounter();
    });
  }
  
  // Trigger counter animation when hero section comes into view
  const heroSection = document.getElementById('hero');
  if (heroSection) {
    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counters-animated')) {
          entry.target.classList.add('counters-animated');
          animateCounters();
          heroObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    heroObserver.observe(heroSection);
  }

  // Smooth scroll for all nav links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (href && href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });