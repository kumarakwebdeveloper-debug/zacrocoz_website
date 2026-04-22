const translations = {
    en: {
        home: "Home",
        about: "About Us",
        tokenomics: "Tokenomics & Allocation",
        explore: "Explore",
        security: "Security",
        ecosystem: "Ecosystem Utility",
        tech: "Technology & Architecture",
        governance: "Governance Model",
        roadmap: "Roadmap",
        faq: "FAQ",
        community: "Community & Connect",
        manifesto: "ZRZ Manifesto",
        risk: "Risk Disclosure",
        utility: "Utility Clarification",
        contact: "Contact Us"
    },

    hi: {
        home: "होम",
        about: "हमारे बारे में",
        tokenomics: "टोकनोमिक्स और आवंटन",
        explore: "एक्सप्लोर",
        security: "सुरक्षा",
        ecosystem: "इकोसिस्टम उपयोगिता",
        tech: "टेक्नोलॉजी और आर्किटेक्चर",
        governance: "गवर्नेंस मॉडल",
        roadmap: "रोडमैप",
        faq: "FAQ",
        community: "समुदाय और कनेक्ट",
        manifesto: "ZRZ मैनिफेस्टो",
        risk: "जोखिम खुलासा",
        utility: "यूटिलिटी स्पष्टीकरण",
        contact: "संपर्क करें"
    },

    te: {
        home: "హోమ్",
        about: "మా గురించి",
        tokenomics: "టోకెనామిక్స్ & అలొకేషన్",
        explore: "ఎక్స్‌ప్లోర్",
        security: "సెక్యూరిటీ",
        ecosystem: "ఎకోసిస్టమ్ యుటిలిటీ",
        tech: "టెక్నాలజీ & ఆర్కిటెక్చర్",
        governance: "గవర్నెన్స్ మోడల్",
        roadmap: "రోడ్‌మ్యాప్",
        faq: "FAQ",
        community: "కమ్యూనిటీ & కనెక్ట్",
        manifesto: "ZRZ మానిఫెస్టో",
        risk: "రిస్క్ డిస్క్లోజర్",
        utility: "యుటిలిటీ క్లారిఫికేషన్",
        contact: "సంప్రదించండి"
    }
};

// APPLY LANGUAGE
function applyLanguage(lang) {
    document.querySelectorAll("[data-translate]").forEach(el => {
        const key = el.getAttribute("data-translate");

        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}

// LOAD + SWITCH
document.addEventListener("DOMContentLoaded", () => {

    const savedLang = localStorage.getItem("lang") || "en";
    applyLanguage(savedLang);

    const switcher = document.getElementById("lang-switch");

    if (switcher) {
        switcher.value = savedLang;

        switcher.addEventListener("change", function () {
            const lang = this.value;

            localStorage.setItem("lang", lang);
            applyLanguage(lang);
        });
    }
});