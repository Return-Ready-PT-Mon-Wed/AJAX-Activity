function dog() {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            let image = JSON.parse(xhr.responseText);
            console.log(xhr.responseText);
            document.getElementById("dogs1").src = image.message[0];
            document.getElementById("dogs2").src = image.message[1];
            document.getElementById("dogs3").src = image.message[2];

        }
    }
    xhr.open('GET', 'https://dog.ceo/api/breeds/image/random/3');
    xhr.send();

}

//function myFunction() {
//document.getElementById('btn').addEventListener("click", myFunction());
//}

//function myFunction() {
//document.getElementById("dogs").src = "hackanm.gif";
//}
//document.getElementById("dogs").src = data.message;
//document.getElementById("dogs").alt = 'Random dog pics';