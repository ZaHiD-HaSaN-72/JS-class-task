
var buton = document.querySelector('.btn')

var text = document.querySelector('p')
var value = 0

buton.addEventListener("click",function(){
   if(value == 0){
    text.style.display = 'block'
    buton.innerHTML = "Remove"
    value = 1
   }else{
     text.style.display = 'none'
     buton.innerHTML = "Click"
   }
})
 
