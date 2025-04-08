const modal = document.getElementById("modal");
const btn = document.getElementById("registerBtn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Открытие вкладок
function openTab(evt, tabName) {
    const tabcontent = document.getElementsByClassName("tabcontent");
    
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    const tablinks = document.getElementsByClassName("tablink");
    
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Обработка формы обратной связи
document.getElementById("contactForm").onsubmit = function(event) {
    event.preventDefault();
    
    // Здесь можно добавить код для обработки формы
    alert("Форма отправлена!");
};
