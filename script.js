
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
     value = 0
   }
})
 
const myList = document.getElementById("myList");

myList.addEventListener("click", function (event) {
  // Check if the clicked element is an anchor (<a>) inside a list item (<li>).
  if (event.target.tagName === "A") {
    // Prevent the default behavior of the link.
    event.preventDefault();

    // Access the text content of the clicked link.
    const clickedText = event.target.textContent;
    
    // Perform some action based on the clicked link.
    console.log(`Clicked: ${clickedText}`);
  }
});
