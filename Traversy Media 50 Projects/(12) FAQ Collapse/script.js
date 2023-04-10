const toggleBtns = document.querySelectorAll('.faq-toggle')

toggleBtns.forEach(button => {
    button.addEventListener('click', () => {
        button.parentNode.classList.toggle('active');
    });
});