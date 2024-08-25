let main = document.querySelector("#main");
let image =  document.querySelector("img");

main.addEventListener("mouseover" , (details)=>{
    image.style.top = 1-details.y*0.05 + "px";
    image.style,left = 1-details.x*0.05 +"px";
})