const inputemailorphone = document.getElementById("inputemailorphone");
const inputname = document.getElementById("inputname");
const inputusername = document.getElementById("inputusername");
const inputpassword = document.getElementById("inputpassword");
let validinputemailorphone = false;
let validinputname = false;
let validinputusername = false;
let validinputpassword = false;

inputemailorphone.addEventListener("blur", () => {
  let emailregex = /^([\.\-a-zA-Z0-9]+)@([\.\-a-zA-Z0-9]+)\.([a-zA-Z]){3,23}$/;
  let phoneregex = /^([0-9]){10}$/;
  let inputemailorphonevalue = inputemailorphone.value;
  if (emailregex.test(inputemailorphonevalue)) {
    console.log("user's email id is validated");
    inputemailorphone.classList.remove("errorinputemailorphone");
    validinputemailorphone = true;
  } else if (phoneregex.test(inputemailorphonevalue)) {
    console.log("user's phone number is validated");
    inputemailorphone.classList.remove("errorinputemailorphone");
    validinputemailorphone = true;
  } else {
    console.log("user's both phone number or email id is invalid");
    inputemailorphone.classList.add("errorinputemailorphone");
    validinputemailorphone = false;
  }
});

inputname.addEventListener("blur", () => {
  let nameregex = /^([a-zA-Z]\s*){3,20}$/;
  let inputnamevalue = inputname.value;
  if (nameregex.test(inputnamevalue)) {
    console.log("valid name");
    inputname.classList.remove("errorinputname");
    validinputname = true;
  } else {
    console.log("invalid name");
    inputname.classList.add("errorinputname");
    validinputname = false;
  }
});

inputusername.addEventListener("blur", () => {
  let usernameregex = /^([\.\-\_a-zA-Z0-9]+){5,25}$/;
  let inputusernamevalue = inputusername.value;
  if (usernameregex.test(inputusernamevalue)) {
    console.log("valid username");
    inputusername.classList.remove("errorinputusername");
    validinputusername = true;
  } else {
    console.log("invalid username");
    inputusername.classList.add("errorinputusername");
    validinputusername = false;
  }
});

inputpassword.addEventListener("blur", () => {
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

const signupform = document.querySelector(".signupform");
signupform.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    validinputemailorphone &&
    validinputname &&
    validinputusername &&
    validinputpassword
  ) {
    console.log("ok");
    let storemailorphone = inputemailorphone.value;
    let storename = inputname.value;
    let storeusername = inputusername.value;
    let storepassword = inputpassword.value;
    let formdatabase = JSON.parse(localStorage.getItem("signupdatabase"))
      ? JSON.parse(localStorage.getItem("signupdatabase"))
      : [];
    if (
      formdatabase.some((duplicatedataentry) => {
        return (
          duplicatedataentry.emailorphone === storemailorphone ||
          duplicatedataentry.username === storeusername
        );
      })
    ) {
      console.log("user with credentials already exists on portal");
      signupform.reset();
    } else {
      let formdataentry = {
        emailorphone: storemailorphone,
        name: storename,
        username: storeusername,
        password: storepassword,
      };
      formdatabase.push(formdataentry);
      localStorage.setItem("signupdatabase", JSON.stringify(formdatabase));
      signupform.reset();
      location.href = "login.html";
    }
  } else {
    console.log("not ok");
    signupform.reset();
  }
});
