// Aguarda o HTML da página carregar completamente antes de rodar o código
d/**
 * main.js
 * Este arquivo controla as funcionalidades interativas do site.
 */

// Adiciona um "ouvinte" que espera todo o HTML da página ser carregado
// para então executar o código que está dentro dele. Isso evita erros.
document.addEventListener("DOMContentLoaded", function() {

    // --- PARTE 1: LÓGICA PARA O MENU ATIVO ---

    // Pega todos os links que estão dentro da navegação com a classe ".menu"
    const menuLinks = document.querySelectorAll('.menu a');
    
    // Pega a URL completa da página que o usuário está visitando agora
    // Ex: "http://127.0.0.1:5500/formacao.html"
    const currentPageUrl = window.location.href;

    // Passa por cada link do menu, um de cada vez
    menuLinks.forEach(link => {
        // Compara a URL do link com a URL da página atual
        if (link.href === currentPageUrl) {
            // Se forem iguais, adiciona a classe "active" àquele link
            link.classList.add('active');
        }
    });


    // --- PARTE 2: LÓGICA PARA A ANIMAÇÃO DE ENTRADA ---

    // Procura pelo elemento principal que tem a classe para animar
    const animatedElement = document.querySelector('.fade-in-up');
    
    // Verifica se o elemento foi encontrado na página
    if (animatedElement) {
        // Adiciona a classe "visible", o que dispara a animação definida no CSS
        animatedElement.classList.add('visible');
    }

});