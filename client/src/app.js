console.log("Hello world");

const reviewsForm = document.getElementById("reviews-form");

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

async function getReviewsData() {
  const response = await fetch(
    "https://teched-week-4-assignment-server.onrender.com/reviews"
  );
  const apiData = await response.json();
  const wrangledReview = apiData[i].review;
  const wrangledName = apiData[i].name;
  return wrangledReview;
  return wrangledName;
}

getReviewsData();
