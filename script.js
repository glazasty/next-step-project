function switchLevel(levelCode) {
    document.body.classList.remove('show-H', 'show-M', 'show-P');
    document.body.classList.add('show-' + levelCode);
    
    const levelButtons = document.querySelectorAll('[data-level]');
    for (let i = 0; i < levelButtons.length; i++) {
        levelButtons[i].classList.remove('active');
    }
    
    const activeButton = document.querySelector('[data-level="' + levelCode + '"]');
    if (activeButton) {
        activeButton.classList.add('active');
    }

    localStorage.setItem('nextStepLevel', levelCode);
}

function switchLang(langCode) {
    document.getElementById('lang-ru').classList.remove('active');
    document.getElementById('lang-en').classList.remove('active');
    document.getElementById('lang-' + langCode).classList.add('active');
    
    const subtitle = document.getElementById('site-subtitle');
    const btnH = document.getElementById('btn-H');
    const btnM = document.getElementById('btn-M');
    const btnP = document.getElementById('btn-P');
    const titleB = document.getElementById('title-B');
    const titleR = document.getElementById('title-R');
    
    if (langCode === 'en') {
        subtitle.innerText = "— religion of conscious creation";
        btnH.innerText = "direction";
        btnM.innerText = "route";
        btnP.innerText = "path";
        titleB.innerText = "basis";
        titleR.innerText = "relief";
    } else {
        subtitle.innerText = "— религия осознанного созидания";
        btnH.innerText = "направление";
        btnM.innerText = "маршрут";
        btnP.innerText = "путь";
        titleB.innerText = "базис";
        titleR.innerText = "разгрузка";
    }
}

window.addEventListener('DOMContentLoaded', function() {
    const savedLevel = localStorage.getItem('nextStepLevel') || 'H';
    switchLevel(savedLevel);
});
