const readline = require("readline-sync");

function quiz() {

    const questions = [
        {
            question: "She ____ my friend.",
            options: ["1) am", "2) is", "3) are"],
            answer: "2"
        },
        {
            question: "They ____ your dogs.",
            options: ["1) are", "2) am", "3) is"],
            answer: "1"
        },
        {
            question: "He ____ to gym every day.",
            options: ["1) go", "2) goes", "3) going"],
            answer: "2"
        },
        {
            question: "I'm _______ soccer now.",
            options: ["1) watched", "2) watch", "3) watching"],
            answer: "3"
        },
        {
            question: "I ____ a student.",
            options: ["1) am", "2) is", "3) are"],
            answer: "1"
        },
        {
            question: "We ____ happy today.",
            options: ["1) am", "2) is", "3) are"],
            answer: "3"
        },
        {
            question: "The cat ____ sleeping.",
            options: ["1) is", "2) are", "3) am"],
            answer: "1"
        },
        {
            question: "You ____ my best friend.",
            options: ["1) is", "2) are", "3) am"],
            answer: "2"
        },
        {
            question: "She ____ English every day.",
            options: ["1) study", "2) studies", "3) studying"],
            answer: "2"
        },
        {
            question: "My brother ____ video games.",
            options: ["1) play", "2) plays", "3) playing"],
            answer: "2"
        },
        {
            question: "They ____ TV every night.",
            options: ["1) watches", "2) watch", "3) watching"],
            answer: "2"
        },
        {
            question: "I ____ to school by bus.",
            options: ["1) goes", "2) go", "3) going"],
            answer: "2"
        },
        {
            question: "He is ____ a book now.",
            options: ["1) read", "2) reads", "3) reading"],
            answer: "3"
        },
        {
            question: "We are ____ dinner.",
            options: ["1) have", "2) having", "3) had"],
            answer: "2"
        },
        {
            question: "They are ____ in the park.",
            options: ["1) run", "2) ran", "3) running"],
            answer: "3"
        },
        {
            question: "She ____ coffee every morning.",
            options: ["1) drinks", "2) drink", "3) drinking"],
            answer: "1"
        }
    ]

    questions.forEach(q => {
        console.log("\n" + q.question)
        q.options.forEach(opt => console.log(opt))

        let answer = readline.question("Resposta:")

        if(answer === q.answer){
            console.log("Correto! :)")
        } else {
            console.log("Errado! :(")
        }
    })
    readline.question("\nAperte ENTER para continuar")
}


quiz()

module.exports = quiz;