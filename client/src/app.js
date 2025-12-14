const previousReviewSection = document.getElementById(
  "previous-reviews-section"
);

const reviewsForm = document.getElementById("reviews-form");

async function getReviewsData() {
  const response = await fetch(
    "https://teched-week-4-assignment-server.onrender.com/reviews"
  );
  const apiData = await response.json();
  const wrangledRows = apiData.apiData.rows;
  const slicedData = wrangledRows.slice(-6);
  return slicedData;
}

const apiRows = await getReviewsData();
console.log(apiRows);

async function renderPreviousReviews() {
  const reviewsData = await getReviewsData();
  createPreviousReviewElements(reviewsData);
}

renderPreviousReviews();

function createPreviousReviewElements(data) {
  for (let i = 0; i < data.length; i++) {
    let reviewContainer = document.createElement("div");
    let previousReviewHeading = document.createElement("h2");
    let previousReviewContent = document.createElement("p");
    previousReviewHeading.innerHTML = `${data[i].name}`;
    previousReviewSection.appendChild(reviewContainer);
    previousReviewHeading.className = "previous-review-name";
    reviewContainer.appendChild(previousReviewHeading);
    previousReviewContent.innerHTML = `"${data[i].review}"`;
    previousReviewContent.className = "previous-review";
    reviewContainer.appendChild(previousReviewContent);
  }
}

function handleFormSubmit(event) {
  event.preventDefault();
  const formDataTemplate = new FormData(reviewsForm);
  const formValues = Object.fromEntries(formDataTemplate);

  fetch("https://teched-week-4-assignment-server.onrender.com/reviews", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ formValues }),
  });
  reviewsForm.reset();
}

reviewsForm.addEventListener("submit", handleFormSubmit);
reviewsForm.addEventListener("submit", function () {
  reviewsForm.style.display = "none";
  const thanksMessageDisplay = document.querySelector(".submit-section");
  thanksMessageDisplay.className = "thanks-container";
  const displayMessage = document.createElement("h4");
  displayMessage.className = "thanks-message";
  displayMessage.innerHTML =
    "Thank you for sharing your views with us! <br> Refresh the page to see your published review!";
  thanksMessageDisplay.appendChild(displayMessage);
});
