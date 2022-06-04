const giveMeAJoke = require('give-me-a-joke')  

// before start i use package.json
// now here what package.json?
// so it is heart of your project where you can see all the dependencies of your project and work acordingly

// I first reuqire perticular package(give-me-a-joke) and use it below as per requirement

// To get a random dad joke
giveMeAJoke.getRandomDadJoke (function(joke) {
     console.log("Dad "+joke);
});

// To get a random Chuck Norris joke
giveMeAJoke.getRandomCNJoke (function(joke) {
    console.log( "Chuck " +joke);
});

// To get a customized joke
var fn = "Jackie";
var ln = "Chan";
giveMeAJoke.getCustomJoke (fn, ln, function(joke) {
   console.log(joke);
});

// To get a random Joke of the Day (Categories allowed: "blonde", "knock-knock", "animal", "jod")
var category = "blonde";
giveMeAJoke.getRandomJokeOfTheDay (category, function(joke) {
     // NOTE: The service provider has made the restriction of 5 calls an hour for RandomJokeOfTheDay
    console.log(joke);
});