document.querySelectorAll('.title').forEach(item => {
    item.addEventListener('click', () => {
        const content = item.querySelector('.content');
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});
