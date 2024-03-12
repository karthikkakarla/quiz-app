const data = [
    {
        "questionText": "What is the capital of France?",
        "options": ["Paris", "Berlin", "Madrid", "Rome"],
        "answer": "Paris",
        "category": "Geography"
    },
    {
        "questionText": "Which mountain is the tallest in the world?",
        "options": ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
        "answer": "Mount Everest",
        "category": "Geography"
    },
    {
        "questionText": "In which ocean is the Bermuda Triangle located?",
        "options": ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean"],
        "answer": "Atlantic Ocean",
        "category": "Geography"
    },
    {
        "questionText": "Who was the first President of the United States?",
        "options": ["George Washington", "Thomas Jefferson", "John Adams", "James Madison"],
        "answer": "George Washington",
        "category": "History"
    },
    {
        "questionText": "Which ancient civilization built the Great Wall of China?",
        "options": ["Han Dynasty", "Ming Dynasty", "Qin Dynasty", "Song Dynasty"],
        "answer": "Qin Dynasty",
        "category": "History"
    },
    {
        "questionText": "Which country hosted the 2016 Summer Olympics?",
        "options": ["Brazil", "USA", "Russia", "China"],
        "answer": "Brazil",
        "category": "Sports"
    },
    {
        "questionText": "Who holds the record for the most goals scored in a single FIFA World Cup tournament?",
        "options": ["Just Fontaine", "Pele", "Miroslav Klose", "Diego Maradona"],
        "answer": "Just Fontaine",
        "category": "Sports"
    },
    {
        "questionText": "Which sport is known as the 'King of Sports'?",
        "options": ["Soccer", "Cricket", "Tennis", "Basketball"],
        "answer": "Soccer",
        "category": "Sports"
    },
    {
        "questionText": "In which city did the first modern Olympic Games take place in 1896?",
        "options": ["Athens", "London", "Paris", "Rome"],
        "answer": "Athens",
        "category": "Sports"
    },
    {
        "questionText": "Who is often referred to as 'The Greatest' in the sport of boxing?",
        "options": ["Muhammad Ali", "Mike Tyson", "Floyd Mayweather Jr.", "Sugar Ray Robinson"],
        "answer": "Muhammad Ali",
        "category": "Sports"
    },
    {
        "questionText": "Who is the co-founder of Microsoft Corporation?",
        "options": ["Bill Gates", "Steve Jobs", "Mark Zuckerberg", "Larry Page"],
        "answer": "Bill Gates",
        "category": "Technology"
    },
    {
        "questionText": "What does 'www' stand for in a website address?",
        "options": ["World Wide Web", "World Wealthy Web", "Web World Wide", "World With Wires"],
        "answer": "World Wide Web",
        "category": "Technology"
    },
    {
        "questionText": "Which company developed the first commercially successful personal computer?",
        "options": ["IBM", "Apple", "Microsoft", "Commodore"],
        "answer": "IBM",
        "category": "Technology"
    },
    {
        "questionText": "Who is the CEO of Tesla, Inc.?",
        "options": ["Elon Musk", "Jeff Bezos", "Tim Cook", "Sundar Pichai"],
        "answer": "Elon Musk",
        "category": "Technology"
    },
    {
        "questionText": "What does 'IP' stand for in 'IP address'?",
        "options": ["Internet Protocol", "Internet Provider", "Internet Privacy", "Internet Page"],
        "answer": "Internet Protocol",
        "category": "Technology"
    },
    {
        "questionText": "What is JavaScript?",
        "options": ["A programming language", "A type of coffee", "A design framework", "A markup language"],
        "answer": "A programming language",
        "category": "JavaScript"
    },
    {
        "questionText": "Who developed JavaScript?",
        "options": ["Netscape Communications Corporation", "Microsoft Corporation", "Google Inc.", "Apple Inc."],
        "answer": "Netscape Communications Corporation",
        "category": "JavaScript"
    },
    {
        "questionText": "Which keyword is used to declare variables in JavaScript?",
        "options": ["var", "array", "const", "variable"],
        "answer": "var",
        "category": "JavaScript"
    },
    {
        "questionText": "What is the purpose of the 'typeof' operator in JavaScript?",
        "options": ["To determine the data type of a variable", "To concatenate strings", "To create a loop", "To declare a function"],
        "answer": "To determine the data type of a variable",
        "category": "JavaScript"
    }
]


let totalQuestion = 10;
let timerValue = 20;
let questionTime = timerValue * 1000;
let currentQuestion = 0;
let questionCount = 1;
let oldTimer = null
let oldInterval = null;

function startQuiz(){
    nextQuestion()
}

function nextQuestion(){ 
    if(oldTimer){
        clearTimeout(oldTimer)
    }

    if(oldInterval){
        clearInterval(oldInterval)
    }

    if(questionCount>totalQuestion){
        return;
    }

    timerValue = 20
    document.querySelector('.timer').innerHTML = timerValue;
    
    oldInterval = setInterval(()=>{
        document.querySelector('.timer').innerHTML = timerValue;
        timerValue--;
    },1000)
    
    let nextQuestionData = data[currentQuestion];
    document.querySelector('.question-container').innerHTML = getQuestionHtml(nextQuestionData);
    questionCount++;
    currentQuestion++;

    oldTimer = setTimeout(()=>{
        nextQuestion()
    },questionTime)

}


function getQuestionHtml(question){
    return `
        <div class="question">
            <h4>${question.questionText}</h4>
            <ul class="options-list" type="none">
                <li><input type="radio" name="anything"/>${question.options[0]}</li>
                <li><input type="radio" name="anything"/>${question.options[1]}</li>
                <li><input type="radio" name="anything"/>${question.options[2]}</li>
                <li><input type="radio" name="anything"/>${question.options[3]}</li>
            </ul>
            <div class="button-container">
                <button class="continue-btn" onclick="nextQuestion()">Continue</button>
            </div>
        </div>    
    `
}

