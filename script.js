let wordToGuess = "nth";
let dangerScore = 0;
const getplayStage = document.querySelector('.playStage');
const getinputStage = document.querySelector('.inputStage');
const getGuessBtn = document.querySelector('.guess');
const getinput = document.querySelector('.input');
const getuserinput = document.querySelector('.userinput');
const getguessArea = document.querySelector('#guessArea');


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

    getplayStage.classList.toggle('hidden');
    getinputStage.classList.toggle('hidden');

})

















// keyboard function and guess----------------------------------------

const keyboards = document.querySelectorAll('.letter');

keyboards.forEach(function(key){
    key.addEventListener('click',function(event){
        
    let typeletter = key.getAttribute('data-letter');
    console.log(typeletter);
    let guessAreaArray = getguessArea.innerText.split('');
    // console.log(guessAreaArray)


    if(wordToGuess.includes(typeletter)===true){
    guessAreaArray[wordToGuess.indexOf(typeletter)] = typeletter;
    getguessArea.innerText = guessAreaArray.join().replace(/,/g,"");
    
    console.log(guessAreaArray);
        if(getguessArea.innerText==wordToGuess){
        alert(`You got the right word!!!`)}
    }



    else{
        dangerScore ++;
        document.querySelector('.dangerScore').innerText = `Danger Score: ${dangerScore}`;

        if(dangerScore==10){
            document.querySelector('.right-GamingPage').classList.toggle('hidden');
            document.querySelector('.gameoverPage').classList.toggle('hidden');
        }
    }




    })

    // if(getguessArea.innerText===wordToGuess){
    //     alert(`That's the right word!!`)
    // }
})