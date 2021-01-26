var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
    var image = JSON.parse(xhr.responseText);
       console.log(xhr.responseText);
       document.getElementById('image1').src = image.message[0];
       document.getElementById('image2').src = image.message[1];
       document.getElementById('image3').src = image.message[2];
    }
};
function sendAJAX() {
}
xhr.open('GET', 'https://dog.ceo/api/breeds/image/random/3');

xhr.send();

