'use strict';

// ─── Preloaded Lessons ────────────────────────────────────
const PRELOADED = [
  { id:1, title:"Why We Feel Sad", category:"emotions", emoji:"🌧️",
    explanation:"Sadness is not caused by events — it is caused by the gap between what is and what the mind insists should be. Every time reality does not match the story we carry inside, the mind protests. That protest is sadness. We grieve not the moment but our attachment to a different version of it.",
    advice:"When sadness appears, pause and ask: 'What expectation am I holding right now?' Name it clearly. Often, just seeing the expectation dissolves half the pain. You cannot fight reality — but you can stop arguing with it.",
    insight:"Suffering is resistance. The mind compares the present moment to an imagined ideal, and when they do not match, pain arises. You are not sad because something happened — you are sad because you believed something else should have happened instead.",
    tags:["sadness","emotions","expectations","pain","mind"] },

  { id:2, title:"How to Be Happy", category:"happiness", emoji:"☀️",
    explanation:"Happiness is not something you find outside. Every pursuit of happiness through objects, people, or achievements follows the same pattern: a brief flicker of satisfaction, followed by return to the baseline. That is because happiness is your natural state — not a destination, but the uncovered ground beneath all the noise.",
    advice:"Each morning, before reaching for your phone, sit still for two minutes. Notice what is already here — not what is missing. This small practice rewires attention from lack to presence.",
    insight:"You do not become happy. You remove what blocks happiness. Joy is already present — it is the stillness beneath thought, the silence between two breaths. The one who seeks happiness has not yet looked inward.",
    tags:["happiness","joy","presence","mind","stillness"] },

  { id:3, title:"What Is True Bliss (Anand)", category:"bliss", emoji:"✨",
    explanation:"Anand — true bliss — is not excitement or pleasure. Pleasure fades; excitement collapses. Anand is the steady, deep joy that needs no cause. It arises not from getting what you want but from being so fully present that the wanting itself becomes quiet. Saints and sages describe it not as a feeling but as your truest nature.",
    advice:"Sit in nature or in silence once a day — not to think but to simply be. Notice the quality of awareness itself: wide, open, effortless. That background is always there. You are learning to feel it.",
    insight:"Pleasure is dependent — it needs an object. Anand is independent — it needs nothing. When the mind becomes completely still, even for a moment, what remains is not emptiness but a luminous fullness. That is Anand.",
    tags:["bliss","anand","joy","meditation","consciousness","stillness"] },

  { id:4, title:"Action vs. Reaction", category:"consciousness", emoji:"⚡",
    explanation:"A reaction is unconscious — it is the past speaking through the present. When someone insults you and rage rises automatically, that is not you choosing — that is old conditioning playing out. An action, by contrast, is chosen. It comes from clarity. Between stimulus and response, there is always a gap. Wisdom lives in that gap.",
    advice:"When triggered, use the phrase: 'This is a reaction, not a truth.' Take one breath before responding. Over time, that one breath becomes the difference between a life driven by the past and a life led by intention.",
    insight:"Reactions are borrowed — they come from wounds, fears, and habits. Actions are original — they arise from awareness. The more present you are, the wider that gap becomes, and the more freedom you have.",
    tags:["action","reaction","consciousness","awareness","freedom","mind"] },

  { id:5, title:"Ego vs. Love", category:"relationships", emoji:"🪷",
    explanation:"The ego wants to win. Love wants to connect. The ego keeps score; love keeps no accounts. Ego says 'I am right' — love says 'I see you.' Nearly every conflict in human relationships is not between two people but between two egos — two stories, two wounds, two fears — each waiting to be proved right.",
    advice:"In your next conflict, try this: speak less and listen more. Ask 'What are they actually afraid of?' rather than 'How do I win this?' The moment you seek understanding over victory, you step out of ego and into love.",
    insight:"Wherever you feel the need to defend yourself, the ego is present. Wherever you feel the impulse to understand rather than be understood, love is present. You can never love and protect your ego at the same time — one must yield.",
    tags:["ego","love","relationships","consciousness","emotions","conflict"] },

  { id:6, title:"How to Control the Mind", category:"mind", emoji:"🧠",
    explanation:"The untrained mind is like water without a container — it takes the shape of every fear, craving, and distraction it touches. But the mind cannot be controlled through force — suppression only deepens the pressure. True mastery of the mind comes through observation. When you watch a thought without identifying with it, it loses its grip.",
    advice:"Practice the 'witness technique': for five minutes each day, sit and simply notice thoughts — label them as 'thinking' and let them pass, the way clouds pass across sky. Do not chase or fight them. The sky is never stained by the clouds.",
    insight:"You are not your thoughts. You are the one who notices them. The moment you observe a thought without being it, you have already stepped outside the mind's control. Awareness is always bigger than what it is aware of.",
    tags:["mind","control","meditation","awareness","thoughts","consciousness"] },

  { id:7, title:"Living Consciously", category:"consciousness", emoji:"🌿",
    explanation:"Most of life is lived on autopilot — the same reactions, the same words, the same path from bed to screen to sleep. Conscious living means waking up inside the ordinary moments. It means asking: 'Am I choosing this, or did habit choose it for me?' A conscious life is not busier — it is simply awake.",
    advice:"Choose one daily routine — brushing teeth, making coffee, walking — and do it completely consciously today. Notice every sensation. Notice when the mind wanders. This is the practice of waking up inside ordinary life.",
    insight:"Unconscious living is not living — it is a long dream. The person who wakes up at 60 and wonders where life went was present in body but absent in awareness. Every moment is the only moment you will ever actually have.",
    tags:["consciousness","awareness","presence","living","mindfulness","habit"] },

  { id:8, title:"Peace and Awareness", category:"peace", emoji:"🌊",
    explanation:"Peace is not the absence of noise — it is the presence of awareness that is not disturbed by noise. A lake is deep even while its surface is rough. Inner peace works the same way. It is not found by removing difficulty; it is found by discovering the layer of you that difficulty cannot touch.",
    advice:"When the day feels chaotic, stop and ask: 'Who is noticing all this chaos?' Turn attention to the observer, not the observed. Even for ten seconds, rest as the one who notices. That is where peace lives.",
    insight:"Awareness is always peaceful. It is the thoughts about life that disturb us — not life itself. When you rest as awareness rather than as thought, you find a peace that external circumstances cannot give and cannot take.",
    tags:["peace","awareness","stillness","consciousness","meditation","mind"] },

  { id:9, title:"Meditation and Inner Clarity", category:"meditation", emoji:"🕯️",
    explanation:"Meditation is not about achieving a blank mind — it is about learning to sit with whatever arises without being enslaved by it. In stillness, the mud in the water settles. Clarity is not something added; it is what remains when the constant movement of the mind slows. One session of honest sitting does more for clarity than a hundred hours of anxious thinking.",
    advice:"Start with just five minutes. Sit still. Watch the breath — not controlling it, just watching. When thoughts arise, note them and return to the breath. Do not measure the session by how quiet the mind was, but simply by whether you showed up.",
    insight:"The mind that has learned to be still sees clearly. Like a calm lake reflecting the sky perfectly, a quiet mind reflects reality without distortion. Decisions, relationships, life's direction — all become clearer when the noise settles.",
    tags:["meditation","clarity","mind","stillness","breath","presence","consciousness"] },

  { id:10, title:"Living Life Fully", category:"living", emoji:"🌸",
    explanation:"To live fully is not to do more — it is to be present for what you are already doing. The person who rushes through every meal, every conversation, every sunset — always thinking ahead — is technically alive but never fully here. Life is not somewhere else. It is precisely and only here, in this moment, in this breath.",
    advice:"Before any significant moment — a conversation, a meal, a walk — pause for one breath and set an intention: 'I will be here for this.' Then honor it. Presence is a practice, not a personality type.",
    insight:"Death will not take away your future — only your present moments. The person who has truly lived every ordinary day has had a richer life than the one who collected extraordinary experiences while being absent for all of them.",
    tags:["living","presence","fullness","life","consciousness","awareness","joy"] },

  { id:11, title:"The Illusion of the Self", category:"consciousness", emoji:"🪞",
    explanation:"The 'I' you refer to is a story — a collection of memories, preferences, roles, and narratives assembled over a lifetime. This constructed self is not the enemy, but mistaking it for what you truly are is the root of most suffering. You are not your name, your job, your past, or your opinions. You are the awareness in which all of these appear.",
    advice:"Notice how many times a day you say 'I am...' — and complete the sentence with something temporary: tired, right, a failure, successful. Practice adding the word 'experiencing' instead: 'I am experiencing tiredness.' You are the experiencer, not the experience.",
    insight:"When you identify with a fixed self, every threat to that self becomes a personal attack. When you rest as awareness — fluid, open, prior to identity — nothing can wound you at the root. You become water: taking many shapes but unchanged in nature.",
    tags:["self","ego","consciousness","identity","awareness","illusion"] },

  { id:12, title:"The Art of Letting Go", category:"peace", emoji:"🍃",
    explanation:"Holding on is exhausting. We grip people, identities, ideas of how things should be — and carry them forward like stones in a river. Letting go is not giving up. It is recognizing that some things do not belong to us to carry. Grief passes faster through an open hand than a closed fist. Change moves through acceptance faster than through resistance.",
    advice:"Write down one thing you are holding onto that exhausts you — a resentment, a regret, a version of yourself or someone else. Read it aloud, then say: 'I allow this to be exactly what it is.' Repeat until the grip softens.",
    insight:"You cannot control life's river, but you can stop fighting its current. Everything that has left you left because it was meant to. The suffering is not in the leaving — it is in refusing to let the leaving complete itself.",
    tags:["letting go","acceptance","peace","grief","surrender","freedom"] }
];

// ─── State ────────────────────────────────────────────────
let allLessons     = [];   // preloaded + custom
let customLessons  = [];   // persisted in localStorage
let currentLesson  = null;
let highlightOn    = false;
let activeFilter   = 'all';
let searchQuery    = '';
let deferredInstall = null;

// ─── DOM ──────────────────────────────────────────────────
const homeView      = document.getElementById('home-view');
const lessonView    = document.getElementById('lesson-view');
const cardsGrid     = document.getElementById('cards-grid');
const searchInput   = document.getElementById('search-input');
const searchClear   = document.getElementById('search-clear');
const searchPanel   = document.getElementById('search-panel');
const searchToggle  = document.getElementById('search-toggle');
const noResults     = document.getElementById('no-results');
const sectionLabel  = document.getElementById('section-label');
const installBtn    = document.getElementById('install-btn');
const lessonCount   = document.getElementById('lesson-count');
const toast         = document.getElementById('toast');
const filterBar     = document.getElementById('filter-bar');
const themeToggle   = document.getElementById('theme-toggle');
const themePanel    = document.getElementById('theme-panel');
const addLessonBtn  = document.getElementById('add-lesson-btn');
const modalOverlay  = document.getElementById('modal-overlay');
const modalClose    = document.getElementById('modal-close');
const modalCancel   = document.getElementById('modal-cancel');
const modalSave     = document.getElementById('modal-save');
const fieldError    = document.getElementById('field-error');
const detailEmoji      = document.getElementById('detail-emoji');
const detailTitle      = document.getElementById('detail-title');
const detailCategory   = document.getElementById('detail-category');
const detailExplanation= document.getElementById('detail-explanation');
const detailAdvice     = document.getElementById('detail-advice');
const detailInsight    = document.getElementById('detail-insight');
const detailTags       = document.getElementById('detail-tags');
const highlightBtn     = document.getElementById('highlight-btn');
const pdfBtn           = document.getElementById('pdf-btn');

// ─── Init ─────────────────────────────────────────────────
function init() {
  loadCustomLessons();
  let deletedIds = [];
  try { deletedIds = JSON.parse(localStorage.getItem('lw-deleted') || '[]'); } catch {}
  const deletedSet = new Set(deletedIds);
  allLessons = [...PRELOADED, ...customLessons].filter(l => !deletedSet.has(l.id));
  updateCount();
  applyTheme(localStorage.getItem('lw-theme') || 'forest');
  renderCards();
  bindSearch();
  bindFilterBar();
  bindTheme();
  bindAddLesson();
  bindDetail();
  registerSW();
  handleInstallPrompt();
}

// ─── Custom lessons persistence ───────────────────────────
function loadCustomLessons() {
  try {
    customLessons = JSON.parse(localStorage.getItem('lw-custom') || '[]');
  } catch { customLessons = []; }
}
function saveCustomLessons() {
  localStorage.setItem('lw-custom', JSON.stringify(customLessons));
}

function updateCount() {
  lessonCount.textContent = `${allLessons.length} lessons`;
}

// ─── Render home list ─────────────────────────────────────
function renderCards() {
  let items = allLessons;

  // Apply category filter
  if (activeFilter !== 'all') {
    if (activeFilter === 'custom') {
      items = items.filter(l => l.custom);
    } else {
      items = items.filter(l => l.category === activeFilter);
    }
  }

  // Apply search
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    items = items.filter(l =>
      l.title.toLowerCase().includes(q) ||
      l.explanation.toLowerCase().includes(q) ||
      l.advice.toLowerCase().includes(q) ||
      l.insight.toLowerCase().includes(q) ||
      (l.tags||[]).some(t => t.includes(q))
    );
  }

  cardsGrid.innerHTML = '';

  if (!items.length) {
    noResults.classList.add('visible');
    sectionLabel.textContent = searchQuery ? `Results for "${searchQuery}"` : 'No lessons here yet';
    return;
  }
  noResults.classList.remove('visible');
  sectionLabel.textContent = searchQuery
    ? `Results for "${searchQuery}"`
    : activeFilter === 'all' ? 'All Lessons'
    : activeFilter === 'custom' ? 'My Lessons'
    : `${activeFilter.charAt(0).toUpperCase()}${activeFilter.slice(1)}`;

  items.forEach((lesson, i) => {
    const card = document.createElement('article');
    card.className = 'lesson-card';
    card.style.animationDelay = `${i * 40}ms`;
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', lesson.title);

    const customBadge = lesson.custom
      ? `<span class="card-custom-badge">My Lesson</span>` : '';

    card.innerHTML = `
      <div class="card-title-row">
        <div class="card-emoji" aria-hidden="true">${lesson.emoji || '📖'}</div>
        <div class="card-title-text">
          <h2 class="card-title">${lesson.title}${customBadge}</h2>
          <span class="card-category">${lesson.category}</span>
        </div>
        <button class="card-delete-btn" data-id="${lesson.id}" aria-label="Delete ${lesson.title}" title="Delete">
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 4h12M5 4V3a1 1 0 011-1h4a1 1 0 011 1v1M6 7v5M10 7v5M3 4l1 9a1 1 0 001 1h6a1 1 0 001-1l1-9"
                  stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <svg class="card-arrow" width="14" height="14" viewBox="0 0 16 16"
             fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M6 3l5 5-5 5" stroke="currentColor" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>`;

    const open = () => openLesson(lesson);
    card.addEventListener('click', open);
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
    });
    card.querySelector('.card-delete-btn').addEventListener('click', e => {
      e.stopPropagation();
      deleteLesson(lesson, card);
    });
    cardsGrid.appendChild(card);
  });
}

// ─── Open full-page lesson ────────────────────────────────
function openLesson(lesson) {
  currentLesson = lesson;
  highlightOn   = false;

  detailEmoji.textContent        = lesson.emoji || '📖';
  detailTitle.textContent        = lesson.title;
  detailCategory.textContent     = lesson.category;
  detailExplanation.textContent  = lesson.explanation;
  detailAdvice.textContent       = lesson.advice;
  detailInsight.textContent      = lesson.insight;
  delete detailExplanation.dataset.raw;
  delete detailAdvice.dataset.raw;
  delete detailInsight.dataset.raw;

  highlightBtn.classList.remove('active');
  highlightBtn.setAttribute('aria-pressed', 'false');
  lessonView.classList.remove('detail-highlight');

  detailTags.innerHTML = (lesson.tags||[]).map(t=>`<span class="tag">#${t}</span>`).join('');

  homeView.style.display   = 'none';
  lessonView.style.display = 'block';
  lessonView.classList.remove('active');
  void lessonView.offsetWidth;
  lessonView.classList.add('active');

  window.scrollTo({ top: 0, behavior: 'instant' });
  history.pushState({ lessonId: lesson.id }, '', `#lesson-${lesson.id}`);
}

function closeLesson() {
  lessonView.classList.remove('active');
  lessonView.style.display = 'none';
  homeView.style.display   = 'block';
  currentLesson = null;
  highlightOn   = false;
  window.scrollTo({ top: 0, behavior: 'instant' });
  if (history.state?.lessonId) history.back();
}

// ─── Delete lesson ────────────────────────────────────────
function deleteLesson(lesson, cardEl) {
  // Animate card out first, then confirm
  cardEl.style.transition = 'opacity 0.18s, transform 0.18s';
  cardEl.style.opacity = '0.5';
  cardEl.style.transform = 'translateX(8px)';

  const confirmed = confirm(`Delete "${lesson.title}"?\n\nThis cannot be undone.`);
  if (!confirmed) {
    cardEl.style.opacity = '';
    cardEl.style.transform = '';
    return;
  }

  // Remove from preloaded: just hide by adding to a deletedIds set
  let deletedIds = [];
  try { deletedIds = JSON.parse(localStorage.getItem('lw-deleted') || '[]'); } catch {}
  if (!deletedIds.includes(lesson.id)) deletedIds.push(lesson.id);
  localStorage.setItem('lw-deleted', JSON.stringify(deletedIds));

  // If custom, also remove from customLessons
  if (lesson.custom) {
    customLessons = customLessons.filter(l => l.id !== lesson.id);
    saveCustomLessons();
  }

  // Rebuild allLessons excluding deleted
  const deleted = new Set(deletedIds);
  allLessons = [...PRELOADED, ...customLessons].filter(l => !deleted.has(l.id));
  updateCount();

  // Animate removal
  cardEl.style.opacity = '0';
  cardEl.style.transform = 'translateX(20px)';
  cardEl.style.maxHeight = cardEl.offsetHeight + 'px';
  setTimeout(() => {
    cardEl.style.transition += ', max-height 0.22s, margin 0.22s';
    cardEl.style.maxHeight = '0';
    cardEl.style.marginBottom = '0';
    cardEl.style.overflow = 'hidden';
  }, 160);
  setTimeout(() => { renderCards(); showToast(`"${lesson.title}" deleted`); }, 400);
}

// ─── Detail buttons ───────────────────────────────────────
function bindDetail() {
  document.getElementById('back-btn').addEventListener('click', closeLesson);
  window.addEventListener('popstate', () => { if (currentLesson) closeLesson(); });

  highlightBtn.addEventListener('click', () => {
    highlightOn = !highlightOn;
    highlightBtn.classList.toggle('active', highlightOn);
    highlightBtn.setAttribute('aria-pressed', String(highlightOn));
    lessonView.classList.toggle('detail-highlight', highlightOn);

    const fields = [detailExplanation, detailAdvice, detailInsight];
    if (highlightOn) {
      fields.forEach(el => {
        const raw = el.dataset.raw || el.textContent;
        el.dataset.raw = raw;
        el.innerHTML = raw
          .split(/(?<=[.!?—])\s+/)
          .filter(s => s.trim())
          .map(s => `<mark>${s.trim()}</mark>`)
          .join(' ');
      });
      showToast('Highlighted · tap again to clear');
    } else {
      fields.forEach(el => {
        if (el.dataset.raw) { el.textContent = el.dataset.raw; delete el.dataset.raw; }
      });
      showToast('Highlights cleared');
    }
  });

  pdfBtn.addEventListener('click', () => {
    if (currentLesson) loadAndBuildPDF(currentLesson);
  });

  document.getElementById('detail-delete-btn').addEventListener('click', () => {
    if (!currentLesson) return;
    const lesson = currentLesson;
    const confirmed = confirm(`Delete "${lesson.title}"?\n\nThis cannot be undone.`);
    if (!confirmed) return;

    let deletedIds = [];
    try { deletedIds = JSON.parse(localStorage.getItem('lw-deleted') || '[]'); } catch {}
    if (!deletedIds.includes(lesson.id)) deletedIds.push(lesson.id);
    localStorage.setItem('lw-deleted', JSON.stringify(deletedIds));

    if (lesson.custom) {
      customLessons = customLessons.filter(l => l.id !== lesson.id);
      saveCustomLessons();
    }

    const deleted = new Set(deletedIds);
    allLessons = [...PRELOADED, ...customLessons].filter(l => !deleted.has(l.id));
    updateCount();

    closeLesson();
    setTimeout(() => { renderCards(); showToast(`"${lesson.title}" deleted`); }, 320);
  });
}

// ─── Filter bar ───────────────────────────────────────────
function bindFilterBar() {
  filterBar.addEventListener('click', e => {
    const chip = e.target.closest('.filter-chip');
    if (!chip) return;
    filterBar.querySelectorAll('.filter-chip').forEach(c => {
      c.classList.remove('active');
      c.setAttribute('aria-selected', 'false');
    });
    chip.classList.add('active');
    chip.setAttribute('aria-selected', 'true');
    activeFilter = chip.dataset.cat;
    renderCards();
    // Scroll chip into view
    chip.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  });
}

// ─── Search ───────────────────────────────────────────────
function bindSearch() {
  let timer;
  searchToggle.addEventListener('click', () => {
    const open = searchPanel.classList.toggle('open');
    searchToggle.classList.toggle('active', open);
    searchToggle.setAttribute('aria-expanded', String(open));
    searchPanel.setAttribute('aria-hidden', String(!open));
    if (open) setTimeout(() => searchInput.focus(), 220);
    else { searchInput.value = ''; searchQuery = ''; searchClear.classList.remove('visible'); renderCards(); }
  });
  searchInput.addEventListener('input', () => {
    const q = searchInput.value.trim();
    searchClear.classList.toggle('visible', q.length > 0);
    clearTimeout(timer);
    timer = setTimeout(() => { searchQuery = q; renderCards(); }, 200);
  });
  searchClear.addEventListener('click', () => {
    searchInput.value = ''; searchQuery = '';
    searchClear.classList.remove('visible');
    renderCards(); searchInput.focus();
  });
}

// ─── Theme ────────────────────────────────────────────────
function bindTheme() {
  themeToggle.addEventListener('click', () => {
    const open = themePanel.classList.toggle('open');
    themeToggle.classList.toggle('active', open);
    themePanel.setAttribute('aria-hidden', String(!open));
  });
  document.querySelectorAll('.swatch').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.swatch').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyTheme(btn.dataset.theme);
      themePanel.classList.remove('open');
      themeToggle.classList.remove('active');
    });
  });
  // Close theme panel when clicking outside
  document.addEventListener('click', e => {
    if (!themeToggle.contains(e.target) && !themePanel.contains(e.target)) {
      themePanel.classList.remove('open');
      themeToggle.classList.remove('active');
    }
  });
}
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('lw-theme', theme);
  document.querySelectorAll('.swatch').forEach(b => {
    b.classList.toggle('active', b.dataset.theme === theme);
  });
}

// ─── Add Lesson ───────────────────────────────────────────
function bindAddLesson() {
  addLessonBtn.addEventListener('click', openModal);
  modalClose.addEventListener('click', closeModal);
  modalCancel.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
  modalSave.addEventListener('click', saveLesson);
}
function openModal() {
  // Clear fields
  ['f-title','f-emoji','f-explanation','f-advice','f-insight','f-tags'].forEach(id => {
    document.getElementById(id).value = '';
  });
  fieldError.textContent = '';
  modalOverlay.classList.add('open');
  modalOverlay.setAttribute('aria-hidden', 'false');
  setTimeout(() => document.getElementById('f-title').focus(), 300);
}
function closeModal() {
  modalOverlay.classList.remove('open');
  modalOverlay.setAttribute('aria-hidden', 'true');
}
function saveLesson() {
  const title       = document.getElementById('f-title').value.trim();
  const emoji       = document.getElementById('f-emoji').value.trim() || '📖';
  const explanation = document.getElementById('f-explanation').value.trim();
  const advice      = document.getElementById('f-advice').value.trim();
  const insight     = document.getElementById('f-insight').value.trim() || 'Reflect on this teaching in your own life.';
  const tagsRaw     = document.getElementById('f-tags').value.trim();
  const tags        = tagsRaw ? tagsRaw.split(',').map(t=>t.trim()).filter(Boolean) : [];

  if (!title || !explanation || !advice) {
    fieldError.textContent = 'Please fill in Title, Teaching, and Practical Advice.';
    return;
  }

  const newLesson = {
    id: Date.now(),
    title, emoji,
    category: 'custom',
    explanation, advice, insight, tags,
    custom: true
  };

  customLessons.unshift(newLesson);
  saveCustomLessons();
  allLessons = [...PRELOADED, ...customLessons];
  updateCount();

  // Switch filter to show custom lessons
  activeFilter = 'all';
  filterBar.querySelectorAll('.filter-chip').forEach(c => {
    c.classList.toggle('active', c.dataset.cat === 'all');
    c.setAttribute('aria-selected', c.dataset.cat === 'all' ? 'true' : 'false');
  });

  renderCards();
  closeModal();
  showToast(`"${title}" added ✓`);
}

// ─── PDF ──────────────────────────────────────────────────
function loadAndBuildPDF(lesson) {
  if (typeof window.jspdf !== 'undefined') { buildPDF(lesson); return; }
  showToast('Loading PDF engine…');
  const s = document.createElement('script');
  s.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
  s.onload  = () => buildPDF(lesson);
  s.onerror = () => showToast('PDF unavailable offline');
  document.head.appendChild(s);
}

function buildPDF(lesson) {
  // ── Read current theme colors from CSS variables ──────────
  const cs = getComputedStyle(document.documentElement);
  const cssToRgb = (varName, fallback) => {
    const raw = cs.getPropertyValue(varName).trim();
    // handle hex
    if (raw.startsWith('#')) {
      const hex = raw.replace('#','');
      const full = hex.length === 3
        ? hex.split('').map(c=>c+c).join('') : hex;
      return [
        parseInt(full.slice(0,2),16),
        parseInt(full.slice(2,4),16),
        parseInt(full.slice(4,6),16)
      ];
    }
    // handle rgb/rgba
    const m = raw.match(/[\d.]+/g);
    if (m && m.length >= 3) return [+m[0],+m[1],+m[2]];
    return fallback;
  };

  const C = {
    bg:      cssToRgb('--bg',      [247,244,239]),
    bgCard:  cssToRgb('--bg-card', [253,252,250]),
    accent:  cssToRgb('--accent',  [44,95,74]),
    accentBg:cssToRgb('--accent-bg',[238,244,241]),
    gold:    cssToRgb('--gold',    [184,151,90]),
    ink:     cssToRgb('--ink',     [30,28,24]),
    inkMuted:cssToRgb('--ink-muted',[122,118,112]),
    inkFaint:cssToRgb('--ink-faint',[200,196,190]),
  };

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit:'mm', format:'a4' });
  const W=210, M=20, CW=W-M*2;
  let y=0;

  function addText(str, x, startY, opts={}) {
    const {size=11,style='normal',color=C.ink,lh=6.8}=opts;
    doc.setFontSize(size); doc.setFont('helvetica',style);
    doc.setTextColor(...color);
    const lines=doc.splitTextToSize(str, CW-(x-M));
    doc.text(lines,x,startY);
    return startY+lines.length*lh;
  }

  function addBlock(label, str, startY, bg, tc) {
    const lines=doc.splitTextToSize(str,CW-12);
    const h=lines.length*6.2+18;
    doc.setFillColor(...bg);
    doc.roundedRect(M,startY,CW,h,3,3,'F');
    // Label
    doc.setFontSize(7); doc.setFont('helvetica','bold');
    doc.setCharSpace(1.6);
    doc.setTextColor(tc[0],tc[1],tc[2],130);
    doc.text(label.toUpperCase(),M+10,startY+9);
    doc.setCharSpace(0);
    // Body
    doc.setFontSize(10.5); doc.setFont('helvetica','normal');
    doc.setTextColor(...tc);
    doc.text(lines,M+10,startY+16);
    return startY+h+6;
  }

  // ── Header bar (accent color) ────────────────────────────
  doc.setFillColor(...C.accent); doc.rect(0,0,W,16,'F');
  doc.setFontSize(8.5); doc.setFont('helvetica','normal');
  doc.setTextColor(255,255,255);
  doc.text('LIFE WISDOM',M,10.5);
  doc.setTextColor(255,255,255,150);
  doc.text(lesson.custom?'My Lesson':'lifewisdom.app', W-M, 10.5, {align:'right'});

  y=26;
  y=addText(lesson.title, M, y, {size:24, style:'bold', lh:10, color:C.ink}); y+=2;

  // Category pill
  doc.setFillColor(...C.accentBg);
  const pw=doc.getTextWidth(lesson.category.toUpperCase())+14;
  doc.roundedRect(M,y,pw,8,2,2,'F');
  doc.setFontSize(7); doc.setFont('helvetica','bold');
  doc.setCharSpace(1.2); doc.setTextColor(...C.accent);
  doc.text(lesson.category.toUpperCase(),M+5,y+5.5);
  doc.setCharSpace(0); y+=14;

  // Divider
  doc.setDrawColor(...C.inkFaint); doc.setLineWidth(0.3);
  doc.line(M,y,W-M,y); y+=10;

  // Teaching
  doc.setFontSize(7.5); doc.setFont('helvetica','bold');
  doc.setCharSpace(1.5); doc.setTextColor(...C.inkMuted);
  doc.text('THE TEACHING',M,y); doc.setCharSpace(0); y+=7;
  y=addText(lesson.explanation, M, y, {size:11, lh:6.5, color:C.ink}); y+=10;

  // Practical Advice block (bg-card / gold border feel)
  y=addBlock('Practical Advice', lesson.advice,  y, C.bgCard, C.ink);

  // Key Insight block (accent background, white text)
  y=addBlock('Key Insight',      lesson.insight, y, C.accent, [255,255,255]);
  y+=4;

  // Tags
  if (lesson.tags?.length) {
    doc.setFontSize(8); doc.setFont('helvetica','normal');
    doc.setTextColor(...C.inkFaint);
    doc.text(lesson.tags.map(t=>`#${t}`).join('  '),M,y); y+=8;
  }

  // Footer bar (bg color)
  doc.setFillColor(...C.bg); doc.rect(0,283,W,14,'F');
  doc.setFontSize(8); doc.setFont('helvetica','normal');
  doc.setTextColor(...C.inkMuted);
  doc.text('Life Wisdom — Lessons for a conscious life',M,291);
  doc.text(
    new Date().toLocaleDateString('en-IN',{year:'numeric',month:'long',day:'numeric'}),
    W-M,291,{align:'right'}
  );

  doc.save(`${lesson.title.replace(/[^a-z0-9]/gi,'-').toLowerCase()}.pdf`);
  showToast('PDF downloaded ✓');
}

// ─── PWA Install ──────────────────────────────────────────
function handleInstallPrompt() {
  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault(); deferredInstall=e; installBtn.classList.add('visible');
  });
  installBtn.addEventListener('click', async () => {
    if (!deferredInstall) return;
    deferredInstall.prompt();
    const {outcome} = await deferredInstall.userChoice;
    if (outcome==='accepted') showToast('App installed ✓');
    installBtn.classList.remove('visible'); deferredInstall=null;
  });
  window.addEventListener('appinstalled', () => {
    installBtn.classList.remove('visible'); showToast('Welcome to Life Wisdom ✨');
  });
}

function registerSW() {
  if ('serviceWorker' in navigator)
    navigator.serviceWorker.register('sw.js')
      .then(r=>console.log('[SW]',r.scope))
      .catch(e=>console.warn('[SW]',e));
}

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2600);
}

document.addEventListener('DOMContentLoaded', init);
