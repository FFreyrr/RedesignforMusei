const THEME = document.body.dataset.theme === 'light' ? 'light' : 'dark';
const THEME_LABEL = THEME === 'light' ? 'Light Mode' : 'Dark Mode';

const BASE_ACTION = `
  closeAllOverlays();
  state.themePreference = '${THEME === 'light' ? 'Light mode' : 'Dark mode'}';
  applyTheme('${THEME}');
  state.ownedPasses = [];
  state.cart = [];
  state.carouselIndex = 0;
  state.exploreCategory = 'all';
  state.exploreSearch = '';
  state.exploreSort = 'relevance';
  state.exploreView = 'list';
  state.exploreFilters = { ...DEFAULT_EXPLORE_FILTERS };
  state.profileComplete = false;
  setProfileComplete(false);
  setActiveNav('pass');
  renderCart();
  renderPassWallet();
  renderHome();
  renderExplore();
  renderPrizes();
`;

const OWNED_PASS = `
  state.ownedPasses = [{
    id: 20260618,
    region: 'both',
    regionName: 'PIEMONTE & LOMBARDIA',
    cardImage: 'Assets/Card3.png',
    holderName: 'Maria Rossi',
    cardNumber: 'AML4821',
    expiry: '18/06/2027'
  }];
  state.carouselIndex = 0;
`;

const SELECTION_READY = `
  state.region = 'both';
  state.regionName = 'PIEMONTE & LOMBARDIA';
  state.cardImage = 'Assets/Card3.png';
  state.passCount = 1;
  state.holders = [{
    rate: RATES[0],
    name: 'Maria Rossi',
    dob: { month: 2, day: 11, year: 18 },
    open: true
  }];
  document.querySelector('#passCount').textContent = '1';
  document.querySelector('#heroPassCardImg').src = state.cardImage;
  document.querySelector('#heroPassCardImg').alt = 'Abbonamento Musei PIEMONTE & LOMBARDIA';
  renderPassHolders();
`;

const CART_READY = `
  state.region = 'both';
  state.regionName = 'PIEMONTE & LOMBARDIA';
  state.cardImage = 'Assets/Card3.png';
  state.cart = [{
    id: 1,
    rateName: 'Ordinary',
    region: 'PIEMONTE & LOMBARDIA',
    name: 'Maria Rossi',
    price: 36.8
  }];
  renderCart();
`;

const SETTINGS_SHEETS = {
  font: `openSettingsChoice('Font size', ['Compact', 'Standard', 'Large'], state.fontSize, (value) => { state.fontSize = value; updateProfileSettingLabels(); });`,
  accessible: `openSettingsChoice('Accessible font', ['Off', 'On'], state.accessibleFont, (value) => { state.accessibleFont = value; updateProfileSettingLabels(); });`,
  appearance: `openSettingsChoice('Appearance', ['Light mode', 'Dark mode', 'Follow system'], state.themePreference, (value) => { state.themePreference = value; applyTheme(resolveThemePreference(value)); });`,
};

const SCREENS = [
  {
    title: '01 Pass - Guest',
    action: `navigateTo('pass'); setActiveNav('pass'); renderPassWallet();`,
  },
  {
    title: '02 Pass - My Pass',
    action: `${OWNED_PASS} navigateTo('pass'); setActiveNav('pass'); renderPassWallet();`,
  },
  {
    title: '03 Home - Discover',
    action: `navigateTo('home'); setActiveNav('home');`,
  },
  {
    title: '04 Home - Personal Interests',
    action: `navigateTo('home-interests'); setActiveNav('home');`,
  },
  {
    title: '05 Explore - List',
    action: `navigateTo('explore'); setActiveNav('explore'); setExploreView('list');`,
  },
  {
    title: '06 Explore - Map',
    action: `navigateTo('explore'); setActiveNav('explore'); setExploreView('map');`,
  },
  {
    title: '07 Explore - Filters Sheet',
    action: `navigateTo('explore'); setActiveNav('explore'); setExploreView('list'); document.querySelector('#exploreFilterOverlay').classList.add('active');`,
  },
  {
    title: '08 Place Detail',
    action: `state.exploreView = 'list'; openDetail(3, 'explore'); setActiveNav('explore');`,
  },
  {
    title: '09 Choose Pass',
    action: `navigateTo('choose');`,
  },
  {
    title: '10 Selection - Holder Form',
    action: `${SELECTION_READY} navigateTo('selection');`,
  },
  {
    title: '11 Selection - Rate Sheet',
    action: `${SELECTION_READY} navigateTo('selection'); openRatePicker(0);`,
  },
  {
    title: '12 Selection - Date Sheet',
    action: `${SELECTION_READY} navigateTo('selection'); openDatePicker(0);`,
  },
  {
    title: '13 Cart',
    action: `${CART_READY} navigateTo('cart');`,
  },
  {
    title: '14 Payment',
    action: `${CART_READY} navigateTo('payment');`,
  },
  {
    title: '15 Success',
    action: `${CART_READY} navigateTo('success');`,
  },
  {
    title: '16 Prizes',
    action: `navigateTo('prizes'); setActiveNav('prizes');`,
  },
  {
    title: '17 Profile - Edit Profile',
    action: `setProfileComplete(false); navigateTo('profile'); setActiveNav('profile');`,
  },
  {
    title: '18 Profile - My Profile',
    action: `setProfileComplete(true); navigateTo('profile'); setActiveNav('profile'); document.querySelector('#profileScroll').scrollTop = 0;`,
  },
  {
    title: '19 Profile - Font Size Sheet',
    action: `setProfileComplete(true); navigateTo('profile'); setActiveNav('profile'); document.querySelector('#profileScroll').scrollTop = 9999; ${SETTINGS_SHEETS.font}`,
  },
  {
    title: '20 Profile - Accessible Font Sheet',
    action: `setProfileComplete(true); navigateTo('profile'); setActiveNav('profile'); document.querySelector('#profileScroll').scrollTop = 9999; ${SETTINGS_SHEETS.accessible}`,
  },
  {
    title: '21 Profile - Appearance Sheet',
    action: `setProfileComplete(true); navigateTo('profile'); setActiveNav('profile'); document.querySelector('#profileScroll').scrollTop = 9999; ${SETTINGS_SHEETS.appearance}`,
  },
];

function buildFrame(screen, index) {
  const item = document.createElement('article');
  item.className = 'showcase-item';
  item.innerHTML = `
    <header class="showcase-item-header">
      <span>${String(index + 1).padStart(2, '0')}</span>
      <h2>${screen.title.replace(/^\d+\s*/, '')}</h2>
    </header>
    <iframe title="${screen.title}" src="index.html?showcase=${THEME}-${index}" loading="lazy"></iframe>
  `;

  const frame = item.querySelector('iframe');
  frame.addEventListener('load', () => {
    const win = frame.contentWindow;
    const doc = frame.contentDocument;
    const style = doc.createElement('style');
    style.textContent = `
      html, body {
        width: 393px !important;
        height: 852px !important;
        min-height: 852px !important;
        margin: 0 !important;
        padding: 0 !important;
        overflow: hidden !important;
        display: block !important;
        background: transparent !important;
      }
      .device-frame {
        width: 393px !important;
        height: 852px !important;
        display: block !important;
      }
      .phone {
        width: 393px !important;
        height: 852px !important;
        max-width: none !important;
        box-shadow: none !important;
      }
    `;
    doc.head.appendChild(style);

    try {
      win.eval(`${BASE_ACTION} ${screen.action}`);
    } catch (error) {
      item.classList.add('is-error');
      item.dataset.error = error.message;
      console.error(`Showcase state failed: ${screen.title}`, error);
    }
  });

  return item;
}

function initShowcase() {
  document.querySelector('#showcaseTheme').textContent = THEME_LABEL;
  document.querySelector('#showcaseCount').textContent = `${SCREENS.length} screens / states`;
  document.querySelector('#showcaseList').append(...SCREENS.map(buildFrame));
}

document.addEventListener('DOMContentLoaded', initShowcase);
