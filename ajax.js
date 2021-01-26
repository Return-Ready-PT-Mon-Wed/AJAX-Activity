let request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
        document.getElementById('btn').innerHTML = request.responseText;
    }

}


function myFunction() {
    document.getElementById('btn').addEventListener("click", myFunction());

}

request.open('GET', 'https://dog.ceo/api/breeds/image/random');
request.send();