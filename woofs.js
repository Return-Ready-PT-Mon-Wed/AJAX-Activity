const dogLink = 'https://dog.ceo/api/breeds/image/random/3';

let button = document.querySelector('button');

const image = document.getElementById('dogImage1')
const image1 = document.getElementById('dogImage2')
const image2 = document.getElementById('dogImage3')

const docs = document.querySelector('#woofs');

button.addEventListener('click', sendAJAX);

function play(){
    var audio = new Audio('media/sound1.mp3');
    audio.play();
}

function sendAJAX() {
    fetch(dogLink).then(res => res.json()).then(({message})=>{
      image.innerHTML = `<img src=${message[0]}>`;
      image1.innerHTML = `<img src=${message[1]}>`;
      image2.innerHTML = `<img src=${message[2]}>`;
  }
 )
};
