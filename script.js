let wordToGuess = "nth";
let dangerScore = 0;
const getplayStage = document.querySelector('.playStage');
const getinputStage = document.querySelector('.inputStage');
const getGuessBtn = document.querySelector('.guess');
const getinput = document.querySelector('.input');
const getuserinput = document.querySelector('.userinput');
const getguessArea = document.querySelector('#guessArea');
const getkitchen = document.querySelector('.kitchen');


//create the word to guess and the blankline--------------------
getGuessBtn.addEventListener('click',function(){
    let blankLine = [];
    wordToGuess = getinput.value;
    // console.log(wordToGuess);
    wordToGuessArray = wordToGuess.split("");
    wordToGuessArray.forEach(letter=>{
        blankLine.push('_');
    });
    // console.log(blankLine);
    
    // To get the ID guessArea and put the blank line in it
    document.getElementById('guessArea').innerText = blankLine.join().replace(/,/g,"");
    getkitchen.classList.toggle('statusStart');
    getplayStage.classList.toggle('hidden');
    getinputStage.classList.toggle('hidden');

})





// keyboard function and guess----------------------------------------


const keyboards = document.querySelectorAll('.letter');

keyboards.forEach(function(key){
    key.addEventListener('click',function(event){
        
    let typeletter = key.getAttribute('data-letter');
    let guessAreaArray = getguessArea.innerText.split('');
    
    
    
    let indexOfWordToGuess = wordToGuess.indexOf(typeletter);
    let arrayIndexOfwordToGuess = [];

    // generate an  array for the index of wordToGuess So that i can replace the letter 
    // with all the index i got----------------------
        for(i = 0; i < wordToGuess.length; i++){
        if (wordToGuess[i] === typeletter)
        arrayIndexOfwordToGuess.push(i);
        // console.log(arrayIndexOfwordToGuess);
        }


    // if the player guess the right word-------------
    if(wordToGuess.includes(typeletter)===true){

        //replace all the _ with right letter index
        arrayIndexOfwordToGuess.forEach(index=>{
            guessAreaArray[index] = typeletter;
            })

        getguessArea.innerText = guessAreaArray.join().replace(/,/g,"");
    // console.log(guessAreaArray);
    
        if(getguessArea.innerText==wordToGuess){
            getkitchen.classList.toggle('statusWin');
            document.querySelector('.dangerScore').innerText = `Best Father Ever`
            document.querySelector('.right-GamingPage').classList.toggle('hidden');
            document.querySelector('.winnerPage').classList.toggle('hidden');
            }
    
        
    }

    


    else{
        dangerScore ++;
        document.querySelector('.dangerScore').innerText = `Danger Score: ${dangerScore}`;
        getkitchen.classList.toggle(`status${dangerScore}`);

        if(dangerScore==5){
            document.querySelector('.right-GamingPage').classList.toggle('hidden');
            document.querySelector('.gameoverPage').classList.toggle('hidden');
        }
    }

    })

})


// reset button--------------------------------------------
document.querySelectorAll('.resetBtn').forEach(btn=>{
    btn.addEventListener('click',function(){
        window.location.reload();
    })

})

//hints button----------------------------------------------------
document.querySelector('.hints').addEventListener('click',function(){
    getguessArea.innerText[0]
})
