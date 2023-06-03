const body = document.querySelector('body');
const submitBtn = document.querySelector(".submit-rating-btn");
const rateCard = document.querySelector(".rate-card");

submitBtn.addEventListener('click', () => {
    let rating = getRating();
    const submissionCard = createSubmitCard(rating);
    
    rateCard.remove();
    body.appendChild(submissionCard);
});

function getRating() {
    const ratingInputs = document.querySelectorAll("input");
    let rating;

    ratingInputs.forEach(r => 
    {
        if (r.checked)
        {
            rating = r.value;
        }
    });

    return rating;
}

function createSubmitCard(rating) {
    const card = document.createElement('div');
    card.classList.add('container');
    card.classList.add('submitted-card');

    card.innerHTML = 
    `
    <div class="graphic">
        <img src="../starter code/images/illustration-thank-you.svg" alt="">
      </div>
      <div class="rating-chosen">You selected ${rating} out of 5</div>
      <div class="text success-msg">
        <h2>Thank you!</h2>
        <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
      </div>
    `;

    return card;
}