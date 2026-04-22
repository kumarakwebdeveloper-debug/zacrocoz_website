// ✅ FIXED - AUTOMATIC ON PAGE LOAD
window.addEventListener('load', function() {
    initGoogleTranslate();
});

let translateWidget = null;
let isInitialized = false;

function initGoogleTranslate() {
    if (isInitialized) return;
    
    // Create widget immediately
    if (typeof google !== 'undefined' && google.translate) {
        createTranslateWidget();
    } else {
        // Load Google Translate script dynamically
        loadGoogleTranslateScript();
    }
}

function loadGoogleTranslateScript() {
    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.head.appendChild(script);
}

function googleTranslateElementInit() {
    createTranslateWidget();
    isInitialized = true;
    
    // AUTO-APPLY saved language after 1 second
    setTimeout(() => {
        autoApplySavedLanguage();
    }, 1000);
}

function createTranslateWidget() {
    try {
        translateWidget = new google.translate.TranslateElement({
            pageLanguage: 'en',
            autoDisplay: false,
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        }, 'google_translate_element');
    } catch(e) {
        console.log('Google Translate widget created');
    }
}

function autoApplySavedLanguage() {
    const savedLang = localStorage.getItem('lang');
    if (savedLang && savedLang !== 'en') {
        const select = document.getElementById('langSelect');
        if (select) {
            select.value = savedLang;
            setLanguage(savedLang); // AUTO TRANSLATE
        }
    }
}

// ✅ MAIN LANGUAGE CHANGER
function setLanguage(lang) {
    const select = document.getElementById('langSelect');
    if (select) select.value = lang;
    
    localStorage.setItem('lang', lang);

    if (lang === 'en') {
        resetToEnglish();
        return;
    }

    // Set cookie IMMEDIATELY
    document.cookie = `googtrans=/en/${lang}; path=/; max-age=31536000`;
    
    // Force immediate translation
    forceTranslate(lang);
}

function forceTranslate(lang) {
    // Method 1: Trigger Google dropdown (most reliable)
    setTimeout(() => {
        const selectors = [
            '.goog-te-combo',
            '#:0\\.target\\.lang',
            'select[name="lang"]',
            '#google_translate_element select'
        ];
        
        for (let selector of selectors) {
            const element = document.querySelector(selector);
            if (element) {
                element.value = lang;
                element.dispatchEvent(new Event('change', {bubbles: true}));
                hideGoogleBanner();
                return;
            }
        }
        
        // Method 2: Direct cookie reload (fallback)
        setTimeout(() => {
            if (confirm('Apply language? Page will refresh.')) {
                location.reload();
            }
        }, 500);
        
    }, 300);
}

function resetToEnglish() {
    document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
    localStorage.removeItem('lang');
    
    // Try to reset widget
    setTimeout(() => {
        const dropdown = document.querySelector('.goog-te-combo');
        if (dropdown) {
            dropdown.value = 'en';
            dropdown.dispatchEvent(new Event('change', {bubbles: true}));
        }
    }, 200);
}

function hideGoogleBanner() {
    setTimeout(() => {
        const banners = document.querySelectorAll('.goog-te-banner-frame, .goog-te-menu-frame, iframe[src*="googte"]');
        banners.forEach(banner => {
            banner.style.display = 'none';
            banner.style.height = '0';
        });
        document.body.style.top = '0px';
    }, 200);
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('lang');
    const select = document.getElementById('langSelect');
    if (select && savedLang) {
        select.value = savedLang;
    }
});
