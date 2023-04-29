const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list")

arrows.forEach((arrow,i) => {
    const itemNumber = movieLists[i].querySelectorAll("img").length;
    let clickCounter = 0;
   arrow.addEventListener("click",()=>{
    const ratio = Math.floor(window.innerWidth/310);
    clickCounter++;
     if(itemNumber-(4+clickCounter) + 4- ratio >= 0){
         movieLists[i].style.transform=`translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value-340}px)`;
     } else {
         movieLists[i].style.transform = "translate(0)"
         clickCounter=0;
     }
   })
});


// theme change to bright
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container,.movie-list-title,.navbar-container,.sidebar,.sidebar-menu,.toggle,.movie-list-item-title,.movie-list-item-desc");

ball.addEventListener("click",()=>{
    items.forEach(item=>{
        item.classList.toggle("active");
    })
    ball.classList.toggle("active");
})


// RESPONSIVE 


