const questionTags = document.querySelectorAll(".question");

questionTags.forEach((question) => {
  question.addEventListener("click", () => {
    const sublingTag = question.nextElementSibling;
    if (question.classList.contains("clicked")) {
      clearClicked();
      clearActive();
    } else {
      clearClicked();
      clearActive();
      question.classList.add("clicked");
      question.querySelector("div").style.transform = "rotate(180deg)";

      sublingTag.classList.add("show");
      const sublingHeight = sublingTag.childNodes[1].offsetHeight;
      sublingTag.style.height = `${sublingHeight}px`;
    }
  });
});

function clearClicked() {
  questionTags.forEach((a) => {
    if (a.classList.contains("clicked")) {
      a.classList.remove("clicked");
      a.querySelector("div").style.transform = "rotate(0deg)";
    }
  });
}

function clearActive() {
  const answerTags = document.querySelectorAll(".answer");
  answerTags.forEach((answer) => {
    if (answer.classList.contains("show")) {
      answer.classList.remove("show");
      answer.style.height = 0;
    }
  });
}
