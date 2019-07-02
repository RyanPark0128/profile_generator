const answers = []
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const paragraph = function(n = 0) {
    const survey = [
        "What's your name?: ",
        "What is an activity you like doing?: ",
        "What do you listen to while doing that?: ",
        "Which meal is your favourite?: ",
        "Whats your favourite thing to eat for that meal?: ",
        "Which sport is your absolute favourite?: ",
        "What is your superpower?: "
    ];
 
    if (n <= (survey.length)) {
        rl.question(survey[n], (answer) => {
            testing(answer)
            paragraph(n + 1)
        })
    }
    return testing()
}    

const testing = function(str) {
    answers.push(str)
    if (answers.length === 7) {
        console.log("Name: " + answers[0])
        console.log("Activity " + answers[0] + " likes: " + answers[1] )
        console.log("Music " + answers[0] + " likes: " + answers[2])
        console.log("Favourite meal(breakfast, lunch, dinner): " + answers[3])
        console.log("Favourite thing to eat: " + answers[4])
        console.log("Favourite sport: " + answers[5])
        console.log("Superpower: " + answers[6])
        return answers
    }
}

paragraph()
