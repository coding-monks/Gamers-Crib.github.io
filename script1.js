//Homepage Event Slider
const slide1 = document.querySelector('#slide1');
const slide2 = document.querySelector('#slide2');
document.querySelector('#gameSliderButton1').addEventListener('click',function(){
    slide1.classList.toggle('hiddenContainer');
    slide2.classList.toggle('hiddenContainer');

})
// document.querySelector('#gameSliderButton2').addEventListener('click',function(){
//     slide1.style.opacity = "0";
//     slide1.style.transition = "0.5s";
// })
document.querySelector('#gameSliderButton2').addEventListener('click',function(){
    slide1.classList.toggle('hiddenContainer');
    slide2.classList.toggle('hiddenContainer');
})
slide1.addEventListener("drag",function(){
    slide1.classList.toggle('hiddenContainer');
    slide2.classList.toggle('hiddenContainer');
})


//Home page community channels
var count=1;
document.querySelector("#show_more1").addEventListener("click",function(){
    if(count==1){

        var x =document.querySelectorAll(".more2");
        for(var i=0;i<x.length;i++){
            x[i].classList.remove("hide");

        }
        document.querySelector("#show_more2").innerHTML='<img  src="Images/arrow2.png" class="arrow img-fluid">';
        count=0;
    }
    else{
        var y =document.querySelectorAll(".more2");
        for(var k=0;k<y.length;k++){
            y[k].classList.add("hide");

        }
        document.querySelector("#show_more2").innerHTML='<img  src="Images/arrow1.png" class="arrow img-fluid">';
        count=1;   
    }
});