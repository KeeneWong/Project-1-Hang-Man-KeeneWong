let wordToGuess = "";
const getGuessBtn = document.querySelector('.guess');

getGuessBtn.addEventListener('click',function(){
    let blankLine = [];
    wordToGuess = document.querySelector('.input').value;
    // console.log(wordToGuess);
    wordToGuessArray = wordToGuess.split("");
    wordToGuessArray.forEach(letter=>{
        blankLine.push('_');
    });
    // console.log(blankLine);
    
    document.getElementById('guessArea').innerText = '';

})

