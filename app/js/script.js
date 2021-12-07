/* BURGER MENU */
const menuBtn = document.querySelector('#menuBtn');
const header = document.querySelector('nav');

menuBtn.addEventListener('click', function(){
    console.log('open menu');
    if(header.classList.contains('open')) {
        header.classList.remove('open');
    }
    else {
        header.classList.add('open');
    }
});
