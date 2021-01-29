function dog() {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            var data = JSON.parse(xhr.responseText);
            document.getElementById("dogs").src = data.message;
            document.getElementById("dogs").alt = 'Random dog pics';
            console.log(xhr.responseText);

        }
    }
    xhr.open('GET', 'https://dog.ceo/api/breeds/image/random');
    xhr.send();

}

function myFunction() {
    document.getElementById('btn').addEventListener("click", myFunction());
}

function myFunction() {
    document.getElementById("dogs").src = "hackanm.gif";
}