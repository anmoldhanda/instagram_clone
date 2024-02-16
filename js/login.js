const inputemailorphoneorusername = document.getElementById(
  "inputemailorphoneorusername"
);
const inputpassword = document.getElementById("inputpassword");
let validinputemailorphoneorusername = false;
let validinputpassword = false;

inputemailorphoneorusername.addEventListener("blur", (e) => {
  let emailregex = /^([\.\-a-zA-Z0-9]+)@([\.\-a-zA-Z0-9]+)\.([a-zA-Z]){3,23}$/;
  let phoneregex = /^([0-9]){10}$/;
  let usernameregex = /^([\.\-\_a-zA-Z0-9]+){5,25}$/;
  let inputemailorphoneorusernamevalue = inputemailorphoneorusername.value;
  if (emailregex.test(inputemailorphoneorusernamevalue)) {
    console.log("valid email id");
    inputemailorphoneorusername.classList.remove(
      "errorinputemailorphoneorusername"
    );
    validinputemailorphoneorusername = true;
  } else if (phoneregex.test(inputemailorphoneorusernamevalue)) {
    console.log("valid phone number");
    inputemailorphoneorusername.classList.remove(
      "errorinputemailorphoneorusername"
    );
    validinputemailorphoneorusername = true;
  } else if (usernameregex.test(inputemailorphoneorusernamevalue)) {
    console.log("valid username");
    inputemailorphoneorusername.classList.remove(
      "errorinputemailorphoneorusername"
    );
    validinputemailorphoneorusername = true;
  } else {
    console.log("email id, phone number, username are invalid");
    inputemailorphoneorusername.classList.add(
      "errorinputemailorphoneorusername"
    );
    validinputemailorphoneorusername = false;
  }
});

inputpassword.addEventListener("blur", (e) => {
  let passwordregex = /^([a-zA-Z0-9]+){5,15}$/;
  let inputpasswordvalue = inputpassword.value;
  if (passwordregex.test(inputpasswordvalue)) {
    console.log("valid password");
    inputpassword.classList.remove("errorinputpassword");
    validinputpassword = true;
  } else {
    console.log("invalid password");
    inputpassword.classList.add("errorinputpassword");
    validinputpassword = false;
  }
});

const loginform = document.querySelector(".loginform");
loginform.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validinputemailorphoneorusername && validinputpassword) {
    console.log("ok");
    location.href = "index.html";
    loginform.reset();
  } else {
    console.log("not ok");
    loginform.reset();
  }
});
