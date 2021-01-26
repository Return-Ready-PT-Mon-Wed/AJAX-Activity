function loadDoc() {
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
       // document.getElementById("dogpic").innerHTML = this.responseText;
       var img = JSON.parse(xhr.responseText);
       document.getElementById("dogpic").src=img.message;
       document.getElementById("dogpic2").src=img.message;
       document.getElementById("dogpic3").src=img.message;
    }
};
xhr.open('GET', 'https://dog.ceo/api/breeds/image/random');
xhr.send();
}