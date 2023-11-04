const botaoMenu = document.querySelector('.cabecalho__menu')
const menu = document.querySelector('.menu-lateral')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo');
})

// Dados que serão armazenados em LocalStorage
const dataFlag = {
    "ID": "",
    "name": ""
};

// Lista dos Botões 'Cotribua Agora'
const donateBtnList = document.querySelectorAll('.donate-button');

donateBtnList.forEach(item => {
    item.addEventListener('click', (e) => {
        const cardNameElement = item.parentNode.querySelector("#cardName");

        dataFlag.name = cardNameElement.childNodes[0].textContent;
        dataFlag.ID = cardNameElement.querySelector(".card-id").innerHTML;

        localStorage.setItem('dataFlag', JSON.stringify(dataFlag));
    })
})