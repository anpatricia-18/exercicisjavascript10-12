//Quant facis click damunt del cuadre la caixa ha de desapareixer i quant tornis ha d’apareixer. 
// També el text del botó ha de canviar amb “Ocultar caja”/”Mostrar Caja”:
//Heu de buscar la propietat per fer visible un element
//I per anar intercanvia, aquell mateix element haureu de preguntar si és visible o no, 
// i fer el contrari.

// Selecciona el botó i la caixa
const button = document.querySelector('#toggleButton');
const box = document.querySelector('#box');

// Afegeix un eventListener al botó
button.addEventListener('click', () => {
    // Comprova si la caixa és visible (style.display !== 'none')
    if (box.style.display === 'none') {
        box.style.display = 'block'; // Fa visible la caixa
        button.textContent = 'Ocultar caja'; // Canvia el text del botó
    } else {
        box.style.display = 'none'; // Amaga la caixa
        button.textContent = 'Mostrar caja'; // Canvia el text del botó
    }
});
