const QuizDB = [
  {
    Question:
      " Q1: What is the preferred way for adding a background color in HTML?",
    a: '<body background="yellow">',
    b: "<background>yellow</background>",
    c: '< body style="background-color:yellow">',
    d: '<background color="yellow">text<background>',
    ans: "ans3",
  },

  {
    Question: "Q2: What is the correct HTML for creating a hyperlink?",
    a: '<a name="">A</a>',
    b: "<a>B</a>",
    c: '<a href="http://www:example:com">example</a>',
    d: '<a url="http://www:example:com">example</a>',
    ans: "ans3",
  },

  {
    Question: " Q3: How can you create an e-mail link?",
    a: '<mail href="a@b">',
    b: "<mail>a@b</mail>",
    c: '<a href="a@b">',
    d: '<a href="mailto:a@b:com">',
    ans: "ans4",
  },

  {
    Question: " Q4: How can you open a link in a new browser window?",
    a: '<a href="url" new>',
    b: '<a href="url" target="new">',
    c: '<a href="url" target="_blank">',
    d: '<a href="url" target="">',
    ans: "ans3",
  },
  {
    Question: " Q5: Which of these tags are all <table> tags?",
    a: "<table><head><tfoot>",
    b: "<table><tr><td>",
    c: "<table><tr><tt>",
    d: " <thead><body><tr>",
    ans: "ans2",
  },
  {
    Question: " Q6: Which of the following JavaScript cannot do?",
    a: "JavaScript can react to events",
    b: "JavaScript can manipulate HTML elements",
    c: "JavaScript can be use to validate data",
    d: "All of the Above",
    ans: "ans4",
  },

  {
    Question: " Q7: Whats so great about XML?",
    a: "Easy data exchange",
    b: "High speed on network",
    c: "Only B:is correct",
    d: "Both A & B",
    ans: "ans4",
  },

  {
    Question:
      " Q8 : Which is not a property of attribute beHaviour of <Marquee> tag?",
    a: "alternate",
    b: "blur",
    c: "scroll",
    d: "slide",
    ans: "ans2",
  },

  {
    Question:
      " Q9 : _________ keyword is used to declare variables in javascript",
    a: "Var",
    b: "Dim",
    c: "String",
    d: "None of the above",
    ans: "ans1",
  },

  {
    Question: " Q10: The attribute used to define a new namespace is:",
    a: "XMLNS",
    b: "XmlNameSpace",
    c: "Xmlns",
    d: "XmlNs",
    ans: "ans3",
  },
];

// getting reference and variable
const question = document.querySelector("h3");
const option1 = document.querySelector(".option1");
const option2 = document.querySelector(".option2");
const option3 = document.querySelector(".option3");
const option4 = document.querySelector(".option4");
const answers = document.querySelectorAll(".answer");
const submit = document.querySelector("#submit");
const scoreArea = document.querySelector(".scoreArea");
const score_field = document.querySelector("#score");
const showCases = document.querySelector('#showCase')
let questionCount = 0;
let score = 0;
const loadQuestion = () => {
  let quizQuestion = QuizDB[questionCount];
  question.innerText = quizQuestion.Question;
  option1.innerText = quizQuestion.a;
  option2.innerText = quizQuestion.b;
  option3.innerText = quizQuestion.c;
  option4.innerText = quizQuestion.d;
};
loadQuestion();

const getCheckAnswer = () => {
  let answer;
  answers.forEach((e) => {
    if (e.checked) {
      answer = e.id;
    }
  });
  return answer;
};
const deselectAll = () =>{
    answers.forEach((e) => e.checked = false);  
}
submit.addEventListener("click", () => {
  const checkAnswer = getCheckAnswer();
  let quizQuestion = QuizDB[questionCount];
  questionCount++;
  deselectAll();
  if (questionCount < QuizDB.length) {
    loadQuestion();
  } else {
    score_field.classList.remove("btn");
  }
  if (quizQuestion.ans === checkAnswer) {
    showCases.innerText ='Owesome 😀';
    score++;
    scoreArea.innerText = "your score is " + `${score}/${QuizDB.length}`;
  }else{
    showCases.innerText ='Next may be better luck 😯';
  }
});
