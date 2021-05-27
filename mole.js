function whack(){
const box = document.querySelectorAll(".box");
const score = document.querySelector('#scoreid');
const timeleft = document.querySelector('#timeleftid');
const mole = document.querySelector('.mole');
let result = 0;
let currenttime = timeleft.textContent;
let hitpoint = null;
let timerid = null;


function randomSquare(){
    box.forEach(box =>{
        box.classList.remove('mole')
    })
    let randomBox = box[Math.floor(Math.random() * 9)];
    randomBox.classList.add('mole');
    hitpoint = randomBox.id;
}
box.forEach(box => {
    box.addEventListener('mousedown', () =>{
        if(box.id == hitpoint){
            result++;
            score.textContent = result;
            hitpoint = null;

        }
         
    })
})
moveMole = () =>{
    timerid = setInterval(randomSquare,1000)
}
moveMole();
countdown = () =>{
    timeleft.textContent = currenttime;
    currenttime--;
    timeleft.textContent = currenttime;
    if(currenttime == 0){
        clearInterval(countDownTimerId);
        clearInterval(timerid);
        score.textContent = 0;
        timeleft.textContent = 60;

    
    alert('Game is over! Your Final Score is ' + result);
    }
}
let countDownTimerId = setInterval(countdown,1000)
}