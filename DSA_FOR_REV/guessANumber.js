const prompt =  require('prompt-sync')({sigint: true});

const guessNumber=()=> {


    let number = Number(prompt('Guess a number from 1 to 10: '));
    // console.log(number)
    const random = Math.floor(Math.random() * 10);

    while(number !== random) {
        number = Number(prompt('Guess a number from 1 to 10: '));
    }
    if(number == random) {
        console.log('You guessed the correct number.');
    }
  }



guessNumber();