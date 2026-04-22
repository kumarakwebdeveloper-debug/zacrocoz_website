



document.addEventListener("DOMContentLoaded", function () {
            const el = document.querySelector(".sub-banner-title");

            if (el && !el.classList.contains("animate")) {
                setTimeout(() => {
                    el.classList.add("animate");
                }, 100);
            }
        });