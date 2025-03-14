const light = document.getElementById('light');

document.addEventListener('mousemove', (e) => {
    requestAnimationFrame(() => {
        const lightSize = 500;  // The size of the light effect
        // The light will be centered based on mouse position
        light.style.left = `${e.clientX - lightSize / 2 + 275}px`;
        light.style.top = `${e.clientY - lightSize / 2 + 250}px`;
    });
});

// === Smooth Hover Effects for Sections ===
const nameElement = document.querySelector('.name');
const descriptionElement = document.querySelector('.description');
const cvElement = document.querySelector('.cv');

nameElement.addEventListener('mouseover', () => {
    nameElement.style.transform = 'scale(1.1)';
    nameElement.style.textShadow = '0 0 30px rgba(0, 191, 255, 1)';
});

nameElement.addEventListener('mouseout', () => {
    nameElement.style.transform = 'scale(1)';
    nameElement.style.textShadow = '0 0 15px rgba(0, 191, 255, 0.8)';
});

descriptionElement.addEventListener('mouseover', () => {
    descriptionElement.style.color = '#00bfff';
});

descriptionElement.addEventListener('mouseout', () => {
    descriptionElement.style.color = '#ccc';
});

cvElement.addEventListener('mouseover', () => {
    cvElement.style.transform = 'translateY(-5px)';
    cvElement.style.boxShadow = '0 8px 40px rgba(0, 191, 255, 0.6)';
});

cvElement.addEventListener('mouseout', () => {
    cvElement.style.transform = 'translateY(0)';
    cvElement.style.boxShadow = '0 4px 20px rgba(0, 191, 255, 0.3)';
});

document.addEventListener("DOMContentLoaded", () => {
    const projects = document.querySelectorAll(".project");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.2 });

    projects.forEach(project => {
        project.style.opacity = 0;
        project.style.transform = "translateY(20px)";
        observer.observe(project);
    });
});