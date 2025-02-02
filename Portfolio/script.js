// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Typing Animation for Header
const typingText = ["Web Developer", "Designer", "Innovator"];
let index = 0, charIndex = 0;
const typingSpeed = 150;
const erasingSpeed = 100;
const delayBetweenWords = 2000;

const typingElement = document.querySelector("#home h2:nth-of-type(2)");

function type() {
    if (charIndex < typingText[index].length) {
        typingElement.textContent += typingText[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, delayBetweenWords);
    }
}

function erase() {
    if (charIndex > 0) {
        typingElement.textContent = typingText[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        index = (index + 1) % typingText.length;
        setTimeout(type, typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, 1000); // Start typing after page loads
});

// Scroll Triggered Animation for Portfolio Projects
const projects = document.querySelectorAll('.project');

const revealProjects = () => {
    projects.forEach(project => {
        const projectPosition = project.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (projectPosition < screenPosition) {
            project.classList.add('active');
        } else {
            project.classList.remove('active');
        }
    });
};

window.addEventListener('scroll', revealProjects);

// Back to Top Button
const backToTop = document.createElement('button');
backToTop.textContent = "↑";
backToTop.className = "back-to-top";
document.body.appendChild(backToTop);

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});
