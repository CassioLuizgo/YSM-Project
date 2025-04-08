//*Carrossel index/seção hero*//

const images = document.querySelectorAll(".hero img");
const textSpans = document.querySelectorAll(".text_banner a");
const textBanner = document.querySelector(".text_banner");

// Garante que a primeira imagem esteja visível no carregamento da página
images[0].classList.add("active");

textSpans.forEach((span, index) => {
    span.addEventListener("mouseenter", () => {
        // Remove a classe 'active' de todas as imagens
        images.forEach(img => img.classList.remove("active"));

        // Ativa a imagem correspondente ao texto
        images[index].classList.add("active");
    });
});

// Evento para voltar à primeira imagem quando o mouse sair da área do texto
textBanner.addEventListener("mouseleave", () => {
    images.forEach(img => img.classList.remove("active"));
    images[0].classList.add("active");
});