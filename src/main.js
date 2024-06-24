document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(data) {
            const dataID = data.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${dataID}]`)

            escondeAbas();
            aba.classList.add('shows__list--is-active');
            
            removeBotaoAtivo();
            data.target.classList.add('shows__tabs__buttons--is-active');
        })
    }
})

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__buttons--is-active');
    }
}

function escondeAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]')

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}