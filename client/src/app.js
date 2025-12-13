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
    let previousReviewHeading = document.createElement("h2");
    let previousReviewContent = document.createElement("p");
    previousReviewHeading.innerHTML = `${data[i].name}`;
    previousReviewHeading.className = "previous-review-name";
    previousReviewSection.appendChild(previousReviewHeading);
    previousReviewContent.innerHTML = `"${data[i].review}"`;
    previousReviewContent.className = "previous-review";
    previousReviewSection.appendChild(previousReviewContent);
  }
}

// function loadReview(review) {
//   let mainReview = review

// }

// function createPrevNextButtons() {
//   const prevBtn = document.createElement("a");
//   prevBtn.innerHTML = "&#10094";
//   prevBtn.className = "prev";
//   previousReviewSection.appendChild(prevBtn);
//   const nextBtn = document.createElement("a");
//   nextBtn.innerHTML = "&#10095";
//   nextBtn.className = "next";
//   previousReviewSection.appendChild(nextBtn);
// }

// createPrevNextButtons();

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
