document.addEventListener('DOMContentLoaded', () => {

    const contactForm = document.querySelector('#contacto form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const name = document.querySelector('#name').value;
            const email = document.querySelector('#email').value;
            const message = document.querySelector('#message').value;
            
            if (name === '' || email === '' || message === '') {
                e.preventDefault(); 
                alert('Por favor, completa todos los campos.');
            
            } else if (!validateEmail(email)) {
                e.preventDefault(); 
                alert('Por favor, introduce un correo electrónico válido.');
            }
        });
    }

    
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        return re.test(email); 
    }

});    




