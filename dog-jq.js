//completed using jquery
$(document).ready(function(){
    $('#buttonclick').on('click','button',function(){
        $.ajax('https://dog.ceo/api/breeds/image/random/3',{
            success: function(response){
                for (let i=0; i<3; i++) {
                    $('#buttonclick').append(`<img src=${response.message[i]}>`)
                }
            }
        })
    })
});