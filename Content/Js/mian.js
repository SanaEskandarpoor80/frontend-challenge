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

