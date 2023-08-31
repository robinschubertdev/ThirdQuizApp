const bookMarkToggle = document.querySelector('[data-js="bookmark"]');

const card =document.querySelector('[class="card-list__item"]');

const showAnswerButton =document.querySelector('[class="card__button-answer"]');

const answer =document.querySelector('[data-js="first-answer"]');


bookMarkToggle.addEventListener("click", () => {
bookMarkToggle.classList.toggle("bookmark--active");
});


showAnswerButton.addEventListener("click", () => {
    answer.classList.toggle("card__answer");
    if(showAnswerButton.innerHTML ==="Hide answer"){
        showAnswerButton.innerHTML ="Show answer"
    } else {
        showAnswerButton.innerHTML ="Hide answer"
    }
});


