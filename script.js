// ================= GESTION DE LA VIDÉO D'INTRO =================
document.addEventListener('DOMContentLoaded', () => {
    const introVideo = document.getElementById('intro-video');
    
    if (introVideo) {
        introVideo.addEventListener('ended', endIntro);
    }
});

function endIntro() {
    const introOverlay = document.getElementById('intro-overlay');
    const introVideo = document.getElementById('intro-video');

    if (introOverlay && !introOverlay.classList.contains('fade-out')) {
        introOverlay.classList.add('fade-out');

        setTimeout(() => {
            if (introVideo) introVideo.pause();
            introOverlay.style.display = 'none';
        }, 1200); // Durée de la transition CSS
    }
}

// Fonction pour basculer d'une page à l'autre
function switchPage(pageId) {
    const pages = document.querySelectorAll('.page');
    
    pages.forEach(page => {
        page.classList.remove('active');
    });

    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        window.scrollTo(0, 0); // Remonte en haut de page à chaque changement
    }
}

// ================= GESTION DE LA MODALE PROJETS =================
const modal = document.getElementById('projectModal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalMiddleImg = document.getElementById('modalMiddleImg');

function openModal(title, description, mainImgSrc, posterImgSrc) {
    modalTitle.innerText = title;
    
    const formattedDesc = description
        .split('\n\n')
        .map(paragraph => `<p>${paragraph.replace(/\n/g, '<br>')}</p>`)
        .join('');
    modalDesc.innerHTML = formattedDesc;
    
    modalImg.src = posterImgSrc || mainImgSrc;
    
    if (modalMiddleImg) {
        modalMiddleImg.src = mainImgSrc;
    }
    
    if (modal) modal.style.display = 'flex';
}

function closeModalForce() {
    if (modal) modal.style.display = 'none';
}

function closeModal(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// ================= GESTION DE LA MODALE RÉALISATIONS (DIGITAL-SERVICE) =================
const realisationsModal = document.getElementById('realisationsModal');

function openRealisationsModal() {
    if (realisationsModal) {
        realisationsModal.style.display = 'flex';
    }
}

function closeRealisationsModalForce() {
    if (realisationsModal) {
        realisationsModal.style.display = 'none';
    }
}

function closeRealisationsModal(event) {
    if (event.target === realisationsModal) {
        realisationsModal.style.display = 'none';
    }
}
