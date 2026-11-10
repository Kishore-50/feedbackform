// Standalone feedback form: no server, API, or database connection.
document.getElementById("feedbackForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // The form is validated by the browser. Submission is handled locally only.
  alert("Feedback submitted successfully! ");
  this.reset();
});
