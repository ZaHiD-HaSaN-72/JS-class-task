      
        
    

let arr = [
    {
    dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkNwJ4JdapYZIPBaPX-FyJdBhGNBig-_MX_myNAqQ1&s", story:"https://images.unsplash.com/photo-1695681675989-7b03f0dfffd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"},
    {
    dp:"https://images.unsplash.com/photo-1695681675989-7b03f0dfffd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60", story:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80"},
    {
    dp:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80", story:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"},
    {
    dp:"https://plus.unsplash.com/premium_photo-1671641797308-26be77d80a2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80", story:"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"}
];

let clutter = ''

arr.forEach(function(elem,idx){
    clutter += `<div id="bg-img" class=" h-20 w-20  rounded-full border-2 border-black m-3 inline-block"><img id="${idx}" src="${elem.dp}" alt=""></div>`
});

document.getElementById('scoll-bar').innerHTML = clutter;
document.getElementById('scoll-bar').addEventListener('click',function(dets){
document.querySelector(".full").style.display="block";
document.querySelector(".full").style.backgroundImage = `url(${arr[dets.target.id].story})`

setTimeout(function(){
    document.querySelector(".full").style.display="none";
},3000)
});

