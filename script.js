function switchLevel(levelCode) {
    document.body.classList.remove('show-H', 'show-M', 'show-P');
    document.body.classList.add('show-' + levelCode);
    
    const buttons = document.querySelectorAll('.nav-btn');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }
    
    const activeButton = document.querySelector('[data-level="' + levelCode + '"]');
    if (activeButton) {
        activeButton.classList.add('active');
    }

    localStorage.setItem('nextStepLevel', levelCode);
}

// Заглушка для переключения языков (переводит интерфейс шапки)
function switchLang(langCode) {
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById('lang-' + langCode).classList.add('active');
    
    const subtitle = document.getElementById('site-subtitle');
    const btnH = document.getElementById('btn-H');
    const btnM = document.getElementById('btn-M');
    const btnP = document.getElementById('btn-P');
    
    if (langCode === 'en') {
        subtitle.innerText = "The Religion of Conscious Creation";
        btnH.innerText = "Direction";
        btnM.innerText = "Route";
        btnP.innerText = "Path";
    } else {
        subtitle.innerText = "Религия осознанного созидания";
        btnH.innerText = "Направление";
        btnM.innerText = "Маршрут";
        btnP.innerText = "Путь";
    }
}

window.addEventListener('DOMContentLoaded', function() {
    const savedLevel = localStorage.getItem('nextStepLevel') || 'H';
    switchLevel(savedLevel);
});
