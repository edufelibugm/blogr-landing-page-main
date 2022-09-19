document.querySelector('.product').addEventListener('click', () => {
    //Add styles
    document.querySelector('.desplegable-one').classList.toggle('hidden');

    //Remove styles
    document.querySelector('.desplegable-two').classList.add('hidden');
    document.querySelector('.desplegable-three').classList.add('hidden');
});

document.querySelector('.company').addEventListener('click', () => {
    //Add styles
    document.querySelector('.desplegable-two').classList.toggle('hidden');

    //Remove styles
    document.querySelector('.desplegable-one').classList.add('hidden');
    document.querySelector('.desplegable-three').classList.add('hidden');
});

document.querySelector('.connect').addEventListener('click', () => {
    //Add styles
    document.querySelector('.desplegable-three').classList.toggle('hidden');

    //Remove styles
    document.querySelector('.desplegable-one').classList.add('hidden');
    document.querySelector('.desplegable-two').classList.add('hidden');
});

document.getElementById('menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-bar').classList.toggle('desktop');
})