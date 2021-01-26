const ApiHttps = "https://dog.ceo/api/breeds/image/random/3";
const btn = document.querySelector('.btn');
const randomPupElement = document.querySelector('.card-group');

async function getRandomPup() {
    randomPupElement.innerHTML = "";
    const response = await fetch(ApiHttps); // resolve promise
    const json = await response.json(); // parse into json
    console.log(json.message);

    json.message.foreach(bitcoinPupImage => {
        randomPupElement.innerHTML += `
        <div class="card">
            <img src="${bitcoinPupImage}" class="card-img-top">
                <div class="card-body">
        </div>
                </div>

        `;
        //  function generateCards(json) {
        //    const container = document.createElement("container");
        //    randomPupList.appendChild(container); // create template literal
        //    container.innerHTML = `

        //      `;
        //  }
    }),

    btn.addEventListener('click', getRandomPup);