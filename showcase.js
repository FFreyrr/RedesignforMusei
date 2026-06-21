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
    cardImage: 'Assets/pass-piemonte-lombardia.svg',
    holderName: 'Maria Rossi',
    cardNumber: 'AML4821',
    expiry: '18/06/2027'
  }];
  state.carouselIndex = 0;
`;

const SELECTION_READY = `
  state.region = 'both';
  state.regionName = 'PIEMONTE & LOMBARDIA';
  state.cardImage = 'Assets/pass-piemonte-lombardia.svg';
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
  state.cardImage = 'Assets/pass-piemonte-lombardia.svg';
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
  privacy: `openSettingsDetail('Privacy', '<p>Musei uses your account information only to manage museum passes, favorite places, recommendations, and service notifications.</p><div class="settings-detail-group"><h4>Personal data</h4><p>Name, email, date of birth, pass region, and saved museum interests are stored for pass management and personalized discovery.</p></div><div class="settings-detail-group"><h4>Permissions</h4><p>Location is used only when you ask to find nearby museums. Notifications can be used for pass updates, booking reminders, and favorite events.</p></div><div class="settings-detail-group settings-detail-warning"><h4>Error report</h4><p>If a payment or account action fails, the app shows an orange-red warning and asks you to check the missing information.</p></div>');`,
  language: `openSettingsChoice('Language', ['English', 'Italian', 'Chinese'], state.language, (value) => { state.language = value; updateProfileSettingLabels(); });`,
  appearance: `openSettingsChoice('Appearance', ['Light mode', 'Dark mode', 'Follow system'], state.themePreference, (value) => { state.themePreference = value; applyTheme(resolveThemePreference(value)); });`,
  version: `openSettingsDetail('Version information', '<p>App version 2.7.17</p><div class="settings-detail-group"><h4>Prototype build</h4><p>This preview includes onboarding, pass purchase, wallet QR code, Home favorites, Explore search, Info assistant, and Profile settings.</p></div><div class="settings-detail-group"><h4>Last updated</h4><p>June 21, 2026</p></div>');`,
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
    title: '03 Pass - QR Wallet',
    action: `${OWNED_PASS} state.qrCardFlipped = false; state.walletAddState = 'idle'; navigateTo('pass-qr'); setActiveNav('pass'); renderQrPassPage();`,
  },
  {
    title: '04 Home - Discover',
    action: `navigateTo('home'); setActiveNav('home');`,
  },
  {
    title: '05 Home - Personal Interests',
    action: `navigateTo('home-interests'); setActiveNav('home');`,
  },
  {
    title: '06 Explore - List',
    action: `navigateTo('explore'); setActiveNav('explore'); setExploreView('list');`,
  },
  {
    title: '07 Explore - Map',
    action: `navigateTo('explore'); setActiveNav('explore'); setExploreView('map');`,
  },
  {
    title: '08 Explore - Filters Sheet',
    action: `navigateTo('explore'); setActiveNav('explore'); setExploreView('list'); document.querySelector('#exploreFilterOverlay').classList.add('active');`,
  },
  {
    title: '09 Place Detail',
    action: `state.exploreView = 'list'; openDetail(3, 'explore'); setActiveNav('explore');`,
  },
  {
    title: '10 Choose Pass',
    action: `navigateTo('choose');`,
  },
  {
    title: '11 Selection - Holder Form',
    action: `${SELECTION_READY} navigateTo('selection');`,
  },
  {
    title: '12 Selection - Rate Sheet',
    action: `${SELECTION_READY} navigateTo('selection'); openRatePicker(0);`,
  },
  {
    title: '13 Selection - Date Sheet',
    action: `${SELECTION_READY} navigateTo('selection'); openDatePicker(0);`,
  },
  {
    title: '14 Cart',
    action: `${CART_READY} navigateTo('cart');`,
  },
  {
    title: '15 Payment',
    action: `${CART_READY} navigateTo('payment');`,
  },
  {
    title: '16 Success',
    action: `${CART_READY} navigateTo('success');`,
  },
  {
    title: '17 Info - Start',
    action: `navigateTo('prizes'); setActiveNav('prizes');`,
  },
  {
    title: '18 Info - Assistant Results',
    action: `navigateTo('prizes'); setActiveNav('prizes'); handleInfoPrompt('I want to find cultural museums near Milan');`,
  },
  {
    title: '19 Pass Details',
    action: `navigateTo('pass-details');`,
  },
  {
    title: '20 Profile - Edit Profile',
    action: `setProfileComplete(false); navigateTo('profile'); setActiveNav('profile');`,
  },
  {
    title: '21 Profile - My Profile',
    action: `setProfileComplete(true); navigateTo('profile'); setActiveNav('profile'); document.querySelector('#profileScroll').scrollTop = 0;`,
  },
  {
    title: '22 Profile - Privacy',
    action: `setProfileComplete(true); navigateTo('profile'); setActiveNav('profile'); document.querySelector('#profileScroll').scrollTop = 9999; ${SETTINGS_SHEETS.privacy}`,
  },
  {
    title: '23 Profile - Language Sheet',
    action: `setProfileComplete(true); navigateTo('profile'); setActiveNav('profile'); document.querySelector('#profileScroll').scrollTop = 9999; ${SETTINGS_SHEETS.language}`,
  },
  {
    title: '24 Profile - Appearance Sheet',
    action: `setProfileComplete(true); navigateTo('profile'); setActiveNav('profile'); document.querySelector('#profileScroll').scrollTop = 9999; ${SETTINGS_SHEETS.appearance}`,
  },
  {
    title: '25 Profile - Version',
    action: `setProfileComplete(true); navigateTo('profile'); setActiveNav('profile'); document.querySelector('#profileScroll').scrollTop = 9999; ${SETTINGS_SHEETS.version}`,
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
    <iframe title="${screen.title}" src="index.html?showcase=${THEME}-${index}&showcaseScreen=${index}"></iframe>
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

    const applyScreen = () => {
      if (!win.__museiReady) {
        win.setTimeout(applyScreen, 50);
        return;
      }
      try {
        win.eval(`${BASE_ACTION} ${screen.action}`);
      } catch (error) {
        item.classList.add('is-error');
        item.dataset.error = error.message;
        console.error(`Showcase state failed: ${screen.title}`, error);
      }
    };
    applyScreen();
  });

  return item;
}

function initShowcase() {
  document.querySelector('#showcaseTheme').textContent = THEME_LABEL;
  document.querySelector('#showcaseCount').textContent = `${SCREENS.length} screens / states`;
  document.querySelector('#showcaseList').append(...SCREENS.map(buildFrame));
}

document.addEventListener('DOMContentLoaded', initShowcase);
