const arr = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll("button")
let playerchoice
let computerchoice
const playerscorecontainer = document.querySelector("#playerscore")
const computerscorecontainer = document.querySelector("#computerscore")
let x
const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
let playerscore = 0
let computerscore = 0
const playerscoretext = document.createElement("p")
playerscoretext.className = "number"
const computerscoretext = document.createElement("p")
computerscoretext.className = "number"
function score(playerchoice,computerchoice) {
    if(playerchoice === computerchoice){
    playerscorecontainer.innerHTML = "";
    computerscorecontainer.innerHTML = "";
    playerscoretext.textContent = playerscore
    computerscoretext.textContent = computerscore
    playerscorecontainer.appendChild(playerscoretext)
    computerscorecontainer.appendChild(computerscoretext)
    }else if((playerchoice ==="paper" && computerchoice ==="rock") || (playerchoice==="rock" && computerchoice ==="scissors") || (playerchoice ==="scissors" && computerchoice === "paper")){
    playerscore++;
    playerscorecontainer.innerHTML = "";
    computerscorecontainer.innerHTML = "";
    playerscoretext.textContent = playerscore
    computerscoretext.textContent = computerscore
    playerscorecontainer.appendChild(playerscoretext)
    computerscorecontainer.appendChild(computerscoretext)
    }else{
    computerscore++;
    playerscorecontainer.innerHTML = "";
    computerscorecontainer.innerHTML = "";
    playerscoretext.textContent = playerscore
    computerscoretext.textContent = computerscore
    playerscorecontainer.appendChild(playerscoretext)
    computerscorecontainer.appendChild(computerscoretext)
    }
}
buttons.forEach(button => {
    if(button.textContent !== "Reset Game"){
        button.addEventListener("click", () => {
            if(button.className === "rock"){
                playerchoice = "rock"
                document.querySelector(".playercontainer").innerHTML = ""
                document.querySelector(".playercontainer").appendChild(rock.cloneNode(true))

            }else if(button.className ==="paper"){
                playerchoice = "paper"
                document.querySelector(".playercontainer").innerHTML = ""
                document.querySelector(".playercontainer").appendChild(paper.cloneNode(true))
            }else{
                playerchoice = "scissors"
                document.querySelector(".playercontainer").innerHTML = ""
                document.querySelector(".playercontainer").appendChild(scissors.cloneNode(true))
            }
        x = Math.floor(Math.random() * arr.length)
        computerchoice = arr[x]
        if(computerchoice === "rock"){
                document.querySelector(".computercontainer").innerHTML = ""
                document.querySelector(".computercontainer").appendChild(rock.cloneNode(true))
        }else if(computerchoice === "paper"){
                document.querySelector(".computercontainer").innerHTML = ""
                document.querySelector(".computercontainer").appendChild(paper.cloneNode(true))
        }else{
                document.querySelector(".computercontainer").innerHTML = ""
                document.querySelector(".computercontainer").appendChild(scissors.cloneNode(true))
        }
        score(playerchoice,computerchoice)
});
}
});
document.querySelector(".reset").addEventListener("click", () =>{
    playerscore = 0
    computerscore = 0
    playerscoretext.textContent = playerscore
    computerscoretext.textContent = computerscore
    playerscorecontainer.innerHTML = ""
    computerscorecontainer.innerHTML = ""
    document.querySelector(".computercontainer").innerHTML = ""
    document.querySelector(".playercontainer").innerHTML = ""
    playerscorecontainer.appendChild(playerscoretext)
    computerscorecontainer.appendChild(computerscoretext)
})