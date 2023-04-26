const answers = [
    "It is certain",
    "It is decidely so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not good",
    "Very doubtful"
]

const ball = document.getElementById("ball");
const element = document.getElementById("answers");
element.style.opacity = 0;

function shake(){
    ball.classList.add("shake");
    //Add animation event listener, show new images and scores once animation stops
    ball.addEventListener('animationend', (ev) => {
       getAnswer();
       ball.classList.remove("shake");
    })
    
}

function getAnswer() {

    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    const rndInt = randomInt(0, 19);

    element.animate({
        opacity: [0, 1]
    }, 1500).onfinish = () => element.style = 1
    document.getElementById("answers").innerHTML = `<img src="images/answer${rndInt}.png" alt="answer">`;
}



