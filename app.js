'use strict';

// ─── Lessons data ─────────────────────────────────────────
const LESSONS_DATA = [
  { id:1, title:"Why We Feel Sad", category:"emotions", emoji:"🌧️",
    explanation:"Sadness is not caused by events — it is caused by the gap between what is and what the mind insists should be. Every time reality does not match the story we carry inside, the mind protests. That protest is sadness. We grieve not the moment but our attachment to a different version of it.",
    insight:"Suffering is resistance. The mind compares the present moment to an imagined ideal, and when they do not match, pain arises. You are not sad because something happened — you are sad because you believed something else should have happened instead.",
    advice:"When sadness appears, pause and ask: 'What expectation am I holding right now?' Name it clearly. Often, just seeing the expectation dissolves half the pain. You cannot fight reality — but you can stop arguing with it.",
    tags:["sadness","emotions","expectations","pain","mind"] },

  { id:2, title:"How to Be Happy", category:"happiness", emoji:"☀️",
    explanation:"Happiness is not something you find outside. Every pursuit of happiness through objects, people, or achievements follows the same pattern: a brief flicker of satisfaction, followed by return to the baseline. That is because happiness is your natural state — not a destination, but the uncovered ground beneath all the noise.",
    insight:"You do not become happy. You remove what blocks happiness. Joy is already present — it is the stillness beneath thought, the silence between two breaths. The one who seeks happiness has not yet looked inward.",
    advice:"Each morning, before reaching for your phone, sit still for two minutes. Notice what is already here — not what is missing. This small practice rewires attention from lack to presence.",
    tags:["happiness","joy","presence","mind","stillness"] },

  { id:3, title:"What Is True Bliss (Anand)", category:"bliss", emoji:"✨",
    explanation:"Anand — true bliss — is not excitement or pleasure. Pleasure fades; excitement collapses. Anand is the steady, deep joy that needs no cause. It arises not from getting what you want but from being so fully present that the wanting itself becomes quiet. Saints and sages describe it not as a feeling but as your truest nature.",
    insight:"Pleasure is dependent — it needs an object. Anand is independent — it needs nothing. When the mind becomes completely still, even for a moment, what remains is not emptiness but a luminous fullness. That is Anand.",
    advice:"Sit in nature or in silence once a day — not to think but to simply be. Notice the quality of awareness itself: wide, open, effortless. That background is always there. You are learning to feel it.",
    tags:["bliss","anand","joy","meditation","consciousness","stillness"] },

  { id:4, title:"Action vs. Reaction", category:"consciousness", emoji:"⚡",
    explanation:"A reaction is unconscious — it is the past speaking through the present. When someone insults you and rage rises automatically, that is not you choosing — that is old conditioning playing out. An action, by contrast, is chosen. It comes from clarity. Between stimulus and response, there is always a gap. Wisdom lives in that gap.",
    insight:"Reactions are borrowed — they come from wounds, fears, and habits. Actions are original — they arise from awareness. The more present you are, the wider that gap becomes, and the more freedom you have.",
    advice:"When triggered, use the phrase: 'This is a reaction, not a truth.' Take one breath before responding. Over time, that one breath becomes the difference between a life driven by the past and a life led by intention.",
    tags:["action","reaction","consciousness","awareness","freedom","mind"] },

  { id:5, title:"Ego vs. Love", category:"relationships", emoji:"🪷",
    explanation:"The ego wants to win. Love wants to connect. The ego keeps score; love keeps no accounts. Ego says 'I am right' — love says 'I see you.' Nearly every conflict in human relationships is not between two people but between two egos — two stories, two wounds, two fears — each waiting to be proved right.",
    insight:"Wherever you feel the need to defend yourself, the ego is present. Wherever you feel the impulse to understand rather than be understood, love is present. You can never love and protect your ego at the same time — one must yield.",
    advice:"In your next conflict, try this: speak less and listen more. Ask 'What are they actually afraid of?' rather than 'How do I win this?' The moment you seek understanding over victory, you step out of ego and into love.",
    tags:["ego","love","relationships","consciousness","emotions","conflict"] },

  { id:6, title:"How to Control the Mind", category:"mind", emoji:"🧠",
    explanation:"The untrained mind is like water without a container — it takes the shape of every fear, craving, and distraction it touches. But the mind cannot be controlled through force — suppression only deepens the pressure. True mastery of the mind comes through observation. When you watch a thought without identifying with it, it loses its grip.",
    insight:"You are not your thoughts. You are the one who notices them. The moment you observe a thought without being it, you have already stepped outside the mind's control. Awareness is always bigger than what it is aware of.",
    advice:"Practice the 'witness technique': for five minutes each day, sit and simply notice thoughts — label them as 'thinking' and let them pass, the way clouds pass across sky. Do not chase or fight them. The sky is never stained by the clouds.",
    tags:["mind","control","meditation","awareness","thoughts","consciousness"] },

  { id:7, title:"Living Consciously", category:"consciousness", emoji:"🌿",
    explanation:"Most of life is lived on autopilot — the same reactions, the same words, the same path from bed to screen to sleep. Conscious living means waking up inside the ordinary moments. It means asking: 'Am I choosing this, or did habit choose it for me?' A conscious life is not busier — it is simply awake.",
    insight:"Unconscious living is not living — it is a long dream. The person who wakes up at 60 and wonders where life went was present in body but absent in awareness. Every moment is the only moment you will ever actually have.",
    advice:"Choose one daily routine — brushing teeth, making coffee, walking — and do it completely consciously today. Notice every sensation. Notice when the mind wanders. This is the practice of waking up inside ordinary life.",
    tags:["consciousness","awareness","presence","living","mindfulness","habit"] },

  { id:8, title:"Peace and Awareness", category:"peace", emoji:"🌊",
    explanation:"Peace is not the absence of noise — it is the presence of awareness that is not disturbed by noise. A lake is deep even while its surface is rough. Inner peace works the same way. It is not found by removing difficulty; it is found by discovering the layer of you that difficulty cannot touch.",
    insight:"Awareness is always peaceful. It is the thoughts about life that disturb us — not life itself. When you rest as awareness rather than as thought, you find a peace that external circumstances cannot give and cannot take.",
    advice:"When the day feels chaotic, stop and ask: 'Who is noticing all this chaos?' Turn attention to the observer, not the observed. Even for ten seconds, rest as the one who notices. That is where peace lives.",
    tags:["peace","awareness","stillness","consciousness","meditation","mind"] },

  { id:9, title:"Meditation and Inner Clarity", category:"meditation", emoji:"🕯️",
    explanation:"Meditation is not about achieving a blank mind — it is about learning to sit with whatever arises without being enslaved by it. In stillness, the mud in the water settles. Clarity is not something added; it is what remains when the constant movement of the mind slows. One session of honest sitting does more for clarity than a hundred hours of anxious thinking.",
    insight:"The mind that has learned to be still sees clearly. Like a calm lake reflecting the sky perfectly, a quiet mind reflects reality without distortion. Decisions, relationships, life's direction — all become clearer when the noise settles.",
    advice:"Start with just five minutes. Sit still. Watch the breath — not controlling it, just watching. When thoughts arise, note them and return to the breath. Do not measure the session by how quiet the mind was, but simply by whether you showed up.",
    tags:["meditation","clarity","mind","stillness","breath","presence","consciousness"] },

  { id:10, title:"Living Life Fully", category:"living", emoji:"🌸",
    explanation:"To live fully is not to do more — it is to be present for what you are already doing. The person who rushes through every meal, every conversation, every sunset — always thinking ahead — is technically alive but never fully here. Life is not somewhere else. It is precisely and only here, in this moment, in this breath.",
    insight:"Death will not take away your future — only your present moments. The person who has truly lived every ordinary day has had a richer life than the one who collected extraordinary experiences while being absent for all of them.",
    advice:"Before any significant moment — a conversation, a meal, a walk — pause for one breath and set an intention: 'I will be here for this.' Then honor it. Presence is a practice, not a personality type.",
    tags:["living","presence","fullness","life","consciousness","awareness","joy"] },

  { id:11, title:"The Illusion of the Self", category:"consciousness", emoji:"🪞",
    explanation:"The 'I' you refer to is a story — a collection of memories, preferences, roles, and narratives assembled over a lifetime. This constructed self is not the enemy, but mistaking it for what you truly are is the root of most suffering. You are not your name, your job, your past, or your opinions. You are the awareness in which all of these appear.",
    insight:"When you identify with a fixed self, every threat to that self becomes a personal attack. When you rest as awareness — fluid, open, prior to identity — nothing can wound you at the root. You become water: taking many shapes but unchanged in nature.",
    advice:"Notice how many times a day you say 'I am...' — and complete the sentence with something temporary: tired, right, a failure, successful. Practice adding the word 'experiencing' instead: 'I am experiencing tiredness.' You are the experiencer, not the experience.",
    tags:["self","ego","consciousness","identity","awareness","illusion"] },

  { id:12, title:"The Art of Letting Go", category:"peace", emoji:"🍃",
    explanation:"Holding on is exhausting. We grip people, identities, ideas of how things should be — and carry them forward like stones in a river. Letting go is not giving up. It is recognizing that some things do not belong to us to carry. Grief passes faster through an open hand than a closed fist. Change moves through acceptance faster than through resistance.",
    insight:"You cannot control life's river, but you can stop fighting its current. Everything that has left you left because it was meant to. The suffering is not in the leaving — it is in refusing to let the leaving complete itself.",
    advice:"Write down one thing you are holding onto that exhausts you — a resentment, a regret, a version of yourself or someone else. Read it aloud, then say: 'I allow this to be exactly what it is.' Repeat until the grip softens.",
    tags:["letting go","acceptance","peace","grief","surrender","freedom"] }
];

// ─── State ────────────────────────────────────────────────
let lessons        = [];
let currentLesson  = null;
let highlightOn    = false;
let deferredInstall = null;

// ─── DOM ──────────────────────────────────────────────────
const homeView     = document.getElementById('home-view');
const lessonView   = document.getElementById('lesson-view');
const cardsGrid    = document.getElementById('cards-grid');
const searchInput  = document.getElementById('search-input');
const searchClear  = document.getElementById('search-clear');
const searchPanel  = document.getElementById('search-panel');
const searchToggle = document.getElementById('search-toggle');
const noResults    = document.getElementById('no-results');
const sectionLabel = document.getElementById('section-label');
const installBtn   = document.getElementById('install-btn');
const lessonCount  = document.getElementById('lesson-count');
const toast        = document.getElementById('toast');

// Detail view elements
const detailEmoji       = document.getElementById('detail-emoji');
const detailTitle       = document.getElementById('detail-title');
const detailCategory    = document.getElementById('detail-category');
const detailExplanation = document.getElementById('detail-explanation');
const detailInsight     = document.getElementById('detail-insight');
const detailAdvice      = document.getElementById('detail-advice');
const detailTags        = document.getElementById('detail-tags');
const highlightBtn      = document.getElementById('highlight-btn');
const pdfBtn            = document.getElementById('pdf-btn');

// ─── Init ─────────────────────────────────────────────────
function init() {
  lessons = LESSONS_DATA;
  lessonCount.textContent = `${lessons.length} lessons`;
  renderCards(lessons);
  bindSearch();
  bindDetail();
  registerSW();
  handleInstallPrompt();
}

// ─── Render home list (title only) ───────────────────────
function renderCards(items) {
  cardsGrid.innerHTML = '';

  if (!items.length) {
    noResults.classList.add('visible');
    sectionLabel.textContent = 'No results';
    return;
  }
  noResults.classList.remove('visible');
  sectionLabel.textContent = searchInput.value.trim()
    ? `Results for "${searchInput.value.trim()}"` : 'All Lessons';

  items.forEach((lesson, i) => {
    const card = document.createElement('article');
    card.className = 'lesson-card';
    card.style.animationDelay = `${i * 45}ms`;
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `Open: ${lesson.title}`);

    card.innerHTML = `
      <div class="card-title-row">
        <div class="card-emoji" aria-hidden="true">${lesson.emoji}</div>
        <div class="card-title-text">
          <h2 class="card-title">${lesson.title}</h2>
          <span class="card-category">${lesson.category}</span>
        </div>
        <svg class="card-arrow" width="15" height="15" viewBox="0 0 16 16"
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

    cardsGrid.appendChild(card);
  });
}

// ─── Open full-page lesson view ───────────────────────────
function openLesson(lesson) {
  currentLesson = lesson;
  highlightOn = false;

  // Populate
  detailEmoji.textContent       = lesson.emoji;
  detailTitle.textContent       = lesson.title;
  detailCategory.textContent    = lesson.category;
  detailExplanation.textContent = lesson.explanation;
  detailInsight.textContent     = lesson.insight;
  detailAdvice.textContent      = lesson.advice;

  // Reset highlight button state
  highlightBtn.classList.remove('active');
  highlightBtn.setAttribute('aria-pressed', 'false');
  lessonView.classList.remove('detail-highlight');

  // Tags
  detailTags.innerHTML = (lesson.tags || [])
    .map(t => `<span class="tag">#${t}</span>`).join('');

  // Switch views
  homeView.style.display  = 'none';
  lessonView.style.display = 'block';
  // Force reflow then animate
  lessonView.classList.remove('active');
  void lessonView.offsetWidth;
  lessonView.classList.add('active');

  window.scrollTo({ top: 0, behavior: 'instant' });
  history.pushState({ lessonId: lesson.id }, '', `#lesson-${lesson.id}`);
}

// ─── Close lesson view ────────────────────────────────────
function closeLesson() {
  lessonView.classList.remove('active');
  lessonView.style.display = 'none';
  homeView.style.display  = 'block';
  currentLesson = null;
  highlightOn   = false;
  window.scrollTo({ top: 0, behavior: 'instant' });
  if (history.state && history.state.lessonId) history.back();
}

// ─── Detail button wiring ─────────────────────────────────
function bindDetail() {
  document.getElementById('back-btn').addEventListener('click', closeLesson);

  // Browser back button
  window.addEventListener('popstate', () => {
    if (currentLesson) closeLesson();
  });

  // Highlight toggle
  highlightBtn.addEventListener('click', () => {
    highlightOn = !highlightOn;
    highlightBtn.classList.toggle('active', highlightOn);
    highlightBtn.setAttribute('aria-pressed', String(highlightOn));
    lessonView.classList.toggle('detail-highlight', highlightOn);

    if (highlightOn) {
      // Wrap every sentence in <mark> across all three text sections
      [detailExplanation, detailInsight, detailAdvice].forEach(el => {
        const raw = el.dataset.raw || el.textContent;
        el.dataset.raw = raw; // store original
        el.innerHTML = raw
          .split(/(?<=[.!?—])\s+/)
          .filter(s => s.trim())
          .map(s => `<mark>${s.trim()}</mark>`)
          .join(' ');
      });
      showToast('Highlighted · tap again to clear');
    } else {
      // Restore plain text
      [detailExplanation, detailInsight, detailAdvice].forEach(el => {
        if (el.dataset.raw) {
          el.textContent = el.dataset.raw;
          delete el.dataset.raw;
        }
      });
      showToast('Highlights cleared');
    }
  });

  // PDF download
  pdfBtn.addEventListener('click', () => {
    if (!currentLesson) return;
    loadAndBuildPDF(currentLesson);
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
    if (open) setTimeout(() => searchInput.focus(), 240);
    else { searchInput.value = ''; searchClear.classList.remove('visible'); renderCards(lessons); }
  });

  searchInput.addEventListener('input', () => {
    const q = searchInput.value.trim();
    searchClear.classList.toggle('visible', q.length > 0);
    clearTimeout(timer);
    timer = setTimeout(() => {
      if (!q) { renderCards(lessons); return; }
      const low = q.toLowerCase();
      renderCards(lessons.filter(l =>
        l.title.toLowerCase().includes(low) ||
        l.explanation.toLowerCase().includes(low) ||
        l.insight.toLowerCase().includes(low) ||
        l.advice.toLowerCase().includes(low) ||
        (l.tags || []).some(t => t.includes(low))
      ));
    }, 200);
  });

  searchClear.addEventListener('click', () => {
    searchInput.value = '';
    searchClear.classList.remove('visible');
    renderCards(lessons);
    searchInput.focus();
  });
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
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });
  const W = 210, M = 20, CW = W - M * 2;
  let y = 0;

  function text(str, x, startY, opts = {}) {
    const { size = 11, style = 'normal', color = [30,28,24], lh = 6.8 } = opts;
    doc.setFontSize(size); doc.setFont('helvetica', style); doc.setTextColor(...color);
    const lines = doc.splitTextToSize(str, CW - (x - M));
    doc.text(lines, x, startY);
    return startY + lines.length * lh;
  }

  function block(label, str, startY, bg, textColor = [30,28,24]) {
    const lines = doc.splitTextToSize(str, CW - 12);
    const h = lines.length * 6.2 + 18;
    doc.setFillColor(...bg);
    doc.roundedRect(M, startY, CW, h, 3, 3, 'F');
    doc.setFontSize(7); doc.setFont('helvetica', 'bold');
    doc.setCharSpace(1.6); doc.setTextColor(...textColor, 130);
    doc.text(label.toUpperCase(), M + 10, startY + 9);
    doc.setCharSpace(0);
    doc.setFontSize(10.5); doc.setFont('helvetica', 'normal');
    doc.setTextColor(...textColor);
    doc.text(lines, M + 10, startY + 16);
    return startY + h + 6;
  }

  // Header
  doc.setFillColor(44, 95, 74);
  doc.rect(0, 0, W, 16, 'F');
  doc.setFontSize(8.5); doc.setFont('helvetica', 'normal'); doc.setTextColor(255,255,255);
  doc.text('LIFE WISDOM', M, 10.5);
  doc.setTextColor(255,255,255,150);
  doc.text('lifewisdom.app', W - M, 10.5, { align: 'right' });

  y = 26;
  y = text(lesson.title, M, y, { size: 24, style: 'bold', lh: 10 });
  y += 2;

  // Category pill
  doc.setFillColor(238, 244, 241);
  const pill = doc.getTextWidth(lesson.category.toUpperCase()) + 14;
  doc.roundedRect(M, y, pill, 8, 2, 2, 'F');
  doc.setFontSize(7); doc.setFont('helvetica', 'bold');
  doc.setCharSpace(1.2); doc.setTextColor(44, 95, 74);
  doc.text(lesson.category.toUpperCase(), M + 5, y + 5.5);
  doc.setCharSpace(0);
  y += 14;

  doc.setDrawColor(200, 196, 190); doc.setLineWidth(0.3);
  doc.line(M, y, W - M, y); y += 10;

  // Teaching label
  doc.setFontSize(7.5); doc.setFont('helvetica', 'bold');
  doc.setCharSpace(1.5); doc.setTextColor(122,118,112);
  doc.text('THE TEACHING', M, y); doc.setCharSpace(0);
  y += 7;
  y = text(lesson.explanation, M, y, { size: 11, lh: 6.5 }); y += 10;

  // Blocks
  y = block('Key Insight',      lesson.insight, y, [44,95,74],      [255,255,255]);
  y = block('Practical Advice', lesson.advice,  y, [252,248,240],   [30,28,24]);
  y += 4;

  // Tags
  if (lesson.tags?.length) {
    doc.setFontSize(8); doc.setFont('helvetica', 'normal'); doc.setTextColor(160,155,148);
    doc.text(lesson.tags.map(t => `#${t}`).join('  '), M, y);
    y += 8;
  }

  // Footer
  doc.setFillColor(247,244,239);
  doc.rect(0, 283, W, 14, 'F');
  doc.setFontSize(8); doc.setFont('helvetica', 'normal'); doc.setTextColor(160,155,148);
  doc.text('Life Wisdom — Lessons for a conscious life', M, 291);
  doc.text(new Date().toLocaleDateString('en-IN', { year:'numeric', month:'long', day:'numeric' }),
    W - M, 291, { align:'right' });

  doc.save(`${lesson.title.replace(/[^a-z0-9]/gi, '-').toLowerCase()}.pdf`);
  showToast('PDF downloaded ✓');
}

// ─── PWA Install ──────────────────────────────────────────
function handleInstallPrompt() {
  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault(); deferredInstall = e;
    installBtn.classList.add('visible');
  });
  installBtn.addEventListener('click', async () => {
    if (!deferredInstall) return;
    deferredInstall.prompt();
    const { outcome } = await deferredInstall.userChoice;
    if (outcome === 'accepted') showToast('App installed ✓');
    installBtn.classList.remove('visible'); deferredInstall = null;
  });
  window.addEventListener('appinstalled', () => {
    installBtn.classList.remove('visible'); showToast('Welcome to Life Wisdom ✨');
  });
}

function registerSW() {
  if ('serviceWorker' in navigator)
    navigator.serviceWorker.register('sw.js')
      .then(r => console.log('[SW] scope:', r.scope))
      .catch(e => console.warn('[SW]', e));
}

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2600);
}

document.addEventListener('DOMContentLoaded', init);
