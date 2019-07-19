
//variables------------------------------------------------------------------------------------------------------------------------

let wordToGuess = "nth";
let dangerScore = 0;
let playerstatus = '1player';
let category = 'player input';
let count = 30;

const getplayStage = document.querySelector('.playStage');
const getinputStage = document.querySelector('.inputStage');
const getGuessBtn = document.querySelectorAll('.guess');
const getinput = document.querySelector('.input');
const getuserinput = document.querySelector('.userinput');
const getguessArea = document.querySelector('#guessArea');
const getkitchen = document.querySelector('.kitchen');

//database------------------------------------------------------------------------------------------------------------------------

let foodDatabase = {
    fruit: ['apple','kiwi','lime','mango','apricot','avocado','banana','cranberry','grapefruit','grapes'],

    bakery: ['biscuit','bun','buttercream','hazelnut','vanilla',
             'cracker','pie','cookie','sandwich','doughnut','pancake','biscuit','cupcake','toast'],

    meat: ['beef','lamb','pork','ribs','oxtail','bacon','chicken','steak','ham','veal']
}

//==============================================================================



//choose player page ----------------------------------------------------------------------------------------------------------------

//Play button
document.querySelector('.playButton').addEventListener('click',function(){
    document.querySelector('.playerselect').classList.toggle('hidden');
    if(playerstatus == '1player'){
        document.querySelector('.databaseSelect').classList.toggle('hidden');
        clicksound.play();
        backgroundsong.play();
        
    }
    if(playerstatus == '2player'){
        document.querySelector('.bottom-main').classList.toggle('hidden');
        clicksound.play();
        backgroundsong.play();
    }
})

//choose player button
document.querySelectorAll('.playerBtn').forEach(btn=>{
    btn.addEventListener('click',function(){
        // this.classList.toggle('lightblue');
        playerstatus = this.getAttribute('data-playselect');
        document.querySelector('.playerstatus').innerText = this.innerText;
        console.log(playerstatus)
        clicksound.play();
    })
})


// //catergory buttons ---------------------------------------------------------------------------------------------------------------
document.querySelectorAll('.databaseBtn').forEach(function(btn){
    btn.addEventListener('click',function(){
        category = this.getAttribute('data-category');
        console.log(category)
        document.querySelector('.categoryselected').innerText = category;
        clicksound.play();
    })
})



//create the word to guess and the blankline------------------------------------------------------------------------------------------
getGuessBtn.forEach(function(guessB){
    guessB.addEventListener('click',function(){
        let blankLine = [];
    
        if(playerstatus == '1player'){
            
            if(category == 'player input'){
                alert('You have to choose a category !!')
            }
            else{
            wordToGuess = foodDatabase[category][(Math.floor((Math.random() * foodDatabase[category].length)))];
            console.log(wordToGuess);
            document.querySelector('.databaseSelect').classList.toggle('hidden');
            document.querySelector('.bottom-main').classList.toggle('hidden');
            document.querySelector('.inputStage').classList.toggle('hidden');
            document.querySelector('.playStage').classList.toggle('hidden');
            document.querySelector('.categorydisplay').innerText = `Category is ${category}`;
            countdown();
            cookingsound.play();
            }
    
    
    
        }
    
        if(playerstatus == '2player'){
        wordToGuess = getinput.value;
        console.log(`njn`)
        getplayStage.classList.toggle('hidden');
        getinputStage.classList.toggle('hidden');
        clicksound.play();
        cookingsound.play();
        countdown();
        }
    
        // console.log(wordToGuess);
        wordToGuessArray = wordToGuess.split("");
        wordToGuessArray.forEach(letter=>{
            blankLine.push('_');
        });
        // console.log(blankLine);
        
        // To get the ID guessArea and put the blank line in it
        document.getElementById('guessArea').innerText = blankLine.join().replace(/,/g,"");
        getkitchen.classList.toggle('statusStart');
        document.querySelector('.dangerScore').innerText = `Finally~`;
    
        
    
    })



})



// keyboard function and guess---------------------------------------------------------------------------------------------------------


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
            clicksound.play();
            // getguessArea.innerText[index] = typeletter;
            // console.log(getguessArea.innerText[index]);
            })

        getguessArea.innerText = guessAreaArray.join().replace(/,/g,"");
        this.classList.add('green');
    // console.log(guessAreaArray);
    
        if(getguessArea.innerText==wordToGuess){
            getkitchen.classList.toggle('statusWin');
            document.querySelector('.dangerScore').innerText = `Best Father Ever`
            document.querySelector('.right-GamingPage').classList.toggle('hidden');
            document.querySelector('.winnerPage').classList.toggle('hidden');
            document.querySelectorAll('.answer')[1].innerText = `The answer is ${wordToGuess}`;
            yeah.play();
            }
    }

    else{
;        dangerScore ++;
        document.querySelector('.dangerScore').innerText = `Danger Score: ${dangerScore}`;
        getkitchen.classList.toggle(`status${dangerScore}`);
        this.classList.add('red');
        errorsound.play();

        if(dangerScore==5){
            document.querySelector('.right-GamingPage').classList.toggle('hidden');
            document.querySelector('.gameoverPage').classList.toggle('hidden');
            document.querySelectorAll('.answer')[0].innerText = `The answer is ${wordToGuess}`;
            lostsound.play();
            cry.play();
            backgroundsong.pause();
        }
        }
    })
})



// reset button------------------------------------------------------------------------------------------------------------------------
document.querySelectorAll('.resetBtn').forEach(btn=>{
    btn.addEventListener('click',function(){
        clicksound.play();
        window.location.reload();
    })

})

//hints button-------------------------------------------------------------------------------------------------------------------------
document.querySelector('.hints').addEventListener('click',function(){
    let guessAreaArray = getguessArea.innerText.split('');
    if(guessAreaArray[0]=='_'){
    clicksound.play();
    guessAreaArray[0] = wordToGuess[0]
    console.log(guessAreaArray)
    getguessArea.innerText = guessAreaArray.join().replace(/,/g,'');
    document.querySelector('.hints').classList.add('hintsclicked');
        
}  
})

//create timer
function countdown(){
    let timer=setInterval(function(){
    if((document.querySelector('.gameoverPage').getAttribute('class') == "gameoverPage") || 
    (document.querySelector('.winnerPage').getAttribute('class') == "winnerPage")){
        clearInterval(timer);
      }
    else if(count==0){
        document.querySelector('.right-GamingPage').classList.toggle('hidden');
        document.querySelector('.gameoverPage').classList.toggle('hidden');
        document.querySelector('.kitchen').classList.toggle('status5');
        document.querySelectorAll('.answer')[0].innerText = `The answer is ${wordToGuess}`;
        console.log(`still running`)
        lostsound.play();
        cry.play();
        backgroundsong.pause();
        clearInterval(timer);
    }
    else if(count>0){
      count --;
      document.querySelector('.timer').innerText = count;
      console.log(count)
    }

    },1000)
    }

//audio feature0--------------------------------------------------------------------------------------------------------------------
let backgroundsong = new Audio("./sound/background.mp3");
let cookingsound = new Audio("./sound/cooking.mp3");
let clicksound = new Audio("./sound/click.mp3");
let errorsound = new Audio("./sound/error.mp3");
let lostsound = new Audio("./sound/lost.mp3");
let yeah = new Audio("./sound/yeah.mp3")
let cry = new Audio("./sound/cry.mp3")
