const circle = document.querySelector('.circle');
        const skillsStrip = document.getElementById('skills-strip');
        const skillLogos = document.querySelectorAll('.skill-logo');

        document.addEventListener('mousemove', (event) => {
            const mouseX = event.clientX;
            const mouseY = event.clientY;
            const circleRect = circle.getBoundingClientRect();
            
            const circleCenterX = circleRect.left + circleRect.width / 2;
            const circleCenterY = circleRect.top + circleRect.height / 2;

            const deltaX = (mouseX - circleCenterX) * 0.1; // Controls how much the circle moves
            const deltaY = (mouseY - circleCenterY) * 0.1;

            // Apply 3D effect and move the circle
            circle.style.transform = `translate3d(${deltaX}px, ${deltaY}px, 0) rotateX(${deltaY}deg) rotateY(${deltaX}deg)`;
        });

        // Function to reset the position of the strip for seamless scrolling
        const resetStrip = () => {
            const firstLogo = skillLogos[0];
            const lastLogo = skillLogos[skillLogos.length - 1];
            
            const firstLogoPosition = firstLogo.getBoundingClientRect();
            const lastLogoPosition = lastLogo.getBoundingClientRect();

            if (lastLogoPosition.right <= 0) {
                skillsStrip.appendChild(firstLogo);
            }

            if (firstLogoPosition.left >= window.innerWidth) {
                skillsStrip.prepend(lastLogo);
            }
        };

        setInterval(resetStrip, 10);