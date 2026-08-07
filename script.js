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

// Récupération de l'image centrale dans le DOM
const modalMiddleImg = document.getElementById('modalMiddleImg');

function openModal(title, description, mainImgSrc, posterImgSrc) {
    modalTitle.innerText = title;
    
    // Formate le texte avec des paragraphes
    const formattedDesc = description
        .split('\n\n')
        .map(paragraph => `<p>${paragraph.replace(/\n/g, '<br>')}</p>`)
        .join('');
    modalDesc.innerHTML = formattedDesc;
    
    // Image A4 à gauche
    modalImg.src = posterImgSrc || mainImgSrc;
    
    // Image centrale (projet1.png ou projet2.png)
    if (modalMiddleImg) {
        modalMiddleImg.src = mainImgSrc;
    }
    
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
