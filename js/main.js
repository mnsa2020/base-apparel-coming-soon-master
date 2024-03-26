const emailInput = document.querySelector(".email-input");
const errorMsg = document.querySelector(".error-msg");
const errorImg = document.querySelector(".error-img");
const btnSubmit = document.querySelector(".btn-submit");

function validateEmail() {
  const email = document.getElementById("email").value;
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailInput.value == "") {
    errorImg.style.display = "block";
    errorMsg.innerHTML = "Can't be empty";
  } else if (regex.test(String(email).toLowerCase())) {
    alert("The email address is valid.");
  } else {
    // alert("The email address is not valid.");
    errorImg.style.display = "block";
    errorMsg.innerHTML = "The email address is not valid.";
  }
}
