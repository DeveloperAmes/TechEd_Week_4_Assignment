console.log("Hello world");

const reviewsForm = document.getElementById("reviews-form");

async function handleFormSubmit(event) {
  event.preventDefault();
  const formDataTemplate = new FormData(reviewsForm);
  const formValues = Object.fromEntries(formDataTemplate);
  console.log(formValues);

  await fetch("https://teched-week-4-assignment-server.onrender.com/reviews", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ formValues }),
  });
}

reviewsForm.addEventListener("submit", handleFormSubmit);
