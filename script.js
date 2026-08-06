// Fonction pour basculer d'une page à l'autre en douceur
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

// Gestion de la modale pour le "Picture Wallet" des projets
const modal = document.getElementById('projectModal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');

function openModal(title, description, imgSrc) {
    modalTitle.innerText = title;
    modalDesc.innerText = description;
    modalImg.src = imgSrc;
    modal.style.display = 'flex';
}

function closeModalForce() {
    modal.style.display = 'none';
}

function closeModal(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
