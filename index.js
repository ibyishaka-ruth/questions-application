const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let questionData = [
  {
    question: "what is the capital of france?",
    options: ["paris", "london", "berlin", "madrid"],
    answer: "paris"
  },
  {
    question: "what is the largest planet in our solar system?",
    options: ["mars", "saturn", "jupiter", "neptune"],
    answer: "jupiter"
  },
  {
    question: "what is the chemical symbol for gold?",
    options: ["Au", "Ag", "Cu", "Fe"],
    answer: "Au"
  }
];

const displayOptions = (question) => {
  console.log(question.question);
  question.options.forEach((item, index) => {
    console.log((index + 1), item);
  });
};

const generateAnswer = (quest, answer) => {
  const answerProvided = questionData[quest];
  let checkAnswer = answerProvided.answer;
  if (answer === checkAnswer) {
    console.log("correct");
  } else {
    console.log("incorrect");
  }
};

const getQuestion = () => {
  for (let i = 0; i < questionData.length; i++) {
    console.log(questionData[i].question);
    displayOptions(questionData[i]);
    rl.question('', (answer) => {
      generateAnswer(i, answer);
      getQuestion();
    });
  }
};

let i = 0;
const genQuestion = () => {
    if (i < questionData.length) {
      displayOptions(questionData[i]);
      rl.question('Your answer: ', (answer) => {
        generateAnswer(i, answer);
        i++;
        genQuestion();
      });
    } else {
      rl.close(); 
    }
  };
  genQuestion();
  

