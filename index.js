const bookMarkToggle = document.querySelector('[data-js="bookMark"]');

bookMarkToggle.addEventListener("click", () => {
bookMarkToggle.classList.toggle("bookmark--active");
});

const card =document.querySelector('[class="card-list__item"]');

const answerButton =document.querySelector('[class="card__button-answer"]');

const shownAnswer =document.querySelector('[data-js="answerOne"]');

answerButton.addEventListener("click", () => {
    shownAnswer.classList.toggle("card__answer");
    if(answerButton.innerHTML ==="Hide answer"){
        answerButton.innerHTML ="Show answer"
    } else {
        answerButton.innerHTML ="Hide answer"
    }
});


