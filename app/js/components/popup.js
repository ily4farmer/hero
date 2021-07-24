
const popup = () => {
    const btn = document.querySelectorAll('.pay__footer-btn'),
         list = document.querySelector('.pay__list');
    
    btn[1].style.display = 'none';
    list.style.display = 'none';
    // 
    btn[0].addEventListener('click', ()=> {
        list.style.display = 'block';
        btn[0].style.display = 'none';
        btn[1].style.display = 'block';
    });

    btn[1].addEventListener('click', ()=> {
        list.style.display = 'none';
        btn[0].style.display = 'block';
        btn[1].style.display = 'none';
    });
}

module.exports = popup;