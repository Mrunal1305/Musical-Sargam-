document.querySelectorAll('.key').forEach(key => {
    // Play sound on mouse enter
    key.addEventListener('mouseenter', () => {
        const sound = key.getAttribute('data-sound');
        playSound(sound);
        
        // Add visual effects
        key.style.transform = 'scale(1.1)';
        key.style.border = '2px solid #000';
        key.style.fontSize = '28px';
    });

    // Reset visual effects on mouse leave
    key.addEventListener('mouseleave', () => {
        key.style.transform = 'scale(1)';
        key.style.border = '2px solid #ccc';
        key.style.fontSize = '24px';
    });
});

function playSound(sound) {
    const audio = new Audio(sound);
    audio.play();
}