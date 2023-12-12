function togglePassword(clickedElement) {
  const parentElement = clickedElement.parentElement;
  const toggleText = parentElement.querySelector("input");
  const toggleIcon = parentElement.querySelector(".toggle");

  if (toggleText.type === "password") {
    toggleText.type = "text";
    toggleIcon.src = "/fe-challenge-4/media/icons/visible.png";
  } else if (toggleText.type === "text") {
    toggleText.type = "password";
    toggleIcon.src = "/fe-challenge-4/media/icons/invisible.png";
  }
}
