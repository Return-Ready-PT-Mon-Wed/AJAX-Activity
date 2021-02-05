
function getDogs() {
    //STEP 1 - CREATE an object
    var xmlhttprequest = new XMLHttpRequest();

    //STEP 2 - DEFINE a callback function
    xmlhttprequest.onreadystatechange = function () {
        if (xmlhttprequest.readyState === 4 && xmlhttprequest.status === 200) {
        
            let data = JSON.parse(xmlhttprequest.responseText); //store the parsed JSON responseText in data object/variable
            console.log(data.message); 
            document.getElementById("img1").src = data.message; //inserts the parsed message in data inside <img> in html

        }
    };
    //STEP 3 - OPEN a request
    xmlhttprequest.open('GET', 'https://dog.ceo/api/breeds/image/random');
    //STEP 4 - SEND the request
    xmlhttprequest.send();

}

//javascript return value from callback function