function ShowHiddenContent() {
    const element = document.querySelector('.text-side-hidden-content');
    const button = document.querySelector('.btn-holder button');
    const svg = button.querySelector('svg');

    if (element) {
        if (element.style.height === '130px' && element.style.opacity === '1') {
            element.style.height = '0';
            element.style.opacity = '0';
            button.innerHTML = `
                ادامه
                <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1.20957 0C0.900423 0 0.586675 0.120242 0.352104 0.354814C-0.117368 0.824285 -0.117368 1.60061 0.352104 2.07008L9.13736 10.8553C9.36405 11.082 9.68404 11.2101 9.99483 11.2101C10.3027 11.2101 10.6095 11.0981 10.8523 10.8553L19.6254 2.08158C20.1169 1.619 20.1231 0.824285 19.6537 0.354814C19.1842 -0.114657 18.4079 -0.114657 17.9384 0.354814L17.9381 0.355142L10.0103 8.29837L2.06671 0.354814C1.83181 0.119914 1.51839 0 1.20957 0Z" />
                </svg>
            `;
        } else {
            element.style.height = '130px';
            element.style.opacity = '1';
            button.innerHTML = `
                بستن
                <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform: rotate(180deg);">
                    <path
                        d="M1.20957 0C0.900423 0 0.586675 0.120242 0.352104 0.354814C-0.117368 0.824285 -0.117368 1.60061 0.352104 2.07008L9.13736 10.8553C9.36405 11.082 9.68404 11.2101 9.99483 11.2101C10.3027 11.2101 10.6095 11.0981 10.8523 10.8553L19.6254 2.08158C20.1169 1.619 20.1231 0.824285 19.6537 0.354814C19.1842 -0.114657 18.4079 -0.114657 17.9384 0.354814L17.9381 0.355142L10.0103 8.29837L2.06671 0.354814C1.83181 0.119914 1.51839 0 1.20957 0Z" />
                </svg>
            `;
        }
    }
}

function ShowHiddenText() {
    const element = document.querySelector('.hidden-text-with-background');
    const button = document.querySelector('.text-btn-holder button');
    const svg = button.querySelector('svg');

    if (element) {
        if (element.style.height === '315px' && element.style.opacity === '1') {
            element.style.height = '0';
            element.style.opacity = '0';

            button.innerHTML = `
                موارد بیشتر
                <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1.20957 0C0.900423 0 0.586675 0.120242 0.352104 0.354814C-0.117368 0.824285 -0.117368 1.60061 0.352104 2.07008L9.13736 10.8553C9.36405 11.082 9.68404 11.2101 9.99483 11.2101C10.3027 11.2101 10.6095 11.0981 10.8523 10.8553L19.6254 2.08158C20.1169 1.619 20.1231 0.824285 19.6537 0.354814C19.1842 -0.114657 18.4079 -0.114657 17.9384 0.354814L17.9381 0.355142L10.0103 8.29837L2.06671 0.354814C1.83181 0.119914 1.51839 0 1.20957 0Z" />
                </svg>`;
        } else {
            element.style.height = '315px';
            element.style.opacity = '1';

            button.innerHTML = `
                کمتر
                <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform: rotate(180deg);">
                    <path
                        d="M1.20957 0C0.900423 0 0.586675 0.120242 0.352104 0.354814C-0.117368 0.824285 -0.117368 1.60061 0.352104 2.07008L9.13736 10.8553C9.36405 11.082 9.68404 11.2101 9.99483 11.2101C10.3027 11.2101 10.6095 11.0981 10.8523 10.8553L19.6254 2.08158C20.1169 1.619 20.1231 0.824285 19.6537 0.354814C19.1842 -0.114657 18.4079 -0.114657 17.9384 0.354814L17.9381 0.355142L10.0103 8.29837L2.06671 0.354814C1.83181 0.119914 1.51839 0 1.20957 0Z" />
                </svg>`;
        }
    }
}
////////////////////// Slider //////////////////////
document.addEventListener("DOMContentLoaded", function () {
    const sliderContainer = document.querySelector(".slider-btn");
    const slides = document.querySelectorAll(".slider-slide");
    const totalSlides = slides.length;

    const prevButton = document.createElement("button");
    const nextButton = document.createElement("button");

    prevButton.innerHTML = `
        <svg width="35" height="20" viewBox="0 0 35 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.11675 19.6177C1.57574 19.6177 1.02668 19.4073 0.616181 18.9968C-0.205394 18.1752 -0.205394 16.8166 0.616181 15.995L15.9904 0.62084C16.3871 0.224138 16.9471 -8.58307e-05 17.4909 -8.58307e-05C18.0297 -8.58307e-05 18.5666 0.195967 18.9915 0.62084L34.3444 15.9749C35.2045 16.7844 35.2155 18.1752 34.3939 18.9968C33.8709 19.5197 33.1304 19.7098 32.4493 19.567C32.3049 19.6002 32.1545 19.6177 32 19.6177H2.5C2.43589 19.6177 2.37249 19.6147 2.30993 19.6088C2.24558 19.6147 2.18111 19.6177 2.11675 19.6177Z" fill="#DC3E43"/>
        </svg>
    `;

    nextButton.innerHTML = `
<svg width="35" height="20" viewBox="0 0 35 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.11646 0C1.57544 0 1.02661 0.210449 0.615967 0.621094C-0.205322 1.44238 -0.205322 2.80127 0.615967 3.62256L15.9905 18.9971C16.387 19.3936 16.947 19.6177 17.491 19.6177C18.0295 19.6177 18.5667 19.4219 18.9915 18.9971L34.3445 3.64258C35.2043 2.8335 35.2156 1.44238 34.3938 0.621094C33.8708 0.0981445 33.1301 -0.0922852 32.449 0.0507812C32.3049 0.0175781 32.1545 0 31.9998 0H2.49976C2.43579 0 2.37231 0.00292969 2.30981 0.00878906C2.24536 0.00292969 2.18091 0 2.11646 0Z" fill="#DC3E43"/>
</svg>

    `;

    prevButton.classList.add("slider-prev-btn");
    nextButton.classList.add("slider-next-btn");

    sliderContainer.appendChild(prevButton);
    sliderContainer.appendChild(nextButton);

    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, idx) => {
            slide.style.display = idx === index ? "flex" : "none";
        });
    }

    prevButton.addEventListener("click", function () {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    });

    nextButton.addEventListener("click", function () {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    });

    showSlide(currentSlide);
});

////////////////////// mobile contact //////////////////////
function OpenContactUs() {
    const modal = document.getElementById("Mobile-contactUs-modal");
    if (modal.classList.contains("active-mobile-contact")) {
        modal.classList.remove("active-mobile-contact");
    } else {
        modal.classList.add("active-mobile-contact");
    }
}

