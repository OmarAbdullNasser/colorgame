let box= document.getElementsByClassName('box');
let easy = document.getElementById("easy");
let hard= document.getElementById("hard");

let BGcolor= document.getElementById('rgb');
let headerColor= window.getComputedStyle(document.getElementById('header')).getPropertyValue("background-color")
BGcolor.textContent=headerColor;
let colorArrray =[];




//genrate colors
Array.from(box).forEach(function(box){
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + ", " + y + ", " + z + ")";
    colorArrray.push(bgColor);
    box.style.background = bgColor;
});



//select value from arrary
let randomItem = colorArrray[Math.floor(Math.random()*colorArrray.length)];
BGcolor.textContent=randomItem;


//disaepper of fales squer
  let state =document.getElementById('state');
  Array.from(box).forEach(function(box){
  box.addEventListener("click",function(){
    if(box.style.background!==BGcolor.textContent){
    box.style.visibility = "hidden";
    state.style.visibility="visible";
    state.textContent="Try Again!"
    }
    else{
      Array.from(box).forEach(function(box){
        box.style.visibility="visible";
        box.style.background=BGcolor.textContent;
      });
      box.style.display="block";
      state.style.visibility="visible";
      state.textContent="Correct!";  

     }
   });
  });



  //New game btn

  let New = document.getElementById('new');

  New.addEventListener("click",function(){  
  //check all box visiable
   Array.from(box).forEach(function(box){
     box.style.visibility="visible";
     state.style.visibility="hidden";
     colorArrray=[];
   });
   
   //generate new colors
   Array.from(box).forEach(function(box){
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + ", " + y + ", " + z + ")";
    colorArrray.push(bgColor);
    box.style.background = bgColor;
   });

   let randomItem = colorArrray[Math.floor(Math.random()*colorArrray.length)];
    BGcolor.textContent=randomItem;

  });

  let game= document.getElementsByClassName('game');
  hard.addEventListener("click", function(){
    hard.classList.add("active");
    easy.classList.remove("active");
    for( let i=0;i<3;i++){
    let newDiv = document.createElement("div");
    newDiv.classList.add('box');
    game.insertAdjacentElement("beforeend",newDiv)
  }
  });

  hidden =document.getElementsByClassName('hidden');
  easy.addEventListener("click", function(){
    easy.classList.add("active");
    hard.classList.remove("active");
    Array.from(hidden).forEach(function(hidden){
      hidden.remove();
    });
    console.log(box.length);
  });




