document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('carouselExample');
    const textContainer = document.getElementById('carousel-text');

    carousel.addEventListener('slide.bs.carousel', function (event) {
        const nextSlide = event.relatedTarget; // Próximo slide que será exibido
        const newText = nextSlide.getAttribute('data-text'); // Texto associado ao slide
        textContainer.innerHTML = newText; // Atualiza o texto dinamicamente
    });
});