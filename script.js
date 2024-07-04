function updatePreview() {
    const markdownInput = document.getElementById('markdown-input').value;
    const markdownPreview = document.getElementById('markdown-preview');
    markdownPreview.innerHTML = marked(markdownInput);
}
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}

modeToggle.addEventListener('click', toggleDarkMode);
