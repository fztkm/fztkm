function setLanguage(lang) {
    document.querySelectorAll('.lang').forEach(function (el) {
        el.style.display = 'none';
    });
    document.getElementById(lang).style.display = 'block';
}

window.onload = function() {
    setLanguage('en'); // Default language
};
