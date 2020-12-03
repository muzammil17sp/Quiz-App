let quizData=[
    {question:"How Is the prime Minster of Pakistan",
    a:"Nawaz Shareef",
    b:"Imran khan",
    c:"Pervaiz Musharraf",
    d:"Qamaz Javed Bajwa",
    correct:"b"
},
{question:"What is the old name of Karachi",
    a:"Kolachi",
    b:" Karanchi",
    c:"Karachi",
    d:"None Of These",
    correct:"a"
},
{ question:"What is 24 X 24",
a:"240",
b:"1987",
c:"576",
d:"444",
correct:"c"
},
{
    question:"What is the full form of C.P.U",
correct:"c",
a:"Computer Processing Unit",
b:"Personal Computer",
c:"Central Processing Unit",
d:"None Of These",
correct:"c",
},
{ question:"What is the color of Pakistani Flag",
a:"Green And White",
b:"White And Black",
c:"Rainbow Colors",
d:"None Of These",
correct:"a",
},
{question:"What is the  Answer of 45(78+54)",
a:"4327",
b:"6549",
c:"2143",
d:"5940",
correct:"d",
}
]
let question = document.getElementById("question")
let A = document.getElementById("aOption")
let B = document.getElementById("bOption")
let C = document.getElementById("cOption")
let D = document.getElementById("dOption")
let submit = document.getElementById("submit")
let answers = document.querySelectorAll(".answer")

let currentQuiz = 0
let score = 0
let answer=undefined
loadQuiz()
function loadQuiz() {
    const  currentQuestion = quizData[currentQuiz]
    question.innerHTML=currentQuestion.question
    A.innerHTML=currentQuestion.a
    B.innerHTML=currentQuestion.b
    C.innerHTML=currentQuestion.c
    D.innerHTML=currentQuestion.d

    
} 
getSelected=()=>{
    // let answers = document.querySelectorAll(".answer")
    answers.forEach((data)=>{
        if(data.checked){
        answer= data.id
        }
    })
    return answer
}
deselected =()=>{
    answers.forEach((data)=>{
       data.checked= false
    })
}
submit.addEventListener("click",function () {
    
   const answer = getSelected()
   if (answer) {
       if (answer===quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       deselected()
      
       if (currentQuiz<quizData.length) {
        loadQuiz()

    } else {

        document.getElementById("container").innerHTML=`
        <h2>Your Answer Correctly ${score}/${quizData.length}<button class="btn" onclick="window.location.reload()">Reload</button></h2>`
    }
   }
    
})