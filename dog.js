const xhr = new XMLHttpRequest();

xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
        const response = JSON.parse(xhr.responseText);
        const img = `<img src="${response.message}">`;
        document.getElementById('dog-div').innerHTML = img;
    }
    
};

xhr.open('GET', 'https://dog.ceo/api/breeds/image/random');
const revealBtn = document.getElementById('revealBtn');
function sendAJAX() {
    xhr.send();
}
