// ================================ login signup form input fields animation ================================
const allinputfields = document.querySelectorAll(".inputfields");
allinputfields.forEach((inputfield) => {
  inputfield.addEventListener("input", () => {
    if (inputfield.value !== "") {
      inputfield.parentElement
        .querySelector(".input-labels")
        .classList.add("focused");
    } else {
      inputfield.parentElement
        .querySelector(".input-labels")
        .classList.remove("focused");
    }
  });
});

const passwordshowhidecontainer = document.querySelector(
  ".passwordshowhidecontainer"
);
const inputpasswordfield = document.querySelector(".inputpasswordfield");
let showhidepasswordbtn = document.createElement("button");
showhidepasswordbtn.className = "showhidepasswordbtn";
showhidepasswordbtn.textContent = "show";
showhidepasswordbtn.setAttribute("type", "button");
passwordshowhidecontainer.appendChild(showhidepasswordbtn);
inputpasswordfield.onkeyup = function () {
  if (inputpasswordfield.value.trim() !== "") {
    showhidepasswordbtn.style.display = "block";
  } else {
    showhidepasswordbtn.style.display = "none";
  }
};
// ================== password toggle visibility and changing the button text accoridng to password state show if it's password is in password text or hide if's it's plain text ==================
showhidepasswordbtn.onclick = function () {
  if (inputpasswordfield.type === "password") {
    inputpasswordfield.type = "text";
    showhidepasswordbtn.textContent = "show";
  } else {
    inputpasswordfield.type = "password";
    showhidepasswordbtn.textContent = "hide";
  }
};
