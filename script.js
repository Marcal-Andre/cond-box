const cards = document.querySelectorAll('.card');
const modal = document.getElementById('modal');
const modalContent = document.querySelector('.modal-content');
const close = document.querySelector('.close');

cards.forEach(card => {
    card.addEventListener('click', () => {
        const target = card.dataset.target;
        // Aqui você faria uma requisição para buscar os dados do target específico
        // e preencher o modalContent com esses dados

        modal.style.display = 'block';
    });
});

close.onclick = () => {
    modal.style.display = 'none';
}