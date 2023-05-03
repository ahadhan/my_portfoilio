
let butnHide = document.getElementById("butn");
let barBlock = document.getElementById("bar");
let barCss  = document.getElementById("barCss");
let barJs = document.getElementById("barJs");
console.log(barBlock);

function changeClass(){
    butnHide.style.display = "none";
    console.log(barBlock);

    if(butnHide.style.display = "none"){
       setInterval(function(){
        // barBlock.style.idName = "bar";
         barBlock.style.width = "70%";
         barBlock.innerText = "HTML " + " 90%"  ;

         barCss.style.width = "65%";
         barCss.innerText = "CSS " + " 80%";

         barJs.style.width = "50%";
         barJs.innerText = "JavaScript " + " 60%";
        
       }, 500);
    }
}
