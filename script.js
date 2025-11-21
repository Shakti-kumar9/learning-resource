
        // Create floating particles
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 60;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 15 + 's';
                particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
                particlesContainer.appendChild(particle);
            }
        }
        
        // Glitch effect for cards
        function addGlitchEffect() {
            const cards = document.querySelectorAll('.course-card, .project-card');
            
            cards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.animation = 'glitch-skew 0.3s infinite';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.animation = 'none';
                });
            });
        }
        
        // Animate skill bars on scroll
        function animateSkills() {
            const skillBars = document.querySelectorAll('.skill-progress');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const width = entry.target.getAttribute('data-width');
                        entry.target.style.width = width;
                    }
                });
            }, { threshold: 0.5 });
            
            skillBars.forEach(bar => observer.observe(bar));
        }
        
        // Smooth scrolling for navigation links
        function smoothScroll() {
            const links = document.querySelectorAll('a[href^="#"]');
            
            links.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
        }
        
        // Add hover sound effect (visual feedback)
        function addHoverEffects() {
            const buttons = document.querySelectorAll('.cyber-btn');
            
            buttons.forEach(button => {
                button.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-5px) scale(1.05)';
                });
                
                button.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) scale(1)';
                });
            });
        }
        
        // Add loading animation to external links
        function addLoadingAnimation() {
            const externalLinks = document.querySelectorAll('a[target="_blank"]');
            
            externalLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    const originalText = this.textContent;
                    this.innerHTML = '<span class="loading"></span> Loading...';
                