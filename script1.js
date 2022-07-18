//jugad for changing slides
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