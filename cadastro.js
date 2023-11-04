const storedOngFlag = JSON.parse(localStorage.getItem('dataFlag'));

const inputOngName = document.querySelector("#input-name");
const inputOngId = document.querySelector("#input-id");

// Preenche os dados da Instituição
if (storedOngFlag.name) {
    inputOngName.value = storedOngFlag.name;
    inputOngId.value = storedOngFlag.ID;
    
    localStorage.setItem('dataFlag', JSON.stringify(storedOngFlag))
}


// Valida os dados para adicionar ou remover o ID
const ongsList = [
    {
        "name": "Buriti Doações",
        "ID": "401"
    },
    {
        "name": "Lar Jesus Menino",
        "ID": "403"
    },
    {
        "name": "Terra Livre",
        "ID": "404"
    },
    {
        "name": "Abrigo Comendador Walmor",
        "ID": "302"
    },
    {
        "name": "OSBM",
        "ID": "500"
    }
]

inputOngName.addEventListener('keydown', (e) => {
    if (e.target.value) {
        inputOngId.value = "";
    }

    ongsList.forEach(elem => {
        if (e.target.value == elem.name) {
            inputOngId.value = elem.ID;
        }
    })
})