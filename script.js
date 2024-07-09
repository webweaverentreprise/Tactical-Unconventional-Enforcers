// script.js

// Animation pour le header
const header = document.querySelector('header');
header.addEventListener('mouseover', function() {
    header.style.backgroundColor = '#2f0100';
    header.style.transition = 'background-color 0.3s ease';
});
header.addEventListener('mouseout', function() {
    header.style.backgroundColor = '#000';
});

// Animation pour les sections
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    section.addEventListener('mouseover', function() {
        section.style.backgroundColor = '#f0f0f0';
        section.style.transition = 'background-color 0.3s ease';
    });
    section.addEventListener('mouseout', function() {
        section.style.backgroundColor = '#fff';
    });
});
