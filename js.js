let BGcolor= document.getElementById('rgb');
let headerColor= window.getComputedStyle(document.getElementById('header')).getPropertyValue("background-color")
BGcolor.textContent=headerColor;
let colorArrray =[];


//genrate colors
let box= document.getElementsByClassName('box');
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
let flage= false;
box =document.getElementsByClassName('box');
let state =document.getElementById('state');
Array.from(box).forEach(function(box){
box.addEventListener("click",function(){

  if(box.style.background!==BGcolor.textContent){
  box.style.visibility = "hidden";
  state.style.visibility="visible";
  state.textContent="Try Again!"
  }
  else{
    box.style.display="block";
    state.style.visibility="visible";
    state.textContent="Correct!";
    flage=true;

  }
});
});



//New game btn

let New = document.getElementById('new');
New.addEventListener("click",function(){
      
  //chech all box visiable
   box= document.getElementsByClassName('box');
   Array.from(box).forEach(function(box){
     box.style.visibility="visible";
     state.style.visibility="hidden";
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
//arrary to collect box BG
let nowbg =[];
Array.from(box).forEach(function(box){
let x =box.style.background;
nowbg.push(x);
});
//select color from collectec color
let randomItem = nowbg[Math.floor(Math.random()*nowbg.length)];
BGcolor.textContent=randomItem;

});

let easy = document.getElementById("easy");
let hard= document.getElementById("hard");
hard.addEventListener("click", function(){
  hard.classList.add("active");
  easy.classList.remove("active");
  hidden.classList.remove('hiden');
});

hidden =document.getElementById('hidden');
easy.addEventListener("click", function(){
  easy.classList.add("active");
  hidden.classList.add('hiden');
  hard.classList.remove("active");
});




