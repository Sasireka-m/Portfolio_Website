
// Sidebar toggle functionality
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('mainContent');

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar-open');
    mainContent.classList.toggle('ml-64');
});

// Close sidebar when clicking on a link (for mobile)
const navLinks = document.querySelectorAll('#sidebar a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 768) {
            sidebar.classList.remove('sidebar-open');
            mainContent.classList.remove('ml-64');
        }
    });
});

// Animate sections when they come into view
const animateOnScroll = () => {
    const sections = document.querySelectorAll('.animate-section');

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.75) {
            section.classList.add('animated');
        }
    });
};

// Initialize animations
window.addEventListener('load', () => {
    animateOnScroll();
});

window.addEventListener('scroll', animateOnScroll);