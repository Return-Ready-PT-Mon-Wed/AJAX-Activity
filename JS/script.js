
function getDogs() {
    let xmlhttprequest = new XMLHttpRequest();     //CREATE an object

    xmlhttprequest.onreadystatechange = function () { //DEFINE a callback function
        if (xmlhttprequest.readyState === 4 && xmlhttprequest.status === 200) {
        
        let data = JSON.parse(xmlhttprequest.responseText); //store the parsed JSON responseText in data object/variable
        console.log(data.message); //display result of AJAX request in console
            
        document.getElementById("img1").src = data.message[0]; //inserts parsed message in data inside <img> in html
        document.getElementById("img2").src = data.message[1];
        document.getElementById("img3").src = data.message[2];
        
        }
    };
    
    xmlhttprequest.open('GET', 'https://dog.ceo/api/breeds/image/random/3'); //opens a request
    
    xmlhttprequest.send(); //sends request

}



