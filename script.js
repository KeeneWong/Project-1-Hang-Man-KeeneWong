let wordToGuess = "nth";
let dangerScore = 0;
let playerstatus = '2player';
const getplayStage = document.querySelector('.playStage');
const getinputStage = document.querySelector('.inputStage');
const getGuessBtn = document.querySelector('.guess');
const getinput = document.querySelector('.input');
const getuserinput = document.querySelector('.userinput');
const getguessArea = document.querySelector('#guessArea');
const getkitchen = document.querySelector('.kitchen');

//database----------------------------------------------------------------




















//==============================================================================


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
    document.querySelector('.dangerScore').innerText = `Finally~`;

    

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
        // console.log(wordToGuess.includes(typeletter))
        }


    // if the player guess the right word-------------
    if(wordToGuess.includes(typeletter)===true){
        // console.log(arrayIndexOfwordToGuess);
        //replace all the _ with right letter index
        arrayIndexOfwordToGuess.forEach(index=>{
            guessAreaArray[index] = typeletter;
            // getguessArea.innerText[index] = typeletter;
            // console.log(getguessArea.innerText[index]);
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
;        dangerScore ++;
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
    let guessAreaArray = getguessArea.innerText.split('');
    if(guessAreaArray[0]=='_'){

    guessAreaArray[0] = wordToGuess[0]
    console.log(guessAreaArray)
    getguessArea.innerText = guessAreaArray.join().replace(/,/g,'');
    document.querySelector('.hints').classList.add('hintsclicked');
        
}  
})

//choose player page ------------------------------------------------

//Play button
document.querySelector('.playButton').addEventListener('click',function(){
    document.querySelector('.playerselect').classList.toggle('hidden');
    if(playerstatus == '1player'){
        // document.querySelector('.bottom-main').classList.toggle('hidden');
        // document.querySelector('.inputStage').classList.toggle('hidden');
        // document.querySelector('.playStage').classList.toggle('hidden');

    }
    if(playerstatus == '2player'){
    document.querySelector('.bottom-main').classList.toggle('hidden');
    }
})

//choose player button
document.querySelectorAll('.playerBtn').forEach(btn=>{
    btn.addEventListener('click',function(){
        // this.classList.toggle('lightblue');
        playerstatus = this.getAttribute('data-playselect');
        document.querySelector('.playerstatus').innerText = this.innerText;
        console.log(playerstatus)
    })
})


// addEventListener('click',function(){
//     console.log(this)
// })