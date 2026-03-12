let slideIndex = 0;
showSlides();
function showSlides() {
    let slides = document.querySelectorAll('.slide');
    slides.forEach(s => s.style.display = 'none');
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;
    slides[slideIndex - 1].style.display = 'flex';
    setTimeout(showSlides, 3000);
}

document.querySelector(".primary").onclick = () => {
alert("Botão principal clicado!");
}

document.querySelector(".secondary").onclick = () => {
alert("Abrir página de informações.");
}