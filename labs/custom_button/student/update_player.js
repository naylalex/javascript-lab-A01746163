const para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
    const name = prompt('Ingresa el nuevo nombre: ');
    para.textContent = `Drummer 1: ${name}`;
}