const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");

yesBtn.addEventListener("click", () => {
  response.textContent = "Awesome! Let's plan next week!";
});

noBtn.addEventListener("click", () => {
  response.textContent = "No worries, maybe another time!";
});
