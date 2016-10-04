var hold = [];

function loadQuestion() {
  var item = Math.round(Math.random() * (questions.length - 1));

  document.getElementById('question').innerHTML = questions[item];

  hold.push(questions.splice(item, 1));

  if (questions.length === 0) {
    Array.prototype.push.apply(questions, hold);
    hold = [];
  }
}

loadQuestion();
