# project related to DOM

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code

## Project 1 Code

```javascript
console.log("harhsit")

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
  console.log(buttons);
  button.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.target);
    if ((e.target.id === 'grey')) {
      body.style.backgroundColor = e.target.id;
    }else if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id;
    }else if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id;
    }else if(e.target.id === 'purple'){
      body.style.backgroundColor = e.target.id;
    }else{
        body.style.backgroundColor = e.target.id;
      }
  });
});


```

## Project 2 Code

``` javascript
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseFloat(document.querySelector('#height').value);
  const weight = parseFloat(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (isNaN(height) || height <= 0) {
    results.innerHTML = `Please give a valid height: ${height}`;
  } else if (isNaN(weight) || weight <= 0) {
    results.innerHTML = `Please give a valid weight: ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
```
## Project 3 Code

``` javascript
const clock = document.querySelector('#clock')


let date = new Date();
console.log(date.toLocaleTimeString());

setInterval( ()=>{
  let date = new Date();
clock.innerHTML = date.toLocaleTimeString();
},1000)

```

## Project 4 Code

``` javascript
let randomNumber = console.log(parseInt(Math.random()* 100 +1));

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult');
const lowOrHi =document.querySelector('.lowOrHi')
const startOver =document.querySelector('.resultParas')

const p =document.createElement('p')

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault()
    const guess =(userInput.value)
    console.log(guess);
    validateGuess(guess)
  })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('please enter a ')
  }else if(guess <1){
    alert('please enter a valid number')
  }else if(guess > 100){
    alert('please enter a valid number')
  }else{
    prevGuess.push(guess)
    if(numGuess === 11){
      displayGuess(guess)
      displayMessage(`Game Over. Random NUmber was ${randomNumber}`)
      endGame()
    }else {
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage(`you guessed it right`);
    endGame()
  }else if(guess < randomNumber){
    displayMessage(`Number is too low`);
  }else if(guess > randomNumber){
    displayMessage(`Number is too heigh`);
  }
}
function displayGuess(guess){
  userInput.value =''
  guessSlot.innerHTML += `${guess} `
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML =`<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p)
    playGame = false
    newGame();
}

function newGame(){
  const newGameButton= document.querySelector('#newGame')
  newGameButton.addEventListener('click',function(e){
    randomNumber = parseInt(Math.random()* 100 +1);
    prevGuess=[]
    numGuess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true
  })
}

```