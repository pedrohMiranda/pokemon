const mainCards = []

const bulbasaur = {
    image: "./img/pokemon.png",
    id: "#001",
    title: "Bulbasaur",
    atribute: "Grass",
    atribute_2: "Poison"
}

const nOfCards = 3 * 4;

for (i = 0; i < nOfCards; i++) {
    mainCards.push(bulbasaur);
}

function display(mainCards) {
    for (i = 0; i < mainCards.length; i++) {
        let card = document.createElement('div');
        card.classList.add("card");
        card.innerHTML = 
        `
        <img src="${mainCards[i].image}" class="card-image">
        <div>
            <p class="card-title">${mainCards[i].title}</p>
            <div class="card-features">
                <p class="card-atributes" > ${mainCards[i].atribute}</p>
                <p class="card-atributes" > ${mainCards[i].atribute_2}</p>
            </div>
        <p class="card-id">${mainCards[i].id}</p>
        </div>
        `
        document.querySelector('main').appendChild(card)
    }
}

display(mainCards);