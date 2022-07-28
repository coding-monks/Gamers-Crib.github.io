 // Explore page
const gameTitle = document.querySelector('#gameTitle');
const comTitle = document.querySelector('#communityTitle');
const trailerTitle = document.querySelector('#trailerTitle');
const gameContainer = document.querySelector('#games');
const communityContainer = document.querySelector('#community');
const trailerContainer = document.querySelector('#trailers');


trailerTitle.addEventListener('click',function(){
    trailerContainer.classList.remove('hiddenItem');
    trailerTitle.classList.add('titleGlow');
    gameContainer.classList.add('hiddenItem');
    gameTitle.classList.remove('titleGlow');
    communityContainer.classList.add('hiddenItem');
    comTitle.classList.remove('titleGlow');
})
gameTitle.addEventListener('click',function(){
    gameContainer.classList.remove('hiddenItem');
    gameTitle.classList.add('titleGlow');
    trailerContainer.classList.add('hiddenItem');
    trailerTitle.classList.remove('titleGlow');
    communityContainer.classList.add('hiddenItem');
    comTitle.classList.remove('titleGlow');
})
comTitle.addEventListener('click',function(){
    communityContainer.classList.remove('hiddenItem');
    comTitle.classList.add('titleGlow');
    gameContainer.classList.add('hiddenItem');
    gameTitle.classList.remove('titleGlow');
    trailerContainer.classList.add('hiddenItem');
    trailerTitle.classList.remove('titleGlow');
})

//Game Category Selection

const selectionButton = document.querySelectorAll('.filterContent');
const gameContent = document.querySelectorAll('#games .detail');
let currentDisplay = gameContent[0];
let currentButton = selectionButton[1];

for(let i = 1;i <= 6;i++){
    selectionButton[i].addEventListener('click',function(){
        currentButton.classList.remove('selectedOption');
        this.classList.add('selectedOption');
        currentButton = this;
        currentDisplay.classList.add('hiddenItem');
        gameContent[i-1].classList.remove('hiddenItem');
        currentDisplay = gameContent[i-1];
        window.scrollTo(0,0);
        })
}
// selectionButton.forEach(button => {
//         button.addEventListener('click',function(){
//         currentButton.classList.remove('selectedOption');
//         this.classList.add('selectedOption');
//         currentButton = button;
//         currentContentDisplay.classList.add('hiddenItem');
//         gameContent[i-1].classList.remove('hiddenItem');
//         currentContentDisplay = gameContent[i-1];
//         alert(selectionButton.indexOf(button));
//         })
// })
