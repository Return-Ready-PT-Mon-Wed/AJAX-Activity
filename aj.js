
// Generate XML HTTP request object

let request = new XMLHttpRequest();

// Create call back function

request.onreadystatechange = function () {
    if (request.readyState === 4) {
    let image = JSON.parse(request.responseText);
       console.log(request.responseText);
       document.getElementById('image1').src = image.message[0];
       document.getElementById('image2').src = image.message[1];
       document.getElementById('image3').src = image.message[2];
    }
};

// calling button function

function sendAJAX() {

// Open request by using GET method

request.open('GET', 'https://dog.ceo/api/breeds/image/random/3');

// Send request

    request.send();
}