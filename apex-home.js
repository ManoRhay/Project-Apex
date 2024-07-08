document.addEventListener("DOMContentLoaded", function() {
    const loading = document.getElementById('loading');
    const content = document.getElementById('content');

    // Simulação de um carregamento rápido
    setTimeout(function() {
        loading.style.display = 'none';
        content.style.display = 'block';
    }, 1000); // 1 segundo de tempo de carregamento
});
