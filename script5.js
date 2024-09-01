document.addEventListener('DOMContentLoaded', () => {
  
  document.getElementById('venta-link').addEventListener('click', function(e) {
      e.preventDefault();
      const targetUrl = this.getAttribute('href');
    
      document.body.style.transition = 'opacity 1s';
      document.body.style.opacity = 0;

      setTimeout(() => {
        window.location.href = targetUrl;
      }, 1000);
    });

    document.getElementById('Arreglar-link').addEventListener('click', function(e) {
      e.preventDefault();
      const targetUrl = this.getAttribute('href');
    
      document.body.style.transition = 'opacity 0.5s';
      document.body.style.opacity = 0;

      setTimeout(() => {
        window.location.href = targetUrl;
      }, 500);
    });

        const stars = document.querySelectorAll('.star-rating span');
        let selectedRating = 0;

        stars.forEach(star => {
            star.addEventListener('mouseover', () => {
                const value = star.getAttribute('data-value');
                stars.forEach(s => {
                    if (s.getAttribute('data-value') <= value) {
                        s.style.color = 'gold';
                    } else {
                        s.style.color = '#ccc';
                    }
                });
            });

            star.addEventListener('mouseout', () => {
                stars.forEach(s => {
                    if (s.getAttribute('data-value') <= selectedRating) {
                        s.style.color = 'gold';
                    } else {
                        s.style.color = '#ccc';
                    }
                });
            });

            star.addEventListener('click', () => {
                const value = star.getAttribute('data-value');
                if (selectedRating == value) {
                    selectedRating = 0;
                } else {
                    selectedRating = value;
                }
                stars.forEach(s => {
                    if (s.getAttribute('data-value') <= selectedRating) {
                        s.style.color = 'gold';
                    } else {
                        s.style.color = '#ccc';
                    }
                });
            });
        });
    });