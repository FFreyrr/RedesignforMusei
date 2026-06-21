const RATES = [
  { id: 'entire', name: 'Entire', price: 52, age: '27–64 years old' },
  { id: 'senior', name: 'Senior', price: 42, age: '65+ years old' },
  { id: 'young', name: 'Young', price: 30, age: '15–26 years old' },
  { id: 'junior', name: 'Junior', price: 20, age: 'Up to 14 years old' },
];

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const DAYS = Array.from({ length: 31 }, (_, i) => i + 1);
const YEARS = Array.from({ length: 80 }, (_, i) => 2024 - i);

const MAX_OWNED_PASSES = 3;

const EXPLORE_ITEMS = [
  { id: 1, type: 'event', title: 'Paesaggi da asporto', date: 'Until 30 Sep 2026', venue: 'Palazzo Madama', city: 'Torino', image: 'Assets/explore-thumb-01.jpg', mapX: 38, mapY: 56, distance: 3, openNow: true, free: false, accessible: true, childFriendly: true },
  { id: 2, type: 'exhibition', title: 'Arte Moderna Italiana', date: '15 Mar – 20 Aug 2026', venue: 'GAM Torino', city: 'Torino', image: 'Assets/explore-thumb-02.jpg', mapX: 42, mapY: 52, distance: 4, openNow: true, free: false, accessible: true, childFriendly: false },
  { id: 3, type: 'museum', title: 'Museo Egizio', date: 'Open daily', venue: 'Museo Egizio', city: 'Torino', image: 'Assets/explore-thumb-03.jpg', mapX: 40, mapY: 58, distance: 2, openNow: true, free: false, accessible: true, childFriendly: true },
  { id: 4, type: 'museum', title: 'Pinacoteca di Brera', date: 'Tue – Sun', venue: 'Brera', city: 'Milano', image: 'Assets/explore-thumb-04.jpg', mapX: 68, mapY: 32, distance: 28, openNow: false, free: false, accessible: true, childFriendly: false },
  { id: 5, type: 'exhibition', title: 'Rinascimento in Lombardia', date: '1 Apr – 15 Nov 2026', venue: 'Palazzo Reale', city: 'Milano', image: 'Assets/explore-thumb-05.jpg', mapX: 66, mapY: 36, distance: 26, openNow: true, free: false, accessible: false, childFriendly: false },
  { id: 6, type: 'event', title: 'Notte dei Musei', date: 'First Sat of month', venue: 'Various locations', city: 'Piemonte', image: 'Assets/explore-thumb-06.jpg', mapX: 50, mapY: 48, distance: 8, openNow: false, free: true, accessible: true, childFriendly: true },
  { id: 7, type: 'museum', title: 'Museo del Novecento', date: 'Open daily', venue: 'Piazza Duomo', city: 'Milano', image: 'Assets/explore-thumb-07.jpg', mapX: 70, mapY: 34, distance: 27, openNow: true, free: false, accessible: true, childFriendly: true },
  { id: 8, type: 'exhibition', title: 'Scultura Contemporanea', date: 'Until 31 Dec 2026', venue: 'Castello di Rivoli', city: 'Rivoli', image: 'Assets/explore-thumb-08.jpg', mapX: 36, mapY: 50, distance: 12, openNow: true, free: false, accessible: false, childFriendly: false },
  { id: 9, type: 'event', title: 'Art City Torino', date: '2 – 8 Nov 2026', venue: 'Citywide', city: 'Torino', image: 'Assets/explore-thumb-09.jpg', mapX: 44, mapY: 54, distance: 5, openNow: false, free: true, accessible: true, childFriendly: true },
  { id: 10, type: 'museum', title: 'Museo della Certosa', date: 'Wed – Sun', venue: 'Certosa di Pavia', city: 'Pavia', image: 'Assets/explore-thumb-10.jpg', mapX: 58, mapY: 44, distance: 22, openNow: false, free: false, accessible: false, childFriendly: true },
  { id: 11, type: 'exhibition', title: 'Fotografia d\'Autore', date: '10 May – 30 Sep 2026', venue: 'MAO', city: 'Torino', image: 'Assets/explore-thumb-11.jpg', mapX: 41, mapY: 55, distance: 4, openNow: true, free: false, accessible: true, childFriendly: false },
  { id: 12, type: 'museum', title: 'Museo Leone', date: 'Tue – Sun', venue: 'Centro storico', city: 'Vercelli', image: 'Assets/explore-thumb-12.jpg', mapX: 28, mapY: 22, distance: 30, openNow: true, free: true, accessible: true, childFriendly: true },
  { id: 13, type: 'event', title: 'Mercato dell\'Antiquariato', date: 'Every second Sunday', venue: 'Balon', city: 'Torino', image: 'Assets/explore-thumb-13.jpg', mapX: 39, mapY: 57, distance: 6, openNow: false, free: true, accessible: false, childFriendly: false },
  { id: 14, type: 'museum', title: 'Civic Museum Casale', date: 'Wed – Mon', venue: 'Via Vittorio Veneto', city: 'Casale Monferrato', image: 'Assets/explore-thumb-14.jpg', mapX: 52, mapY: 44, distance: 18, openNow: true, free: false, accessible: true, childFriendly: true },
  { id: 15, type: 'exhibition', title: 'Barocco Piemontese', date: 'Until 15 Oct 2026', venue: 'Palazzo Chiablese', city: 'Torino', image: 'Assets/explore-thumb-15.jpg', mapX: 43, mapY: 53, distance: 3, openNow: true, free: false, accessible: true, childFriendly: false },
];

const DISTANCE_UNLIMITED = 30;

const DEFAULT_EXPLORE_FILTERS = {
  openNow: false,
  free: false,
  childFriendly: false,
  disabledFriendly: false,
  maxDistance: DISTANCE_UNLIMITED,
};

const FAVORITE_EVENTS = [
  { id: 1, title: 'Klimt. Golden Visions', venue: 'Palazzo Reale', city: 'Milano', dates: '15 Mar – 20 Aug 2026', status: 'ongoing', progress: 65, thumb: 'gold', image: 'Assets/explore-thumb-05.jpg' },
  { id: 2, title: 'Van Gogh Immersive Experience', venue: 'Mudec', city: 'Milano', dates: '10 Jul – 15 Oct 2026', status: 'upcoming', daysUntil: 32, thumb: 'teal', image: 'Assets/feed-novecento.png' },
  { id: 3, title: 'The Etruscans', venue: 'Museo Civico Archeologico', city: 'Bologna', dates: 'Jan – Apr 2026', status: 'ended', progress: 100, thumb: 'stone', image: 'Assets/explore-thumb-03.jpg' },
];

const FAVORITE_PLACES = [
  { id: 1, exploreId: 4, title: 'Pinacoteca di Brera', address: 'Via Brera 28, Milano' },
  { id: 2, exploreId: 7, title: 'Museo del Novecento', address: 'Piazza del Duomo 8, Milano' },
];

const ART_CULTURE_TAGS = [
  { id: 'contemporary-art', label: 'Contemporary Art' },
  { id: 'design', label: 'Design' },
  { id: 'fashion', label: 'Fashion' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'cinema', label: 'Cinema' },
  { id: 'renaissance', label: 'Renaissance' },
  { id: 'photography', label: 'Photography' },
];

const SOCIAL_MODE_TAGS = [
  { id: 'kids-activities', label: 'Kids Activities' },
  { id: 'solo-friendly', label: 'Solo Friendly' },
  { id: 'student-friendly', label: 'Student Friendly' },
  { id: 'date-ideas', label: 'Date Ideas' },
];

const INTEREST_LABELS = Object.fromEntries([
  ...ART_CULTURE_TAGS,
  ...SOCIAL_MODE_TAGS,
].map(t => [t.id, t.label]));

const DISCOVER_FEED = [
  {
    id: 1, exploreId: 1, title: 'Paesaggi da asporto', venue: 'Palazzo Madama', city: 'Torino',
    type: 'exhibition', interests: ['contemporary-art', 'design'], distance: 3,
    date: 'Until 30 Sep 2026',
    summary: 'Contemporary landscapes reimagined — a fresh look at nature and the city through Italian artists.',
    theme: 'mint',
    image: 'Assets/feed-exhibition.png',
  },
  {
    id: 2, exploreId: 2, title: 'Arte Moderna Italiana', venue: 'GAM Torino', city: 'Torino',
    type: 'exhibition', interests: ['contemporary-art', 'renaissance'], distance: 4,
    date: '15 Mar – 20 Aug 2026',
    summary: 'Masterpieces from the 20th century — from Boccioni to Morandi, all in one stunning collection.',
    theme: 'slate',
    image: 'Assets/feed-museum.png',
  },
  {
    id: 3, exploreId: 3, title: 'Museo Egizio', venue: 'Museo Egizio', city: 'Torino',
    type: 'museum', interests: ['kids-activities', 'student-friendly'], distance: 2,
    date: 'Open daily',
    summary: 'The world\'s oldest Egyptian museum outside Cairo — pharaohs, mummies, and treasures for all ages.',
    theme: 'sand',
    image: 'Assets/feed-egizio.png',
  },
  {
    id: 4, exploreId: 11, title: 'Fotografia d\'Autore', venue: 'MAO', city: 'Torino',
    type: 'exhibition', interests: ['photography', 'contemporary-art'], distance: 4,
    date: '10 May – 30 Sep 2026',
    summary: 'Iconic photographers capture Italy\'s changing face — bold frames and intimate portraits.',
    theme: 'stone',
    image: 'Assets/feed-photography.png',
  },
  {
    id: 5, exploreId: 8, title: 'Scultura Contemporanea', venue: 'Castello di Rivoli', city: 'Rivoli',
    type: 'exhibition', interests: ['contemporary-art', 'design'], distance: 12,
    date: 'Until 31 Dec 2026',
    summary: 'Large-scale installations meet historic halls — where contemporary art meets a royal residence.',
    theme: 'forest',
    image: 'Assets/feed-sculpture.png',
  },
  {
    id: 6, exploreId: 7, title: 'Museo del Novecento', venue: 'Piazza Duomo', city: 'Milano',
    type: 'museum', interests: ['design', 'fashion', 'date-ideas'], distance: 27,
    date: 'Open daily',
    summary: 'Twentieth-century art with a view of the Duomo — perfect for a cultural afternoon in Milano.',
    theme: 'rose',
    image: 'Assets/feed-novecento.png',
  },
  {
    id: 7, exploreId: 5, title: 'Rinascimento in Lombardia', venue: 'Palazzo Reale', city: 'Milano',
    type: 'exhibition', interests: ['renaissance', 'architecture', 'fashion'], distance: 26,
    date: '1 Apr – 15 Nov 2026',
    summary: 'Renaissance splendour returns to Milano — tapestries, frescoes, and courtly elegance.',
    theme: 'gold',
    image: 'Assets/feed-renaissance.png',
  },
  {
    id: 8, exploreId: 15, title: 'Barocco Piemontese', venue: 'Palazzo Chiablese', city: 'Torino',
    type: 'exhibition', interests: ['renaissance', 'architecture'], distance: 3,
    date: 'Until 15 Oct 2026',
    summary: 'Ornate baroque interiors and gilded details — discover Piemonte\'s grand artistic heritage.',
    theme: 'amber',
    image: 'Assets/feed-baroque.png',
  },
];

const DEFAULT_HOME_INTERESTS = {
  artCulture: ['design', 'contemporary-art', 'fashion'],
  social: ['kids-activities'],
  maxDistance: 30,
};

const PRIZES_BADGES = [
  { id: 1, title: 'I AM OK', visitsLabel: '1 visit', visitsRequired: 1, theme: 'gold', variant: 'ok' },
  { id: 2, title: 'I AM GOOD', visitsLabel: '3 visits', visitsRequired: 3, theme: 'coral', variant: 'good' },
  { id: 3, title: 'I AM SUPER', visitsLabel: '10 visits', visitsRequired: 10, theme: 'blue', variant: 'super' },
  { id: 4, title: 'I AM LEGEND', visitsLabel: '50 visits', visitsRequired: 50, theme: 'violet', variant: 'legend' },
  { id: 5, title: 'I AM MYTHIC', visitsLabel: '100 visits', visitsRequired: 100, theme: 'pink', variant: 'mythic' },
  { id: 6, title: 'I AM IMMORTAL', visitsLabel: '200 visits', visitsRequired: 200, theme: 'teal', variant: 'immortal' },
];

function prizeCharacterSvg(variant) {
  const blob = '<ellipse cx="52" cy="78" rx="38" ry="42" fill="#5cb85c"/><ellipse cx="52" cy="70" rx="32" ry="36" fill="#6fcf6f"/>';
  const face = '<circle cx="42" cy="62" r="3" fill="#1a3a1a"/><circle cx="62" cy="62" r="3" fill="#1a3a1a"/><path d="M44 74 Q52 80 60 74" stroke="#1a3a1a" stroke-width="2" fill="none" stroke-linecap="round"/>';

  const extras = {
    ok: `${blob}${face}<circle cx="78" cy="52" r="14" fill="#f5e6a8" stroke="#c9a84c" stroke-width="2"/><text x="78" y="57" text-anchor="middle" font-size="14" font-weight="700" fill="#5a4a20">OK</text>`,
    good: `${blob}${face}<rect x="34" y="38" width="36" height="10" rx="3" fill="#1a1a1a"/><ellipse cx="28" cy="58" rx="8" ry="10" fill="#4caf50"/><path d="M82 48 L88 38 M88 38 L94 48 M88 38 L88 52" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round"/><line x1="88" y1="52" x2="88" y2="62" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round"/>`,
    super: `${blob}${face}<path d="M22 50 L18 30 M22 50 L30 34" stroke="#6fcf6f" stroke-width="5" stroke-linecap="round"/><path d="M82 50 L86 28 M82 50 L74 32" stroke="#6fcf6f" stroke-width="5" stroke-linecap="round"/><path d="M88 28 A12 12 0 0 1 88 52 A9 9 0 0 0 88 28" fill="#f5d442"/><path d="M8 90 Q30 70 52 90" stroke="#2a4a8a" stroke-width="3" fill="none" opacity="0.5"/>`,
    legend: `${blob}${face}<polygon points="52,24 56,36 68,36 58,44 62,56 52,48 42,56 46,44 36,36 48,36" fill="#f5d442" stroke="#c9a020" stroke-width="1.5"/><circle cx="18" cy="30" r="4" fill="#fff" opacity="0.8"/><circle cx="90" cy="40" r="3" fill="#fff" opacity="0.7"/><circle cx="85" cy="18" r="2.5" fill="#fff" opacity="0.6"/>`,
    mythic: `${blob}<circle cx="42" cy="62" r="3" fill="#1a3a1a"/><circle cx="62" cy="62" r="3" fill="#1a3a1a"/><path d="M46 76 Q52 82 58 76" stroke="#1a3a1a" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M8 58 Q2 42 12 30 Q18 48 8 58Z" fill="#ff8ec8" stroke="#d05090" stroke-width="1.5"/><path d="M96 58 Q102 42 92 30 Q86 48 96 58Z" fill="#ff8ec8" stroke="#d05090" stroke-width="1.5"/><path d="M52 8 L56 20 L68 20 L58 28 L62 38 L52 32 L42 38 L46 28 L36 20 L48 20 Z" fill="#e8b0ff" stroke="#a060d0" stroke-width="1.2"/><polygon points="52,44 56,54 66,54 58,60 60,70 52,64 44,70 46,60 38,54 48,54" fill="#c8f0ff" stroke="#60a8d8" stroke-width="1"/><circle cx="22" cy="24" r="3" fill="#fff" opacity="0.8"/><circle cx="84" cy="18" r="2.5" fill="#fff" opacity="0.7"/>`,
    immortal: `${blob}${face}<ellipse cx="52" cy="22" rx="22" ry="8" fill="none" stroke="#f5d442" stroke-width="2.5"/><ellipse cx="52" cy="20" rx="18" ry="5" fill="#fff" opacity="0.25"/><path d="M30 88 Q52 72 74 88" stroke="#00A67E" stroke-width="3" fill="none" opacity="0.6"/><circle cx="16" cy="50" r="5" fill="#7fe8d0" opacity="0.8"/><circle cx="92" cy="55" r="4" fill="#7fe8d0" opacity="0.7"/>`,
  };

  return `<svg class="prize-character-svg" viewBox="0 0 104 110" aria-hidden="true">${extras[variant] || extras.ok}</svg>`;
}

const state = {
  screen: 'pass',
  region: 'both',
  regionName: 'PIEMONTE & LOMBARDIA',
  cardImage: 'Assets/Card3.png',
  passCount: 1,
  holders: [{ rate: null, name: '', dob: null, open: true }],
  cart: [],
  ownedPasses: [],
  paymentMethod: 'card',
  activeRateIndex: null,
  activeDateIndex: null,
  dateSelection: { month: 3, day: 19, year: 18 },
  carouselIndex: 0,
  exploreCategory: 'all',
  exploreSearch: '',
  exploreSort: 'relevance',
  exploreView: 'list',
  exploreFilters: { ...DEFAULT_EXPLORE_FILTERS },
  detailItemId: null,
  detailReturn: 'explore',
  detailExploreView: 'list',
  favoriteItemIds: [4, 7],
  homeActiveChip: 'recommend',
  homeInterests: {
    artCulture: [...DEFAULT_HOME_INTERESTS.artCulture],
    social: [...DEFAULT_HOME_INTERESTS.social],
    maxDistance: DEFAULT_HOME_INTERESTS.maxDistance,
  },
  visitCount: 1,
  theme: 'dark',
  themePreference: 'Dark mode',
  fontSize: 'Standard',
  accessibleFont: 'Off',
  language: 'English',
  profileComplete: true,
  profileEditing: false,
  onboardingIndex: 0,
  onboardingComplete: false,
};

try {
  const savedTheme = localStorage.getItem('museiTheme');
  if (savedTheme === 'light' || savedTheme === 'dark') {
    state.theme = savedTheme;
    state.themePreference = savedTheme === 'light' ? 'Light mode' : 'Dark mode';
  }
} catch (_) {}

const DEFAULT_HOURS = [
  'Monday: 09:30 – 17:30',
  'Tuesday: 09:30 – 17:30',
  'Wednesday: 09:30 – 17:30',
  'Thursday: 09:30 – 17:30',
  'Friday: 09:30 – 17:30',
  'Saturday: 09:30 – 18:30',
  'Sunday: 09:30 – 18:30',
];

const DETAIL_EXTRAS = {
  3: {
    address: 'Via Accademia delle Scienze, 6 · Torino (TO)',
    phone: '011 5617776',
    description: 'The Museo Egizio in Torino is the oldest museum dedicated to Egyptian archaeology and the only one outside Cairo exclusively devoted to Pharaonic culture. Its collections span over 4,000 years of history.',
    fullPrice: '18.00',
    reducedPrice: '12.00',
  },
  4: {
    address: 'Via Brera 28 · Milano (MI)',
    phone: '02 722631',
    description: 'Pinacoteca di Brera houses one of Italy\'s most important collections of Italian Renaissance art, including masterpieces by Raphael, Caravaggio, and Mantegna in a historic palace in the heart of Milano.',
    fullPrice: '15.00',
    reducedPrice: '10.00',
  },
  1: {
    address: 'Piazza Castello · Torino (TO)',
    phone: '011 4433501',
    description: 'Paesaggi da asporto brings together contemporary perspectives on landscape at Palazzo Madama, inviting visitors to explore how artists reimagine natural and urban environments today.',
    fullPrice: '10.00',
    reducedPrice: '7.00',
    included: false,
  },
};

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function updatePassAdState() {
  $('#app')?.classList.remove('pass-ad-active');
}

function navigateTo(screen) {
  state.screen = screen;
  $$('.screen').forEach(s => s.classList.toggle('active', s.dataset.screen === screen));
  const isSub = !['pass', 'explore', 'home', 'prizes', 'profile', 'success'].includes(screen);
  $('#app').classList.toggle('sub-screen', isSub);
  $('#app').classList.toggle('detail-active', screen === 'detail');
  updatePassAdState();
  closeAllOverlays();
  if (screen === 'pass') renderPassWallet();
  if (screen === 'home') renderHome();
  if (screen === 'home-interests') renderHomeInterests();
  if (screen === 'prizes') renderPrizes();
  if (screen === 'explore') renderExplore();
  if (screen === 'detail') renderDetail();
}

function applyTheme(theme) {
  state.theme = theme === 'light' ? 'light' : 'dark';
  $('#app')?.setAttribute('data-theme', state.theme);
  const themeValue = $('#profileThemeValue');
  if (themeValue) themeValue.textContent = state.themePreference;
  try {
    localStorage.setItem('museiTheme', state.theme);
  } catch (_) {}
}

function renderOnboarding() {
  const overlay = $('#onboardingOverlay');
  const track = $('#onboardingTrack');
  const dots = $('#onboardingDots');
  const next = $('#onboardingNextBtn');
  if (!overlay || !track || !dots || !next) return;

  overlay.classList.toggle('active', !state.onboardingComplete);
  $('#app')?.classList.toggle('onboarding-active', !state.onboardingComplete);
  track.style.left = `${-state.onboardingIndex * 100}%`;
  dots.innerHTML = Array.from({ length: 4 }, (_, i) =>
    `<button type="button" class="onboarding-dot ${i === state.onboardingIndex ? 'active' : ''}" data-onboarding-dot="${i}" aria-label="Onboarding ${i + 1}"></button>`
  ).join('');
  next.textContent = state.onboardingIndex === 3 ? 'Open Musei APP' : 'Next';
}

function finishOnboarding() {
  state.onboardingComplete = true;
  renderOnboarding();
  navigateTo('pass');
  setActiveNav('pass');
}

function initOnboarding() {
  const track = $('#onboardingTrack');
  const next = $('#onboardingNextBtn');
  const dots = $('#onboardingDots');
  if (!track || !next || !dots) return;

  next.addEventListener('click', () => {
    const activeDot = dots.querySelector('.onboarding-dot.active');
    const activeIndex = activeDot ? +activeDot.dataset.onboardingDot : state.onboardingIndex;
    state.onboardingIndex = activeIndex;
    if (state.onboardingIndex >= 3) finishOnboarding();
    else {
      state.onboardingIndex += 1;
      renderOnboarding();
    }
  });

  dots.addEventListener('click', (e) => {
    const dot = e.target.closest?.('[data-onboarding-dot]');
    if (!dot) return;
    state.onboardingIndex = +dot.dataset.onboardingDot;
    renderOnboarding();
  });

  let startX = null;
  track.addEventListener('pointerdown', (e) => {
    startX = e.clientX;
    track.setPointerCapture?.(e.pointerId);
  });
  track.addEventListener('pointerup', (e) => {
    if (startX === null) return;
    const delta = e.clientX - startX;
    startX = null;
    if (Math.abs(delta) < 40) return;
    if (delta < 0 && state.onboardingIndex < 3) state.onboardingIndex += 1;
    if (delta > 0 && state.onboardingIndex > 0) state.onboardingIndex -= 1;
    renderOnboarding();
  });

  renderOnboarding();
}

function resolveThemePreference(value) {
  if (value === 'Follow system') {
    const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    return prefersLight ? 'light' : 'dark';
  }
  return value === 'Light mode' ? 'light' : 'dark';
}

function openSettingsChoice(title, options, currentValue, onSelect) {
  $('#settingsChoiceTitle').textContent = title;
  $('#settingsChoiceOptions').innerHTML = options.map(option => `
    <button type="button" class="settings-choice-option ${option === currentValue ? 'is-selected' : ''}" data-setting-value="${option}">
      <span>${option}</span>
      <span class="settings-choice-option-mark">Selected</span>
    </button>
  `).join('');

  $('#settingsChoiceOptions').querySelectorAll('.settings-choice-option').forEach(btn => {
    btn.addEventListener('click', () => {
      onSelect(btn.dataset.settingValue);
      closeAllOverlays();
    });
  });

  $('#settingsChoiceOverlay').classList.add('active');
}

function openSettingsDetail(title, bodyHtml) {
  $('#settingsDetailTitle').textContent = title;
  $('#settingsDetailBody').innerHTML = bodyHtml;
  $('#settingsDetailOverlay').classList.add('active');
}

function updateProfileSettingLabels() {
  const fontSizeValue = $('#profileFontSizeValue');
  const accessibleFontValue = $('#profileAccessibleFontValue');
  const languageValue = $('#profileLanguageValue');
  if (fontSizeValue) fontSizeValue.textContent = state.fontSize;
  if (accessibleFontValue) accessibleFontValue.textContent = state.accessibleFont;
  if (languageValue) languageValue.textContent = state.language;
}

function setProfileEditing(editing) {
  state.profileEditing = editing;
  $('#profileScroll')?.classList.toggle('is-editing', editing);
  const profileTitle = $('#profilePageTitle');
  if (profileTitle) profileTitle.textContent = editing ? 'Edit profile' : 'Profile';
}

function setProfileComplete(complete) {
  state.profileComplete = complete;
  $('#profileScroll')?.classList.toggle('is-complete', complete);
  const profileTitle = $('#profilePageTitle');
  if (profileTitle) profileTitle.textContent = state.profileEditing ? 'Edit profile' : 'Profile';
  const values = complete
    ? ['Maria', 'Rossi', 'Female', '12 / 03 / 1985', 'Torino (TO)', 'Via Roma 12, 10123 Torino', 'RSSMRA85C12L219X', 'maria.rossi@email.com']
    : ['Required', 'Required', 'Required', 'Required', 'Required', 'Required', 'Required', 'Required'];
  $$('.profile-readonly-value').forEach((el, index) => {
    el.textContent = values[index] || 'Required';
    el.classList.toggle('is-empty', !complete);
  });

  const phone = $('#profilePhone');
  if (phone) phone.value = complete ? '+39 347 582 1904' : '';
  const degree = $('#profileDegree');
  if (degree) degree.value = complete ? 'master' : '';
  const interests = $('#profileInterests');
  if (interests) interests.value = complete ? 'art' : '';

  ['newsletterPiemonte', 'newsletterLombardia', 'newsletterFamilyPiemonte', 'newsletterFamilyLombardia', 'newsletterPromo', 'newsletterProfiling']
    .forEach(id => {
      const checkbox = $(`#${id}`);
      if (checkbox) checkbox.checked = complete;
    });
}

function setActiveNav(nav) {
  $$('.nav-item').forEach(n => n.classList.toggle('active', n.dataset.nav === nav));
  $('#bottomNav')?.setAttribute('data-active-nav', nav);
  const fab = $('.nav-fab');
  if (fab) fab.classList.add('active');
}

function showToast(msg, type = 'default') {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.toggle('is-error', type === 'error');
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

function closeAllOverlays() {
  $$('.overlay').forEach(o => o.classList.remove('active'));
}

function renderPassHolders() {
  const container = $('#passHolders');
  container.innerHTML = state.holders.map((h, i) => {
    const rateLabel = h.rate
      ? `${h.rate.name} — €${h.rate.price}`
      : '— Choose —';
    const dobLabel = h.dob
      ? `${MONTHS[h.dob.month]} ${h.dob.day}, ${YEARS[h.dob.year]}`
      : 'Select date';
    const summary = h.rate && h.name
      ? `${h.rate.name} · ${h.name}`
      : 'Incomplete';
    return `
      <div class="pass-holder ${h.open ? 'open' : ''}" data-index="${i}">
        <button class="pass-holder-header" data-toggle="${i}">
          <span>Pass holder ${i + 1} <span class="pass-holder-summary">— ${summary}</span></span>
          <svg class="chevron" width="12" height="8" viewBox="0 0 12 8"><path d="M1 1l5 5 5-5" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>
        </button>
        <div class="pass-holder-body">
          <div>
            <label class="field-label">Choose your rate</label>
            <button class="select-field ${h.rate ? '' : 'placeholder'}" data-rate="${i}">
              <span>${rateLabel}</span>
              <svg width="12" height="8" viewBox="0 0 12 8"><path d="M1 1l5 5 5-5" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>
            </button>
          </div>
          <div>
            <label class="field-label">First and Last name</label>
            <input type="text" class="text-input" placeholder="Full name" data-name="${i}" value="${h.name}" />
          </div>
          <div>
            <label class="field-label">Date of birth</label>
            <button class="select-field ${h.dob ? '' : 'placeholder'}" data-dob="${i}">
              <span>${dobLabel}</span>
              <svg width="12" height="8" viewBox="0 0 12 8"><path d="M1 1l5 5 5-5" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>
            </button>
          </div>
        </div>
      </div>`;
  }).join('');

  container.querySelectorAll('[data-toggle]').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = +btn.dataset.toggle;
      state.holders.forEach((h, i) => { if (i !== idx) h.open = false; });
      state.holders[idx].open = !state.holders[idx].open;
      renderPassHolders();
    });
  });

  container.querySelectorAll('[data-rate]').forEach(btn => {
    btn.addEventListener('click', () => openRatePicker(+btn.dataset.rate));
  });

  container.querySelectorAll('[data-dob]').forEach(btn => {
    btn.addEventListener('click', () => openDatePicker(+btn.dataset.dob));
  });

  container.querySelectorAll('[data-name]').forEach(input => {
    input.addEventListener('input', (e) => {
      state.holders[+input.dataset.name].name = e.target.value;
    });
  });
}

function updatePassCount(delta) {
  const newCount = Math.max(1, Math.min(6, state.passCount + delta));
  if (newCount === state.passCount) return;
  state.passCount = newCount;
  $('#passCount').textContent = newCount;
  while (state.holders.length < newCount) {
    state.holders.push({ rate: null, name: '', dob: null, open: false });
  }
  if (state.holders.length > newCount) {
    state.holders = state.holders.slice(0, newCount);
  }
  state.holders.forEach((h, i) => { h.open = i === newCount - 1; });
  renderPassHolders();
}

function openRatePicker(index) {
  state.activeRateIndex = index;
  const container = $('#rateOptions');
  container.innerHTML = RATES.map(r => `
    <button class="rate-option ${state.holders[index].rate?.id === r.id ? 'selected' : ''}" data-rate-id="${r.id}">
      <div>
        <div class="rate-option-name">${r.name}</div>
        <div class="rate-option-age">${r.age}</div>
      </div>
      <span class="rate-option-price">€${r.price}</span>
    </button>
  `).join('');

  container.querySelectorAll('[data-rate-id]').forEach(btn => {
    btn.addEventListener('click', () => {
      const rate = RATES.find(r => r.id === btn.dataset.rateId);
      state.holders[state.activeRateIndex].rate = rate;
      closeAllOverlays();
      renderPassHolders();
    });
  });

  $('#rateOverlay').classList.add('active');
}

function buildDateColumn(container, items, selectedIdx, type) {
  container.innerHTML = items.map((item, i) =>
    `<div class="date-item ${i === selectedIdx ? 'selected' : ''}" data-idx="${i}" data-type="${type}">${item}</div>`
  ).join('');

  container.querySelectorAll('.date-item').forEach(el => {
    el.addEventListener('click', () => {
      state.dateSelection[type] = +el.dataset.idx;
      refreshDatePicker();
    });
  });

  const selected = container.querySelector('.date-item.selected');
  if (selected) {
    container.scrollTop = selected.offsetTop - container.clientHeight / 2 + selected.clientHeight / 2;
  }
}

function refreshDatePicker() {
  buildDateColumn($('#monthCol'), MONTHS, state.dateSelection.month, 'month');
  buildDateColumn($('#dayCol'), DAYS, state.dateSelection.day, 'day');
  buildDateColumn($('#yearCol'), YEARS, state.dateSelection.year, 'year');
}

function openDatePicker(index) {
  state.activeDateIndex = index;
  const h = state.holders[index];
  if (h.dob) {
    state.dateSelection = { ...h.dob };
  } else {
    state.dateSelection = { month: 3, day: 19, year: 18 };
  }
  refreshDatePicker();
  $('#dateOverlay').classList.add('active');
}

function validateHolders() {
  for (let i = 0; i < state.holders.length; i++) {
    const h = state.holders[i];
    if (!h.rate) { showToast(`Please select a rate for pass ${i + 1}`, 'error'); return false; }
    if (!h.name.trim()) { showToast(`Please enter a name for pass ${i + 1}`, 'error'); return false; }
    if (!h.dob) { showToast(`Please select date of birth for pass ${i + 1}`, 'error'); return false; }
  }
  return true;
}

function addToCart() {
  if (!validateHolders()) return;
  state.cart = state.holders.map(h => ({
    rateName: h.rate.name.toUpperCase(),
    price: h.rate.price,
    region: state.regionName,
    name: h.name.trim().toUpperCase(),
    id: Date.now() + Math.random(),
  }));
  renderCart();
  navigateTo('cart');
  showToast('Added to cart');
}

function generateQRPattern(seed) {
  const cells = [];
  for (let i = 0; i < 25; i++) {
    const accent = (seed + i * 7) % 5 === 0;
    cells.push(`<span class="${accent ? 'accent' : ''}"></span>`);
  }
  return cells.join('');
}

function formatRegionTitle(regionName) {
  if (regionName.includes('&')) {
    return `Formula Extra (${regionName.replace(/ & /g, ', ')})`;
  }
  return regionName.charAt(0) + regionName.slice(1).toLowerCase();
}

function buildDigitalPassHTML(pass) {
  return `
    <div class="wallet-slide">
      <div class="digital-pass">
        <div class="digital-pass-top">
          <div class="digital-pass-info">
            <p class="digital-pass-title">Abbonamento Musei</p>
            <p class="digital-pass-region">${formatRegionTitle(pass.regionName)}</p>
            <p class="digital-pass-holder">${pass.holderName}</p>
          </div>
          <div class="digital-pass-qr" aria-hidden="true">${generateQRPattern(pass.id)}</div>
        </div>
        <div class="digital-pass-meta">
          <div><span>Card number</span><strong>${pass.cardNumber}</strong></div>
          <div><span>Expiry date</span><strong>${pass.expiry}</strong></div>
          <img class="digital-pass-logo" src="Assets/LOGO.png" alt="" />
        </div>
      </div>
    </div>`;
}

function buildAddPassHTML() {
  return `
    <button class="wallet-slide add-pass-slide" id="carouselAddBtn" aria-label="Get A Pass">
      <div class="add-pass-card">
        <div class="add-pass-icon">
          <svg width="28" height="28" viewBox="0 0 32 32"><path d="M16 6v20M6 16h20" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>
        </div>
        <span>Get A Pass</span>
      </div>
    </button>`;
}

function updateCarouselDots(slideCount) {
  const dots = $('#passDots');
  dots.innerHTML = Array.from({ length: slideCount }, (_, i) =>
    `<button class="pass-dot ${i === state.carouselIndex ? 'active' : ''}" data-dot="${i}" aria-label="Slide ${i + 1}"></button>`
  ).join('');

  dots.querySelectorAll('[data-dot]').forEach(dot => {
    dot.addEventListener('click', () => scrollToCarouselSlide(+dot.dataset.dot));
  });
}

function scrollToCarouselSlide(index) {
  const carousel = $('#passCarousel');
  const slides = carousel.querySelectorAll('.wallet-slide');
  if (!slides[index]) return;
  state.carouselIndex = index;
  const slide = slides[index];
  const offset = slide.offsetLeft - (carousel.clientWidth - slide.clientWidth) / 2;
  carousel.scrollTo({ left: offset, behavior: 'smooth' });
  updateCarouselDots(slides.length);
}

function onCarouselScroll() {
  const carousel = $('#passCarousel');
  const slides = [...carousel.querySelectorAll('.wallet-slide')];
  if (!slides.length) return;
  const center = carousel.scrollLeft + carousel.clientWidth / 2;
  let closest = 0;
  let minDist = Infinity;
  slides.forEach((slide, i) => {
    const slideCenter = slide.offsetLeft + slide.clientWidth / 2;
    const dist = Math.abs(center - slideCenter);
    if (dist < minDist) { minDist = dist; closest = i; }
  });
  if (closest !== state.carouselIndex) {
    state.carouselIndex = closest;
    updateCarouselDots(slides.length);
    const pass = state.ownedPasses[closest];
    if (pass && $('#passExpiry')) $('#passExpiry').textContent = pass.expiry;
  }
}

function updateDistanceDisplayUI(val) {
  const unlimited = +val >= DISTANCE_UNLIMITED;
  const box = $('#filterDistanceDisplay');
  const prefix = $('#filterDistancePrefix');
  const unit = $('#filterDistanceUnit');

  box.textContent = unlimited ? 'No limit' : val;
  box.classList.toggle('is-unlimited', unlimited);
  prefix.textContent = unlimited ? 'Distance' : 'Within';
  unit.textContent = unlimited ? '' : 'km';
}

function renderPassFavorites() {
  const eventsEl = $('#passFavoriteEvents');
  if (!eventsEl) return;
  eventsEl.innerHTML = FAVORITE_EVENTS.slice(0, 2).map(ev => {
    const badgeLabel = ev.status.toUpperCase();
    const eventDates = ev.dates.replace(/[^\x00-\x7F]+.?/g, '-').replace(/\s*-\s*/g, ' - ');
    const statusNote = ev.status === 'upcoming' ? `<p class="pass-fav-note">Starts in ${ev.daysUntil} days</p>` : '';
    return `
      <button class="pass-fav-card" data-fav-event="${ev.id}">
        <div class="pass-fav-thumb pass-fav-thumb--${ev.thumb}">
          <img class="pass-fav-img" src="${ev.image}" alt="" loading="lazy" />
        </div>
        <div class="pass-fav-body">
          <div class="pass-fav-topline">
            <span class="pass-fav-badge pass-fav-badge--${ev.status}">${badgeLabel}</span>
            <span class="pass-fav-date">${eventDates}</span>
          </div>
          <p class="pass-fav-title">${ev.title}</p>
          <p class="pass-fav-sub">${ev.venue} &middot; ${ev.city}</p>
          ${statusNote}
        </div>
        <div class="pass-fav-side">
          <svg class="pass-fav-heart" width="18" height="16" viewBox="0 0 24 24"><path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0112 6a5.5 5.5 0 019.5 6c-2.5 4.5-9.5 9-9.5 9z" fill="currentColor"/></svg>
        </div>
      </button>`;
  }).join('');

  eventsEl.querySelectorAll('[data-fav-event]').forEach(btn => {
    btn.addEventListener('click', () => {
      const ev = FAVORITE_EVENTS.find(e => e.id === +btn.dataset.favEvent);
      if (ev) showToast(`${ev.title} — ${ev.venue}`);
    });
  });

  const placesEl = $('#passFavoritePlaces');
  if (!placesEl) return;
  placesEl.innerHTML = FAVORITE_PLACES.map(pl => {
    const place = EXPLORE_ITEMS.find(item => item.id === pl.exploreId);
    return `
      <button class="pass-fav-card" data-fav-place="${pl.id}">
        <div class="pass-fav-thumb pass-fav-thumb--place">
          <img class="pass-fav-img" src="${place?.image || 'Assets/explore-thumb-04.jpg'}" alt="" loading="lazy" />
        </div>
        <div class="pass-fav-body">
          <div class="pass-fav-topline">
            <span class="pass-fav-badge pass-fav-badge--place">PLACE</span>
            <span class="pass-fav-date">Included</span>
          </div>
          <p class="pass-fav-title">${pl.title}</p>
          <p class="pass-fav-sub">${pl.address}</p>
        </div>
        <div class="pass-fav-side">
          <svg class="pass-fav-icon" width="18" height="22" viewBox="0 0 24 24"><path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>
        </div>
      </button>
    `;
  }).join('');

  placesEl.querySelectorAll('[data-fav-place]').forEach(btn => {
    btn.addEventListener('click', () => {
      const pl = FAVORITE_PLACES.find(p => p.id === +btn.dataset.favPlace);
      if (pl) openDetail(pl.exploreId, 'home');
    });
  });
}

function renderPassWallet() {
  const owned = state.ownedPasses;
  const hasPass = owned.length > 0;
  const activePass = owned[state.carouselIndex] || owned[0];
  $('#app')?.classList.toggle('pass-empty-state', !hasPass);
  updatePassAdState();

  if (hasPass) {
    const firstName = owned[0].holderName.split(' ')[0] || 'there';
    $('#passGreeting').textContent = `Hi, ${firstName.charAt(0) + firstName.slice(1).toLowerCase()}!`;
    const canAddMore = owned.length < MAX_OWNED_PASSES;
    $('#passGreetingSub').textContent = owned.length === 1 && canAddMore
      ? 'Your museum pass is ready'
      : canAddMore
        ? `${owned.length} passes · swipe to browse`
        : 'All regional passes unlocked';
    $('#passStatus').hidden = false;
    $('#passExpiry').textContent = activePass?.expiry || owned[0].expiry;
    $('#passQrBtn').hidden = false;
  } else {
    $('#passGreeting').textContent = 'Your Pass';
    $('#passGreetingSub').textContent = 'Add your museum pass to unlock QR code access.';
    $('#passStatus').hidden = true;
    $('#passQrBtn').hidden = true;
  }

  const showAdd = owned.length < MAX_OWNED_PASSES;
  const carousel = $('#passCarousel');
  carousel.innerHTML = owned.map(buildDigitalPassHTML).join('') + (showAdd ? buildAddPassHTML() : '');

  const slideCount = Math.max(owned.length + (showAdd ? 1 : 0), showAdd ? 1 : 0);
  const centered = slideCount === 1;
  carousel.classList.toggle('is-centered', centered);

  if (!centered && slideCount > 0) {
    const pad = Math.max(0, (carousel.clientWidth - carousel.querySelector('.wallet-slide')?.clientWidth) / 2);
    carousel.style.paddingLeft = `${pad}px`;
    carousel.style.paddingRight = `${pad}px`;
  } else {
    carousel.style.paddingLeft = '';
    carousel.style.paddingRight = '';
  }

  state.carouselIndex = Math.min(state.carouselIndex, Math.max(slideCount - 1, 0));
  updateCarouselDots(slideCount);

  carousel.removeEventListener('scroll', onCarouselScroll);
  carousel.addEventListener('scroll', onCarouselScroll, { passive: true });

  const addBtn = $('#carouselAddBtn');
  if (addBtn) addBtn.addEventListener('click', startPurchase);

  if (slideCount > 0) {
    requestAnimationFrame(() => scrollToCarouselSlide(state.carouselIndex));
  }

  if (hasPass && activePass) {
    $('#passExpiry').textContent = (owned[state.carouselIndex] || owned[0]).expiry;
  }

  $('#passPrizesSection')?.toggleAttribute('hidden', !hasPass);
  renderPassFavorites();
  renderPrizes();
  updateChoosePageAvailability();
}

function setDemoPassState(mode) {
  if (mode === 'owned') {
    state.ownedPasses = [{
      id: 2026061901,
      region: 'both',
      regionName: 'PIEMONTE & LOMBARDIA',
      cardImage: 'Assets/Card3.png',
      holderName: 'Maria Rossi',
      cardNumber: 'AML4821',
      expiry: '18/06/2027',
    }];
    state.carouselIndex = 0;
  } else {
    state.ownedPasses = [];
    state.carouselIndex = 0;
  }

  state.themePreference = 'Light mode';
  applyTheme('light');
  navigateTo('pass');
  setActiveNav('pass');
  renderPassWallet();

  $$('.demo-control-btn').forEach(btn => {
    btn.classList.toggle('is-active', btn.dataset.demoPassState === (mode === 'owned' ? 'owned' : 'empty'));
  });
}

function selectChoosePass(card) {
  if (!card || card.classList.contains('is-owned')) return;
  $$('.pass-card').forEach(c => c.classList.toggle('selected', c === card));
  state.region = card.dataset.region;
  state.regionName = card.dataset.name;
  state.cardImage = card.dataset.card;
  updateChoosePassInfo();
}

function updateChoosePassInfo() {
  const title = $('#choosePassInfoTitle');
  const detail = $('#choosePassInfoDetail');
  if (title) title.textContent = `${state.regionName} CARD`;
  if (detail) detail.textContent = 'see details';
}

function syncChooseDefaultSelection() {
  const available = [...$$('.pass-card')].filter(
    c => !state.ownedPasses.some(p => p.region === c.dataset.region)
  );
  if (!available.length) return;

  const current = $('.pass-card.selected');
  const currentOwned = current && state.ownedPasses.some(p => p.region === current.dataset.region);
  if (!current || currentOwned) {
    const preferred = available.find(c => c.dataset.region === 'both') || available[0];
    selectChoosePass(preferred);
  }
}

function updateChoosePageAvailability() {
  $$('.pass-card').forEach(card => {
    const owned = state.ownedPasses.some(p => p.region === card.dataset.region);
    card.classList.toggle('is-owned', owned);
    card.disabled = owned;
  });
  syncChooseDefaultSelection();
  updateChoosePassInfo();
  const hasAvailable = [...$$('.pass-card')].some(c => !c.classList.contains('is-owned'));
  const continueBtn = $('#chooseContinueBtn');
  if (continueBtn) continueBtn.disabled = !hasAvailable;
}

function proceedFromChoose() {
  const selected = $('.pass-card.selected');
  if (!selected || selected.classList.contains('is-owned')) {
    showToast('Please select an available pass', 'error');
    return;
  }
  state.region = selected.dataset.region;
  state.regionName = selected.dataset.name;
  state.cardImage = selected.dataset.card;
  const heroImg = $('#heroPassCardImg');
  heroImg.src = state.cardImage;
  heroImg.alt = `Abbonamento Musei ${state.regionName}`;
  state.passCount = 1;
  state.holders = [{ rate: null, name: '', dob: null, open: true }];
  $('#passCount').textContent = '1';
  renderPassHolders();
  navigateTo('selection');
}

function finalizePurchase() {
  if (state.cart.length === 0) return false;

  if (state.ownedPasses.length >= MAX_OWNED_PASSES) {
    showToast('You already own the maximum of 3 passes', 'error');
    return false;
  }

  if (state.ownedPasses.some(p => p.region === state.region)) {
    showToast('You already own this regional pass', 'error');
    return false;
  }

  const expiry = new Date();
  expiry.setFullYear(expiry.getFullYear() + 1);
  const suffix = Math.floor(1000 + Math.random() * 9000);

  state.ownedPasses.push({
    id: Date.now(),
    region: state.region,
    regionName: state.regionName,
    cardImage: state.cardImage,
    holderName: state.cart[0].name,
    cardNumber: `AML${suffix}•••`,
    expiry: expiry.toLocaleDateString('en-GB'),
  });

  state.cart = [];
  state.holders = [{ rate: null, name: '', dob: null, open: true }];
  state.passCount = 1;
  state.carouselIndex = state.ownedPasses.length - 1;
  renderCart();
  renderPassWallet();
  return true;
}

function renderCart() {
  const container = $('#cartItems');
  if (state.cart.length === 0) {
    container.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
    $('#cartTotalAmount').textContent = '€0';
    return;
  }

  container.innerHTML = state.cart.map(item => `
    <div class="cart-item" data-id="${item.id}">
      <div class="cart-item-info">
        <p class="cart-item-title">1 ${item.rateName} PASS — €${item.price}</p>
        <p class="cart-item-sub">${item.region} Museum pass<br/>For ${item.name}</p>
      </div>
      <button class="cart-delete" data-delete="${item.id}" aria-label="Remove">
        <svg width="16" height="18" viewBox="0 0 16 18"><path d="M2 4h12M5 4V2h6v2M6 7v7M10 7v7M3 4l1 12h8l1-12" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>
      </button>
    </div>
  `).join('');

  const total = state.cart.reduce((s, i) => s + i.price, 0);
  $('#cartTotalAmount').textContent = `€${total}`;
  $('#payAmount').textContent = `€${total}`;

  container.querySelectorAll('[data-delete]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.cart = state.cart.filter(i => i.id !== +btn.dataset.delete);
      renderCart();
      if (state.cart.length === 0) showToast('Cart is now empty');
    });
  });
}

function getFilteredExploreItems() {
  let items = [...EXPLORE_ITEMS];

  if (state.exploreCategory !== 'all') {
    items = items.filter(i => i.type === state.exploreCategory);
  }

  const q = state.exploreSearch.trim().toLowerCase();
  if (q) {
    items = items.filter(i =>
      i.title.toLowerCase().includes(q) ||
      i.venue.toLowerCase().includes(q) ||
      i.city.toLowerCase().includes(q)
    );
  }

  if (state.exploreFilters.openNow) items = items.filter(i => i.openNow);
  if (state.exploreFilters.free) items = items.filter(i => i.free);
  if (state.exploreFilters.childFriendly) items = items.filter(i => i.childFriendly);
  if (state.exploreFilters.disabledFriendly) items = items.filter(i => i.accessible);
  if (state.exploreFilters.maxDistance < DISTANCE_UNLIMITED) {
    items = items.filter(i => i.distance <= state.exploreFilters.maxDistance);
  }

  if (state.exploreSort === 'name') {
    items.sort((a, b) => a.title.localeCompare(b.title));
  } else if (state.exploreSort === 'date') {
    items.sort((a, b) => a.date.localeCompare(b.date));
  }

  return items;
}

function getHomeSelectedIds() {
  return [...state.homeInterests.artCulture, ...state.homeInterests.social];
}

function getHomeChips() {
  const chips = [{ id: 'recommend', label: 'Recommend' }];
  getHomeSelectedIds().forEach(id => {
    chips.push({ id, label: INTEREST_LABELS[id] || id });
  });
  return chips;
}

function getFilteredDiscoverFeed() {
  const selected = getHomeSelectedIds();
  const maxDist = state.homeInterests.maxDistance;

  let items = DISCOVER_FEED.filter(item => item.distance <= maxDist);

  if (state.homeActiveChip === 'recommend') {
    if (selected.length) {
      items = items.filter(item => item.interests.some(tag => selected.includes(tag)));
    }
  } else {
    items = items.filter(item => item.interests.includes(state.homeActiveChip));
  }

  return items;
}

function toggleHomeInterest(category, id) {
  const list = state.homeInterests[category];
  const idx = list.indexOf(id);
  if (idx >= 0) list.splice(idx, 1);
  else list.push(id);
}

function removeHomeInterest(id) {
  state.homeInterests.artCulture = state.homeInterests.artCulture.filter(t => t !== id);
  state.homeInterests.social = state.homeInterests.social.filter(t => t !== id);
  if (state.homeActiveChip === id) state.homeActiveChip = 'recommend';
}

function renderHome() {
  renderPassFavorites();
}

function renderDiscoverFeed(targetSelector = '#homeFeed', returnScreen = 'home', items = getFilteredDiscoverFeed()) {
  const feed = getFilteredDiscoverFeed();
  const feedEl = $(targetSelector);
  if (!feedEl) return;
  const visibleFeed = items || feed;
  if (!visibleFeed.length) {
    feedEl.innerHTML = '<p class="home-feed-empty">No recommendations match your interests.<br/>Try adjusting your filters or interests.</p>';
    return;
  }

  feedEl.innerHTML = visibleFeed.map(item => `
    <button class="home-feed-card home-feed-card--${item.theme}${item.image ? ' home-feed-card--has-image' : ''}" data-explore-id="${item.exploreId}" type="button">
      <div class="home-feed-card-visual">
        ${item.image ? `<img class="home-feed-card-img" src="${item.image}" alt="" />` : ''}
        <span class="home-feed-card-badge">${exploreTypeLabel(item.type)}</span>
        <span class="home-feed-card-date">${item.date}</span>
      </div>
      <div class="home-feed-card-body">
        <p class="home-feed-card-title">${item.title}</p>
        <p class="home-feed-card-summary">${item.summary}</p>
        <p class="home-feed-card-meta">${item.venue} · ${item.city} · ${item.distance} km</p>
      </div>
    </button>
  `).join('');

  feedEl.querySelectorAll('.home-feed-card').forEach(btn => {
    btn.addEventListener('click', () => openDetail(+btn.dataset.exploreId, returnScreen));
  });
}

function getExploreDiscoverFeed() {
  let items = getFilteredDiscoverFeed();
  if (state.exploreCategory !== 'all') {
    items = items.filter(item => item.type === state.exploreCategory);
  }
  return items;
}

function renderExploreDiscover() {
  renderDiscoverFeed('#exploreDiscoverFeed', 'explore', getExploreDiscoverFeed());
}

function renderHomeInterests() {
  const selected = getHomeSelectedIds();

  $('#homeYourInterests').innerHTML = selected.length
    ? selected.map(id => `
        <span class="interests-your-tag">
          ${INTEREST_LABELS[id]}
          <button type="button" class="interests-tag-remove" data-remove="${id}" aria-label="Remove ${INTEREST_LABELS[id]}">×</button>
        </span>
      `).join('')
    : '<p class="interests-empty">No interests selected yet.</p>';

  $('#homeYourInterests').querySelectorAll('.interests-tag-remove').forEach(btn => {
    btn.addEventListener('click', () => {
      removeHomeInterest(btn.dataset.remove);
      renderHomeInterests();
    });
  });

  $('#homeArtCultureTags').innerHTML = ART_CULTURE_TAGS.map(tag => `
    <button type="button" class="interests-pick-tag ${state.homeInterests.artCulture.includes(tag.id) ? 'selected' : ''}" data-category="artCulture" data-id="${tag.id}">${tag.label}</button>
  `).join('');

  $('#homeSocialTags').innerHTML = SOCIAL_MODE_TAGS.map(tag => `
    <button type="button" class="interests-pick-tag ${state.homeInterests.social.includes(tag.id) ? 'selected' : ''}" data-category="social" data-id="${tag.id}">${tag.label}</button>
  `).join('');

  $$('#homeArtCultureTags .interests-pick-tag, #homeSocialTags .interests-pick-tag').forEach(btn => {
    btn.addEventListener('click', () => {
      toggleHomeInterest(btn.dataset.category, btn.dataset.id);
      renderHomeInterests();
    });
  });

  const slider = $('#homeDistanceSlider');
  slider.value = state.homeInterests.maxDistance;
  $('#homeDistanceDisplay').textContent = state.homeInterests.maxDistance;
}

function initHomePage() {
  $('#homeInterestsBtn')?.addEventListener('click', () => navigateTo('home-interests'));

  $('#homeDistanceSlider')?.addEventListener('input', (e) => {
    state.homeInterests.maxDistance = +e.target.value;
    $('#homeDistanceDisplay').textContent = e.target.value;
  });
}

function renderPrizes() {
  const list = $('#prizesList');
  if (!list) return;
  list.innerHTML = PRIZES_BADGES.map(badge => {
    const unlocked = state.visitCount >= badge.visitsRequired;
    return `
      <div class="prize-card prize-card--${badge.theme} ${unlocked ? 'prize-card--unlocked' : 'prize-card--locked'}">
        <div class="prize-card-pattern" aria-hidden="true"></div>
        <div class="prize-card-inner">
          <div class="prize-card-character">${prizeCharacterSvg(badge.variant)}</div>
          <div class="prize-card-info">
            <h3 class="prize-card-title">${badge.title}</h3>
            <p class="prize-card-visits">${badge.visitsLabel}</p>
          </div>
        </div>
        <button class="prize-share-btn" type="button" aria-label="Share badge" data-badge="${badge.title}">
          <svg width="18" height="18" viewBox="0 0 24 24"><circle cx="6" cy="12" r="2.5" fill="currentColor"/><circle cx="18" cy="6" r="2.5" fill="currentColor"/><circle cx="18" cy="18" r="2.5" fill="currentColor"/><path d="M8.5 11l7-4M8.5 13l7 4" stroke="currentColor" stroke-width="1.8"/></svg>
        </button>
      </div>
    `;
  }).join('');

  list.querySelectorAll('.prize-share-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      showToast(`Share ${btn.dataset.badge}`);
    });
  });
}

function getInfoMuseumRecommendations(prompt = '') {
  const normalized = prompt.toLowerCase();
  const wantsMilan = /milan|milano/.test(normalized);
  const preferredIds = wantsMilan ? [4, 7, 10] : [4, 7, 3];
  return preferredIds
    .map(id => EXPLORE_ITEMS.find(item => item.id === id))
    .filter(Boolean);
}

function appendInfoMessage(type, html) {
  const chat = $('#infoChat');
  if (!chat) return;
  $('.info-content')?.classList.add('has-chat');
  const bubble = document.createElement('div');
  bubble.className = `info-message info-message--${type}`;
  bubble.innerHTML = html;
  chat.appendChild(bubble);
  chat.scrollTop = chat.scrollHeight;
}

function renderInfoRecommendations(prompt) {
  const museums = getInfoMuseumRecommendations(prompt);
  appendInfoMessage('assistant', `
    <p>I found three cultural museums you may like:</p>
    <div class="info-result-list">
      ${museums.map(item => `
        <button type="button" class="info-result-card" data-info-explore-id="${item.id}">
          <strong>${item.title}</strong>
          <span>${item.venue} · ${item.city} · ${item.distance} km</span>
        </button>
      `).join('')}
    </div>
  `);
  $('#infoChat').querySelectorAll('[data-info-explore-id]').forEach(btn => {
    btn.addEventListener('click', () => openDetail(+btn.dataset.infoExploreId, 'prizes'));
  });
}

function handleInfoPrompt(prompt) {
  const value = prompt.trim();
  if (!value) return;

  appendInfoMessage('user', value);
  $('#infoInput').value = '';

  const lower = value.toLowerCase();
  if (/pass|card|buy/.test(lower)) {
    appendInfoMessage('assistant', 'Sure, I will take you to the pass page.');
    setTimeout(() => {
      navigateTo('pass');
      setActiveNav('pass');
    }, 450);
    return;
  }

  if (/milan|milano|museum|culture/.test(lower)) {
    renderInfoRecommendations(value);
    return;
  }

  appendInfoMessage('assistant', 'Tell me a city, museum type, or whether you want to buy a pass, and I will guide you.');
}

function initInfoAssistant() {
  $('#infoSendBtn')?.addEventListener('click', () => handleInfoPrompt($('#infoInput')?.value || ''));
  $('#infoInput')?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleInfoPrompt(e.target.value);
  });
  $('#infoMicBtn')?.addEventListener('click', () => {
    const sample = 'I want to find cultural museums near Milan';
    $('#infoInput').value = sample;
    handleInfoPrompt(sample);
  });
  $$('.info-suggestion').forEach(btn => {
    btn.addEventListener('click', () => handleInfoPrompt(btn.dataset.infoPrompt || btn.textContent));
  });
}

function exploreTypeLabel(type) {
  return { museum: 'Museum', exhibition: 'Exhibition', event: 'Event' }[type] || type;
}

function exploreThumbIcon(type) {
  const icons = {
    museum: '<svg width="24" height="24" viewBox="0 0 24 24"><path d="M4 20h16M6 20V8l6-4 6 4v12" fill="none" stroke="currentColor" stroke-width="1.8"/><rect x="10" y="12" width="4" height="8" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>',
    exhibition: '<svg width="24" height="24" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M3 10h18" stroke="currentColor" stroke-width="1.8"/></svg>',
    event: '<svg width="24" height="24" viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="15" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M8 3v4M16 3v4M4 10h16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
  };
  return icons[type] || icons.museum;
}

function exploreThumbImage(item) {
  if (item.image) {
    return `<img class="explore-item-thumb-img" src="${item.image}" alt="" width="72" height="72" loading="lazy" />`;
  }
  return exploreThumbIcon(item.type);
}

function getItemDetail(item) {
  const extra = DETAIL_EXTRAS[item.id] || {};
  return {
    ...item,
    address: extra.address || `${item.venue} · ${item.city}`,
    phone: extra.phone || '011 939130',
    description: extra.description || `Discover ${item.title} at ${item.venue} in ${item.city}. ${exploreTypeLabel(item.type)}s across Piemonte and Lombardia are included with your Abbonamento Musei pass for free entry and exclusive access.`,
    fullPrice: extra.fullPrice || (item.free ? '0.00' : '8.00'),
    reducedPrice: extra.reducedPrice || (item.free ? '0.00' : '5.00'),
    included: extra.included !== undefined ? extra.included : !item.free,
    petFriendly: extra.petFriendly !== undefined ? extra.petFriendly : [3, 4, 7, 12, 14].includes(item.id),
    hours: extra.hours || DEFAULT_HOURS,
  };
}

function getRelatedItems(item, count = 2) {
  const sameCity = EXPLORE_ITEMS.filter(i => i.id !== item.id && i.city === item.city);
  const others = EXPLORE_ITEMS.filter(i => i.id !== item.id && i.city !== item.city);
  return [...sameCity, ...others].slice(0, count);
}

function openDetail(id, returnScreen = 'explore') {
  const item = EXPLORE_ITEMS.find(i => i.id === id);
  if (!item) return;
  state.detailItemId = id;
  state.detailReturn = returnScreen;
  state.detailExploreView = state.exploreView;
  navigateTo('detail');
}

function renderDetailFavorite() {
  const btn = $('#detailFavoriteBtn');
  if (!btn || !state.detailItemId) return;

  const isFavorite = state.favoriteItemIds.includes(state.detailItemId);
  btn.classList.toggle('is-favorite', isFavorite);
  btn.setAttribute('aria-pressed', String(isFavorite));
  btn.setAttribute('aria-label', isFavorite ? 'Remove from favorites' : 'Add to favorites');
  btn.innerHTML = isFavorite
    ? '<svg width="22" height="20" viewBox="0 0 24 24"><path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0112 6a5.5 5.5 0 019.5 6c-2.5 4.5-9.5 9-9.5 9z" fill="currentColor"/></svg>'
    : '<svg width="22" height="20" viewBox="0 0 24 24"><path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0112 6a5.5 5.5 0 019.5 6c-2.5 4.5-9.5 9-9.5 9z" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"/></svg>';
}

function toggleDetailFavorite() {
  if (!state.detailItemId) return;

  const isFavorite = state.favoriteItemIds.includes(state.detailItemId);
  state.favoriteItemIds = isFavorite
    ? state.favoriteItemIds.filter(id => id !== state.detailItemId)
    : [...state.favoriteItemIds, state.detailItemId];
  renderDetailFavorite();
}

function renderDetailCardStatus(detail) {
  const status = $('#detailCardStatus');
  if (!status) return;

  const isIncluded = detail.included;
  status.className = `detail-card-status ${isIncluded ? 'is-included' : 'is-not-included'}`;
  status.innerHTML = `
    <span class="detail-card-status-icon" aria-hidden="true">
      <svg width="17" height="17" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M3 10h18" stroke="currentColor" stroke-width="1.8"/><path d="M7 15h5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
    </span>
    <span>Your card ${isIncluded ? 'is included' : 'is not included'}</span>
  `;
}

function renderDetailFriendlyTags(item, detail) {
  const badges = [];
  if (item.childFriendly) {
    badges.push(`
      <span class="detail-friendly-tag">
        <svg width="16" height="16" viewBox="0 0 24 24"><circle cx="12" cy="5" r="2.4" fill="currentColor"/><path d="M7 11h10M12 8v10M8 21l4-6 4 6" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
        Child friendly
      </span>
    `);
  }
  if (detail.petFriendly) {
    badges.push(`
      <span class="detail-friendly-tag">
        <svg width="16" height="16" viewBox="0 0 24 24"><circle cx="7" cy="8" r="2" fill="currentColor"/><circle cx="12" cy="6" r="2" fill="currentColor"/><circle cx="17" cy="8" r="2" fill="currentColor"/><circle cx="9" cy="13" r="2" fill="currentColor"/><circle cx="15" cy="13" r="2" fill="currentColor"/><path d="M8 17c1.2-2 2.5-3 4-3s2.8 1 4 3c.8 1.4-.2 3-1.8 3H9.8C8.2 20 7.2 18.4 8 17z" fill="currentColor"/></svg>
        Pet friendly
      </span>
    `);
  }
  if (item.accessible) {
    badges.push(`
      <span class="detail-friendly-tag">
        <svg width="16" height="16" viewBox="0 0 24 24"><circle cx="12" cy="4" r="2" fill="currentColor"/><path d="M7 10h10v2h-3v8h-2v-5H9v5H7v-8H4v-2h3z" fill="currentColor"/></svg>
        Accessible
      </span>
    `);
  }
  $('#detailBadges').innerHTML = badges.join('');
}

function renderDetailHours(hours) {
  $('#detailHours').innerHTML = hours.map(h => {
    const [day, ...timeParts] = h.split(': ');
    return `
      <div class="detail-hour-row">
        <span>${day}</span>
        <strong>${timeParts.join(': ')}</strong>
      </div>
    `;
  }).join('');
}

function renderDetail() {
  const item = EXPLORE_ITEMS.find(i => i.id === state.detailItemId);
  if (!item) return;

  const detail = getItemDetail(item);
  const scroll = $('#detailScroll');
  if (scroll) scroll.scrollTop = 0;

  $('#detailType').textContent = exploreTypeLabel(item.type).toUpperCase();
  $('#detailTitle').textContent = item.title.toUpperCase();
  renderDetailFavorite();
  $('#detailAddress').innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24"><path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="9" r="2" fill="currentColor"/></svg> ${detail.address}`;
  $('#detailPhone').innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24"><path d="M6 2h4l2 5-3 2a13 13 0 005 5l2-3 5 2v4a2 2 0 01-2 2C9.8 19 5 14.2 5 7a2 2 0 012-2z" fill="none" stroke="currentColor" stroke-width="1.8"/></svg> ${detail.phone}`;
  renderDetailCardStatus(detail);
  renderDetailFriendlyTags(item, detail);
  renderDetailHours(detail.hours);
  $('#detailDesc').textContent = detail.description;
  $('#detailFullPrice').textContent = detail.fullPrice;
  $('#detailReducedPrice').textContent = detail.reducedPrice;

  const hero = $('#detailHero');
  hero.className = `detail-hero detail-hero--${item.type}`;
  hero.style.setProperty('--detail-hero-image', `url("${item.image}")`);

  const related = getRelatedItems(item);
  const galleryItems = [item, ...related].slice(0, 3);
  const gallery = $('.detail-gallery');
  if (gallery) {
    gallery.innerHTML = galleryItems.map((galleryItem, index) => `
      <div class="detail-gallery-item">
        <img src="${galleryItem.image}" alt="${galleryItem.title} ${index + 1}" loading="lazy" />
      </div>
    `).join('');
  }

  $('#detailRelated').innerHTML = related.map(r => `
    <button class="detail-related-card" data-related-id="${r.id}" type="button">
      <div class="detail-related-thumb">${exploreThumbImage(r)}</div>
      <div class="detail-related-body">
        <p class="detail-related-card-title">${r.title}</p>
        <span class="detail-related-more">Read more →</span>
      </div>
    </button>
  `).join('');

  $('#detailRelated').querySelectorAll('.detail-related-card').forEach(btn => {
    btn.addEventListener('click', () => openDetail(+btn.dataset.relatedId, state.detailReturn));
  });
}

function openGoogleMapsForDetail() {
  const item = EXPLORE_ITEMS.find(i => i.id === state.detailItemId);
  if (!item) return;
  const detail = getItemDetail(item);
  const query = `${item.title}, ${detail.address.replace(/\s·\s/g, ', ')}`;
  const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

function initDetailPage() {
  $('#detailBack').addEventListener('click', () => {
    navigateTo(state.detailReturn);
    if (state.detailReturn === 'explore') {
      setExploreView(state.detailExploreView);
      setActiveNav('explore');
    }
    if (state.detailReturn === 'home') setActiveNav('home');
    if (state.detailReturn === 'prizes') setActiveNav('prizes');
  });
  $('#detailBuyPass').addEventListener('click', startPurchase);
  $('#detailMapBtn').addEventListener('click', openGoogleMapsForDetail);
  $('#detailFavoriteBtn')?.addEventListener('click', toggleDetailFavorite);
  $('#detailHelpBtn').addEventListener('click', () => showToast('Help centre — coming soon'));
}

function renderExploreList(items) {
  const list = $('#exploreList');
  if (!items.length) {
    list.innerHTML = '<p class="explore-empty">No results found.<br/>Try adjusting your filters.</p>';
    return;
  }

  list.innerHTML = items.map(item => `
    <button class="explore-item" data-explore-id="${item.id}">
      <div class="explore-item-thumb">${exploreThumbImage(item)}</div>
      <div class="explore-item-body">
        <p class="explore-item-type">${exploreTypeLabel(item.type)}</p>
        <p class="explore-item-title">${item.title}</p>
        <p class="explore-item-meta">${item.date}<br/>${item.venue} · ${item.city}</p>
      </div>
      <svg class="explore-item-chevron" width="8" height="14" viewBox="0 0 8 14"><path d="M1 1l6 6-6 6" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>
    </button>
  `).join('');

  list.querySelectorAll('.explore-item').forEach(btn => {
    btn.addEventListener('click', () => openDetail(+btn.dataset.exploreId));
  });
}

function renderExploreMap(items) {
  const container = $('#exploreMapMarkers');
  const groups = {};
  items.forEach(item => {
    const key = `${Math.round(item.mapX / 8)}-${Math.round(item.mapY / 8)}`;
    if (!groups[key]) groups[key] = [];
    groups[key].push(item);
  });

  container.innerHTML = Object.values(groups).map(group => {
    if (group.length > 1) {
      const avgX = group.reduce((s, i) => s + i.mapX, 0) / group.length;
      const avgY = group.reduce((s, i) => s + i.mapY, 0) / group.length;
      return `<button class="map-cluster" style="left:${avgX}%;top:${avgY}%" data-ids="${group.map(g => g.id).join(',')}">${group.length}</button>`;
    }
    const item = group[0];
    return `<button class="map-marker" style="left:${item.mapX}%;top:${item.mapY}%" data-id="${item.id}" aria-label="${item.title}">
      <svg width="28" height="36" viewBox="0 0 28 36">
        <path class="pin-body" d="M14 0C7 0 2 5 2 12c0 9 12 24 12 24s12-15 12-24C26 5 21 0 14 0z" fill="#00A67E"/>
        <circle cx="14" cy="12" r="5" fill="#002621"/>
      </svg>
    </button>`;
  }).join('');

  container.querySelectorAll('.map-marker').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('.map-marker').forEach(m => m.classList.remove('active'));
      btn.classList.add('active');
      openDetail(+btn.dataset.id);
    });
  });

  container.querySelectorAll('.map-cluster').forEach(btn => {
    btn.addEventListener('click', () => {
      const count = btn.dataset.ids.split(',').length;
      showToast(`${count} places in this area`);
    });
  });
}

function setExploreView(view) {
  state.exploreView = view;
  $$('.view-toggle-btn').forEach(b => b.classList.toggle('active', b.dataset.view === view));
  $('#exploreListPanel').classList.toggle('active', view === 'list');
  $('#exploreMapPanel').classList.toggle('active', view === 'map');
  if (view === 'map') renderExploreMap(getFilteredExploreItems());
}

function renderExplore() {
  const items = getFilteredExploreItems();
  const count = items.length;
  const countText = `${count} result${count !== 1 ? 's' : ''}`;
  const hasSearch = state.exploreSearch.trim().length > 0;

  $('#exploreSearch').value = state.exploreSearch;

  $('#exploreCount').textContent = countText;
  $('#mapSheetCount').textContent = countText;
  $('#exploreDiscover').hidden = hasSearch;
  $('#exploreListPanel').hidden = !hasSearch;
  $('#exploreMapPanel').hidden = !hasSearch;
  $('.explore-toolbar').hidden = !hasSearch;

  $$('.explore-chip').forEach(chip => {
    chip.classList.toggle('active', chip.dataset.category === state.exploreCategory);
  });

  if (!hasSearch) {
    $('#exploreListPanel').classList.remove('active');
    $('#exploreMapPanel').classList.remove('active');
    renderExploreDiscover();
    return;
  }

  renderExploreList(items);
  renderExploreMap(items);
  setExploreView(state.exploreView);
}

function initExplore() {
  $('#exploreSearch').addEventListener('input', (e) => {
    state.exploreSearch = e.target.value;
    renderExplore();
  });

  $$('.explore-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      state.exploreCategory = chip.dataset.category;
      renderExplore();
    });
  });

  $('#exploreSort').addEventListener('change', (e) => {
    state.exploreSort = e.target.value;
    renderExplore();
  });

  $$('.view-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => setExploreView(btn.dataset.view));
  });

  $('#mapSheetListBtn').addEventListener('click', () => setExploreView('list'));

  $('#mapLocateBtn').addEventListener('click', () => showToast('Centered on your location'));

  function syncFilterUI() {
    const f = state.exploreFilters;
    $('#filterOpenNow').checked = f.openNow;
    $('#filterFree').checked = f.free;
    $('#filterChildFriendly').checked = f.childFriendly;
    $('#filterDisabledFriendly').checked = f.disabledFriendly;
    $('#filterDistance').value = f.maxDistance;
    updateDistanceDisplayUI(f.maxDistance);
    updateDistanceSliderFill();
  }

  function readFilterUI() {
    return {
      openNow: $('#filterOpenNow').checked,
      free: $('#filterFree').checked,
      childFriendly: $('#filterChildFriendly').checked,
      disabledFriendly: $('#filterDisabledFriendly').checked,
      maxDistance: +$('#filterDistance').value,
    };
  }

  function updateDistanceSliderFill() {
    const slider = $('#filterDistance');
    const val = (+slider.value - +slider.min) / (+slider.max - +slider.min) * 100;
    slider.style.setProperty('--slider-fill', `${val}%`);
  }

  $('#exploreFilterBtn')?.addEventListener('click', () => {
    syncFilterUI();
    $('#exploreFilterOverlay').classList.add('active');
  });

  $('#filterDistance')?.addEventListener('input', (e) => {
    updateDistanceDisplayUI(e.target.value);
    updateDistanceSliderFill();
  });

  $('#exploreFilterApply').addEventListener('click', () => {
    state.exploreFilters = readFilterUI();
    closeAllOverlays();
    renderExplore();
    showToast('Filters applied');
  });

  $('#exploreFilterReset').addEventListener('click', () => {
    state.exploreFilters = { ...DEFAULT_EXPLORE_FILTERS };
    syncFilterUI();
    renderExplore();
    showToast('Filters reset');
  });

  syncFilterUI();
}

function startPurchase() {
  if (state.ownedPasses.length >= MAX_OWNED_PASSES) {
    showToast('You already own all available passes');
    return;
  }
  navigateTo('choose');
}

function initPassPage() {
  $('#passQrBtn').addEventListener('click', () => {
    const pass = state.ownedPasses[state.carouselIndex] || state.ownedPasses[0];
    if (pass) showToast(`QR Code — ${pass.cardNumber}`);
  });
  $('#passNotifyBtn').addEventListener('click', () => showToast('No new notifications'));
  $$('.pass-see-all').forEach(btn => {
    btn.addEventListener('click', () => showToast(`All favorite ${btn.dataset.seeAll}`));
  });
}

function initProfile() {
  document.addEventListener('click', (e) => {
    const updateBtn = e.target.closest?.('#profileUpdateBtn');
    const logoutBtn = e.target.closest?.('#profileLogoutBtn');
    if (!updateBtn && !logoutBtn) return;

    e.preventDefault();
    e.stopImmediatePropagation();
    if (updateBtn) {
      setProfileComplete(true);
      setProfileEditing(false);
      showToast('Profile information saved');
    }
    if (logoutBtn) {
      setProfileComplete(false);
      showToast('Logged out');
    }
  }, true);

  $('#profileUpdateBtn')?.addEventListener('click', (e) => {
    e.stopImmediatePropagation();
    setProfileComplete(true);
    setProfileEditing(false);
    showToast('Profile information saved');
  }, true);

  $('#profileLogoutBtn')?.addEventListener('click', (e) => {
    e.stopImmediatePropagation();
    setProfileComplete(false);
    showToast('Logged out');
  }, true);

  $('#profileQuickThemeBtn')?.addEventListener('click', () => {
    state.themePreference = state.theme === 'light' ? 'Dark mode' : 'Light mode';
    applyTheme(resolveThemePreference(state.themePreference));
  });

  $('#profileEditEntryBtn')?.addEventListener('click', () => {
    setProfileEditing(true);
    $('#profileScroll')?.scrollTo({ top: 0, behavior: 'smooth' });
  });

  $('#profileEditBackBtn')?.addEventListener('click', () => {
    setProfileEditing(false);
    $('#profileScroll')?.scrollTo({ top: 0, behavior: 'smooth' });
  });

  $('#profilePrivacyBtn')?.addEventListener('click', () => {
    openSettingsDetail('Privacy', `
      <p>Musei uses your account information only to manage museum passes, favorite places, recommendations, and service notifications.</p>
      <div class="settings-detail-group">
        <h4>Personal data</h4>
        <p>Name, email, date of birth, pass region, and saved museum interests are stored for pass management and personalized discovery.</p>
      </div>
      <div class="settings-detail-group">
        <h4>Permissions</h4>
        <p>Location is used only when you ask to find nearby museums. Notifications can be used for pass updates, booking reminders, and favorite events.</p>
      </div>
      <div class="settings-detail-group settings-detail-warning">
        <h4>Error report</h4>
        <p>If a payment or account action fails, the app shows an orange-red warning and asks you to check the missing information.</p>
      </div>
    `);
  });

  $('#profileLanguageBtn')?.addEventListener('click', (e) => {
    e.stopImmediatePropagation();
    openSettingsChoice('Language', ['English', 'Italian', 'Chinese'], state.language, (value) => {
      state.language = value;
      updateProfileSettingLabels();
    });
  }, true);

  $('#profileFontSizeBtn')?.addEventListener('click', (e) => {
    e.stopImmediatePropagation();
    openSettingsChoice('Font size', ['Compact', 'Standard', 'Large'], state.fontSize, (value) => {
      state.fontSize = value;
      updateProfileSettingLabels();
    });
  }, true);

  $('#profileAccessibleFontBtn')?.addEventListener('click', (e) => {
    e.stopImmediatePropagation();
    openSettingsChoice('Accessible font', ['Off', 'On'], state.accessibleFont, (value) => {
      state.accessibleFont = value;
      updateProfileSettingLabels();
    });
  }, true);

  $('#profileThemeToggleBtn')?.addEventListener('click', (e) => {
    e.stopImmediatePropagation();
    openSettingsChoice('Appearance', ['Light mode', 'Dark mode', 'Follow system'], state.themePreference, (value) => {
      state.themePreference = value;
      applyTheme(resolveThemePreference(value));
    });
  }, true);

  $('#profileVersionBtn')?.addEventListener('click', () => {
    openSettingsDetail('Version information', `
      <p>App version 2.7.17</p>
      <div class="settings-detail-group">
        <h4>Prototype build</h4>
        <p>This preview includes onboarding, pass purchase, wallet QR code, Home favorites, Explore search, Info assistant, and Profile settings.</p>
      </div>
      <div class="settings-detail-group">
        <h4>Last updated</h4>
        <p>June 20, 2026</p>
      </div>
    `);
  });

  $('#profileSettingsJump')?.addEventListener('click', () => {
    $('#profileSettings')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  $('#profileUpdateBtn')?.addEventListener('click', () => {
    showToast('Profile updated');
  });

  $('#profileFontSizeBtn')?.addEventListener('click', () => {
    showToast('Font size — demo only');
  });

  $('#profileAccessibleFontBtn')?.addEventListener('click', () => {
    showToast('Accessible font — demo only');
  });

  $('#profileThemeToggleBtn')?.addEventListener('click', () => {
    applyTheme(state.theme === 'light' ? 'dark' : 'light');
    showToast(state.theme === 'light' ? 'Light mode enabled' : 'Dark mode enabled');
  });

  $('#profileRegulationsBtn')?.addEventListener('click', () => {
    showToast('Usage regulations — demo only');
  });

  $('#profileLogoutBtn')?.addEventListener('click', () => {
    showToast('Logged out — demo only');
  });

  $('#profileDeleteBtn')?.addEventListener('click', () => {
    showToast('Account deletion — demo only');
  });
}

function init() {
  applyTheme(state.theme);
  initOnboarding();
  updateProfileSettingLabels();
  setProfileComplete(state.profileComplete);
  initPassPage();
  initHomePage();
  initDetailPage();

  $$('.pass-card').forEach(card => {
    card.addEventListener('click', () => {
      if (card.classList.contains('is-owned')) {
        showToast('You already own this pass');
        return;
      }
      selectChoosePass(card);
    });
  });

  $('#chooseContinueBtn').addEventListener('click', proceedFromChoose);
  $('#choosePassInfoDetail')?.addEventListener('click', () => navigateTo('pass-details'));
  $('.pass-detail-buy')?.addEventListener('click', () => navigateTo('choose'));

  $$('.back-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      navigateTo(btn.dataset.back);
      if (btn.dataset.back === 'home') setActiveNav('home');
      if (btn.dataset.back === 'explore') setActiveNav('explore');
    });
  });

  $('#stepperMinus').addEventListener('click', () => updatePassCount(-1));
  $('#stepperPlus').addEventListener('click', () => updatePassCount(1));
  $('#addToCartBtn').addEventListener('click', addToCart);

  $$('.payment-option').forEach(opt => {
    opt.addEventListener('click', () => {
      state.paymentMethod = opt.dataset.method;
      $$('.payment-option').forEach(o => o.classList.toggle('selected', o === opt));
    });
  });

  $('#confirmCartBtn').addEventListener('click', () => {
    if (state.cart.length === 0) { showToast('Your cart is empty', 'error'); return; }
    if (state.paymentMethod === 'wallet') {
      showToast('Apple/Google Pay — demo only');
      setTimeout(() => {
        if (finalizePurchase()) {
          showToast('Payment successful');
          navigateTo('pass');
        }
      }, 1200);
      return;
    }
    navigateTo('payment');
  });

  $('#payBtn').addEventListener('click', () => {
    const num = $('#cardNumber').value.trim();
    const name = $('#cardName').value.trim();
    const cvv = $('#cardCvv').value.trim();
    if (!num || !name || !cvv) { showToast('Please fill in all payment fields', 'error'); return; }
    if (!finalizePurchase()) return;
    showToast('Payment successful');
    navigateTo('pass');
  });

  $('#backToPassBtn').addEventListener('click', () => {
    if (finalizePurchase()) showToast('Pass added to your wallet');
    navigateTo('pass');
  });

  $$('.nav-item, .nav-fab').forEach(item => {
    item.addEventListener('click', () => {
      const nav = item.dataset.nav;
      if (nav === 'pass' || nav === 'explore' || nav === 'home' || nav === 'prizes' || nav === 'profile') {
        navigateTo(nav);
        setActiveNav(nav);
      } else {
        setActiveNav(nav);
        showToast(`${nav.charAt(0).toUpperCase() + nav.slice(1)} — coming soon`);
      }
    });
  });

  $$('.overlay').forEach(o => {
    o.addEventListener('click', (e) => { if (e.target === o) closeAllOverlays(); });
  });

  $('#dateConfirm').addEventListener('click', () => {
    state.holders[state.activeDateIndex].dob = { ...state.dateSelection };
    closeAllOverlays();
    renderPassHolders();
  });

  $('#cardNumber').addEventListener('input', (e) => {
    let v = e.target.value.replace(/\D/g, '').slice(0, 16);
    e.target.value = v.replace(/(.{4})/g, '$1 ').trim();
  });

  $('#cardCvv').addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\D/g, '').slice(0, 4);
  });

  $$('.demo-control-btn').forEach(btn => {
    btn.addEventListener('click', () => setDemoPassState(btn.dataset.demoPassState));
  });

  initExplore();
  initInfoAssistant();
  initProfile();
  renderPassHolders();
  renderCart();
  renderPassWallet();
  renderHome();
  renderPrizes();
  renderExplore();
  window.__museiReady = true;
}

document.addEventListener('DOMContentLoaded', init);

