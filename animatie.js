const knop = document.getElementById('knop');
let vlak1 = document.querySelector('.vlak1');
let vlak2 = document.querySelector('.vlak2');
let vlak3 = document.querySelector('.vlak3');


const schuif = () => {
    vlak1.classList.toggle('vlak1--schuif-uit');
    vlak2.classList.toggle('vlak2--schuif-uit');
    vlak3.classList.toggle('vlak3--schuif-uit');
}

knop.addEventListener('click', schuif);