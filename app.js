const ApiHttps = "https://dog.ceo/api/breeds/image/random/3";
const btn = document.querySelector(".btn");
const randomPupElement = document.querySelector(".card-group");

async function getRandomPup() {
  randomPupElement.innerHTML = "";
  const response = await fetch(ApiHttps); // resolve promise
  const json = await response.json(); // parse into json
  console.log(json.message);

  // foreach iterates over the message array
  json.message.forEach((bitcoinPupImage) => {
    // create template literal for Dom Elements
    randomPupElement.innerHTML += `
        <div class="card">
            <div class ="card-img-top">
                <img src="${bitcoinPupImage}">
                    <div class="card-body">
                    </div>
            </div>
        </div>
        `;

    //  function generateCards(json) {
    //    const container = document.createElement("container");
    //    randomPupList.appendChild(container); // create template literal
    //    container.innerHTML = `

    //      `;
    //  }
  });
}
//button activates the function
btn.addEventListener("click", getRandomPup);
