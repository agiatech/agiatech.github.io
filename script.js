document.addEventListener('DOMContentLoaded', function() {

    // 1. Inicializar AOS (Animate on Scroll)
    AOS.init({
        duration: 1000, // Duración de la animación en ms
        once: true,     // La animación solo ocurre una vez
        offset: 50,     // Desfase para disparar la animación
    });

    // 2. Inicializar Typed.js (Efecto de Escritura)
    const options = {
        strings: ["Inteligencia Artificial.", "Automatizaciones a tu Medida.", "Agentes de Voz con IA.", "Chatbots Inteligentes.", "Agia Tech." ],
        typeSpeed: 50,  // Velocidad de escritura
        backSpeed: 30,  // Velocidad de borrado
        backDelay: 2000, // Pausa antes de borrar
        loop: true      // Repetir el ciclo
    };

    const typed = new Typed('.typing-effect', options);

});