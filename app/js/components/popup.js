const popup = () => {
    let toogleDown = (item) => {
        const ch = item.clientHeight,
            sh = item.scrollHeight,
            isCollapsed = !ch,
            noHeightSet = !item.style.height;

        item.style.height = (isCollapsed || noHeightSet ? sh : 0) + "px";
        item.toggleAttribute('aria-selected');
    }

    let item = document.querySelector('[data-toggle-more]');

    item.addEventListener('click', (e) => {
        e.preventDefault();
        let toggleInfo = document.querySelector('[data-toggle-show]');
        item.toggleAttribute('aria-selected');
        toogleDown(toggleInfo);
    });
}

module.exports = popup;