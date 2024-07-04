document.addEventListener("DOMContentLoaded", function () {
    AOS.init();
    
    const markdownInput = document.getElementById("markdown-input");
    const markdownPreview = document.getElementById("markdown-preview");

    markdownInput.addEventListener("input", function () {
        const markdownText = markdownInput.value;
        markdownPreview.innerHTML = marked(markdownText);
    });
});
