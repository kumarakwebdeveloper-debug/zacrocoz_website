        function googleTranslateElementInit() {
            new google.translate.TranslateElement({
                pageLanguage: 'en',
                autoDisplay: false
            }, 'google_translate_element');
        }

        function setLanguage(lang) {

            // ENGLISH → delete cookie + reload
            if (lang === "en") {
                document.cookie = "googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
                document.cookie = "googtrans=; domain=" + location.hostname + "; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
                localStorage.removeItem("lang");
                location.reload();
                return;
            }

            localStorage.setItem("lang", lang);

            const interval = setInterval(() => {
                let select = document.querySelector(".goog-te-combo");

                if (select) {
                    select.value = lang; // use zh-CN for Chinese
                    select.dispatchEvent(new Event("change"));
                    clearInterval(interval);

                    setTimeout(() => {
                        const banner = document.querySelector(".goog-te-banner-frame");
                        if (banner) banner.style.display = "none";
                        document.body.style.top = "0px";
                    }, 100);
                }
            }, 200);
        }

        // ONLY set dropdown value (no auto translate)
        document.addEventListener("DOMContentLoaded", () => {
            const savedLang = localStorage.getItem("lang");
            const dropdown = document.querySelector(".lang-box select");
            if (dropdown && savedLang) {
                dropdown.value = savedLang;
            }
        });