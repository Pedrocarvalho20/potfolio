// menu-hamburguer
const menuHamburguer = document.querySelector('.menu-hamburguer')
menuHamburguer.addEventListener('click', () =>{
    toggleMenu()
});

function toggleMenu(){
    const nav = document.querySelector ('.nav-responsivo');
    menuHamburguer.classList.toggle('charge');

    if(menuHamburguer.classList.contains('charge')){
        nav.style.display = 'block';
    } else{
        nav.style.display = 'none'
    }
}

document.getElementById('read-more-btn').addEventListener('click', function(event) {
    event.preventDefault();
    var moreText = document.getElementById('more-text');
    var readMoreBtn = document.getElementById('read-more-btn');

    if (moreText.style.display === 'none') {
        moreText.style.display = 'block';
        readMoreBtn.textContent = 'Read Less';
    } else {
        moreText.style.display = 'none';
        readMoreBtn.textContent = 'Read More';
    }
});
document.querySelectorAll('.read-more-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const serviceBox = btn.closest('.services-box');
        const shortText = serviceBox.querySelector('.short-text');
        const moreText = serviceBox.querySelector('.more-text');

        if (moreText.style.display === 'none') {
            moreText.style.display = 'block';
            shortText.style.display = 'none';
            btn.textContent = 'Read Less';
        } else {
            moreText.style.display = 'none';
            shortText.style.display = 'block';
            btn.textContent = 'Read More';
        }
    });
});