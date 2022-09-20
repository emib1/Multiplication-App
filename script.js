const form = document.getElementById('form')
const score = document.getElementById('score')
const question = document.getElementById('question')
const input = document.getElementById('input')
const num1 = Math.ceil(Math.random() *10)
const num2 = Math.ceil(Math.random() *10)

let score1 =JSON.parse(localStorage.getItem("score1"))

if(!score1){
    score1 = 0
}

score.innerText =`score: ${score1}`

question.innerText = `What is ${num1} mutiplied by ${num2}?`

const correctAns = num1 * num2
form.addEventListener("submit", () =>{
    const userAnswer = +input.value
    if ( userAnswer === correctAns){
        score1++
        updateLocalStorage();

    }
    
    else {
        score1--
        updateLocalStorage();

    }
    
})



function updateLocalStorage(){
   localStorage.setItem("score1", JSON.stringify(score1))
}