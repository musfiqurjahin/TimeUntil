window.addEventListener('resize', () => {
    const iframe = document.querySelector('iframe');
    iframe.style.width = `${window.innerWidth}px`;
    iframe.style.height = `${window.innerHeight}px`;
});