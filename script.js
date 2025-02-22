// Controle da música
const musicButton = document.getElementById('musicButton');
const musicIcon = document.getElementById('musicIcon');
const backgroundMusic = document.getElementById('backgroundMusic');

let isPlaying = !backgroundMusic.paused;

updateMusicIcon();

musicButton.addEventListener('click', () => {
    if (isPlaying) {
        backgroundMusic.pause();
    } else {
        backgroundMusic.play().catch(error => {
            console.error("Erro ao reproduzir música:", error);
        });
    }
    isPlaying = !isPlaying;
    updateMusicIcon();
});

function updateMusicIcon() {
    if (isPlaying) {
        musicIcon.src = 'assets/speaker-icon.png';
        musicButton.classList.remove('muted');
    } else {
        musicIcon.src = 'assets/speaker-muted-icon.png';
        musicButton.classList.add('muted');
    }
}

// Contador de visitantes
async function updateVisitorCount() {
    try {
        await fetch('http://localhost:3000/api/visitors', { method: 'POST' });
        const response = await fetch('http://localhost:3000/api/visitors');
        const data = await response.json();
        document.getElementById('visitorCount').textContent = data.count;
    } catch (error) {
        console.error('Erro ao atualizar o contador de visitantes:', error);
    }
}

window.addEventListener('load', updateVisitorCount);