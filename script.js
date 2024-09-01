document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); 
            if (this.getAttribute('href') === 'venta.html') {
                window.location.href = 'venta.html'; // Redirige a venta.html
            } else {
                const targetId = this.getAttribute('href').substring(1); 
                const targetElement = document.getElementById(targetId); 
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop, 
                        behavior: 'smooth' 
                    });
                }
            }
        });
    });


document.getElementById('venta-link').addEventListener('click', function(e) {
    e.preventDefault();
    const targetUrl = this.getAttribute('href');
    
    document.body.style.transition = 'opacity 1s';
    document.body.style.opacity = 0;

    setTimeout(() => {
        window.location.href = targetUrl;
    }, 1000);
});
});
    
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

    
    const servicesSection = document.querySelector('#servicios');
    if (servicesSection) {
        const hardwareServices = [
            { name: 'Reparación de Pantallas', description: 'Reemplazo de pantallas rotas o dañadas con piezas de alta calidad.' },
            { name: 'Cambio de Baterías', description: 'Sustitución de baterías agotadas para mejorar la duración de tu dispositivo.' },
            { name: 'Reparación de Puertos de Carga', description: 'Solución de problemas con puertos de carga defectuosos o dañados.' },
            { name: 'Reparación de Botones', description: 'Arreglo de botones de encendido, volumen y otros que no respondan.' },
            { name: 'Reparación de Cámaras', description: 'Solución de problemas con cámaras frontales y traseras.' },
            { name: 'Reparación de Altavoces y Micrófonos', description: 'Arreglo de problemas de sonido y grabación.' }
        ];

        const softwareServices = [
            { name: 'Actualización de Software', description: 'Instalación de las últimas actualizaciones de sistema operativo y aplicaciones.' },
            { name: 'Eliminación de Virus y Malware', description: 'Limpieza de dispositivos infectados para asegurar su correcto funcionamiento.' },
            { name: 'Recuperación de Datos', description: 'Recuperación de datos perdidos o eliminados accidentalmente.' },
            { name: 'Configuración de Aplicaciones', description: 'Instalación y configuración de aplicaciones según tus necesidades.' },
            { name: 'Desbloqueo de Dispositivos', description: 'Desbloqueo de dispositivos para su uso con cualquier operador.' }
        ];

        const hardwareList = servicesSection.querySelector('ul:nth-of-type(1)');
        const softwareList = servicesSection.querySelector('ul:nth-of-type(2)');

        
        hardwareList.innerHTML = '';
        softwareList.innerHTML = '';

        hardwareServices.forEach(service => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${service.name}:</strong> ${service.description}`;
            hardwareList.appendChild(listItem);
        });

        softwareServices.forEach(service => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${service.name}:</strong> ${service.description}`;
            softwareList.appendChild(listItem);
        });
    }




