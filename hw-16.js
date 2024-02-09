const textarea = document.querySelector(".textarea");
const error = document.querySelector("#error");

textarea.addEventListener("focus", () => {
  error.style.display = 'block';
});

textarea.addEventListener("blur", () => {
  error.style.display = 'none';
});