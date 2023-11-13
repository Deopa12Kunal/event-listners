const heading= document.getElementById("heading");
const butoon = document.getElementById("mybtn");
const box1 = document.getElementById("box1");

mybtn.addEventListener("click",() =>{
    box1.classList.add("classfordiv");
    heading.style.backgroundColor="yellow";
    mybtn.style.transform ="scale(1.6)" ;
    });
// adding event in box1
box1.addEventListener("mouseover", ()=>{
  heading.style.backgroundColor="green";
  mybtn.style.transform = "scale(1.8)" ;
});

// adding prevent default  by passing a function
mybtn.addEventListener("contextmenu",(e)=>{
e.preventDefault();
mybtn.style.backgroundColor="GreenYellow";

});

box1.addEventListener("mouseout",() =>{
 
  heading.style.backgroundColor="coral" ;
  mybtn.style.transform =" ";
});
// adding night mode
box1.addEventListener("dblclick",()=>{
document.body.style.backgroundColor="black";
})
box1.addEventListener("click",()=>{
  document.body.style.backgroundColor ="";
})
