const ApiHttps = "https://dog.ceo/api/breeds/image/random/3";

async function getRandomPup() {
  randomPups.innerHTML = "";
  const response = await fetch(ApiHttps); // resolve promise
  const json = await response.json(); // parse into json
  console.log(json.message);
}

getRandomPup();
