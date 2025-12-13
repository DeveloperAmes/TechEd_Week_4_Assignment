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
  return wrangledRows;
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
    let previousReviewHeading = document.createElement("h3");
    let previousReviewContent = document.createElement("p");
    previousReviewHeading.innerHTML = `${data[i].name}`;
    previousReviewSection.appendChild(previousReviewHeading);
    previousReviewContent.innerHTML = `${data[i].review}`;
    previousReviewSection.appendChild(previousReviewContent);
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
  console.log(formValues);
}

reviewsForm.addEventListener("submit", handleFormSubmit);
