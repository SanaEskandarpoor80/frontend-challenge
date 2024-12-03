document.querySelectorAll('.progress-bar').forEach(bar => {
    const value = bar.getAttribute('data-value');
    const span = bar.querySelector('span');
    span.style.setProperty('--value', `${value}%`);
});