//completed using vanilla js
function createImg() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            const response = JSON.parse(xhr.responseText);
            let img;
            for (let i=0; i<3; i++) {
                img = `<img src="${response.message[i]}">`;
                document.getElementById('dog-div').innerHTML = img + document.getElementById('dog-div').innerHTML;
            }
        }
        console.log(xhr);
        console.log(response.message);
    };
    
    xhr.open('GET', 'https://dog.ceo/api/breeds/image/random/3');
    xhr.send();
}

function sendAJAX() {
    createImg();
}