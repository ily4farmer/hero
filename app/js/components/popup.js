
const popup = () => {
    const btn = document.querySelector('.pay__number'),
          arrow = document.querySelector('.pay__footer-btn'),
          list = document.querySelector('.pay__list');
    

    btn.addEventListener('click', ()=> {
        if (list.style.display == 'none') {
            list.style.display = 'block';
            arrow.classList.add("svg-top");
        } else {
            list.style.display = 'none';
            arrow.classList.remove("svg-top");
        }
    });
}

module.exports = popup;