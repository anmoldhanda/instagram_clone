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
    // console.log("valid email id");
    inputemailorphoneorusername.classList.remove(
      "errorinputemailorphoneorusername"
    );
    validinputemailorphoneorusername = true;
  } else if (phoneregex.test(inputemailorphoneorusernamevalue)) {
    // console.log("valid phone number");
    inputemailorphoneorusername.classList.remove(
      "errorinputemailorphoneorusername"
    );
    validinputemailorphoneorusername = true;
  } else if (usernameregex.test(inputemailorphoneorusernamevalue)) {
    // console.log("valid username");
    inputemailorphoneorusername.classList.remove(
      "errorinputemailorphoneorusername"
    );
    validinputemailorphoneorusername = true;
  } else {
    // console.log("email id, phone number, username are invalid");
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
    // console.log("valid password");
    inputpassword.classList.remove("errorinputpassword");
    validinputpassword = true;
  } else {
    // console.log("invalid password");
    inputpassword.classList.add("errorinputpassword");
    validinputpassword = false;
  }
});

let currentloggedinuser = localStorage.getItem("Y3VycmVudHVzZXJkZXRhaWxz")
  ? localStorage.getItem("Y3VycmVudHVzZXJkZXRhaWxz")
  : "";
if (currentloggedinuser != "") {
  location.href = "index.html";
}

const loginform = document.querySelector(".loginform");
loginform.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validinputemailorphoneorusername && validinputpassword) {
    // console.log("ok");
    let storemailorphoneorusername = btoa(inputemailorphoneorusername.value);
    let storepassword = btoa(inputpassword.value);
    // ==================== retrivieng the stored login credentials from client side in decrypted format ====================
    let formdatabase = JSON.parse(localStorage.getItem("c2lnbnVwZGF0YWJhc2U="))
      ? JSON.parse(localStorage.getItem("c2lnbnVwZGF0YWJhc2U="))
      : [];
    if (
      formdatabase.some((registereduser) => {
        return (
          // email or phone or username keys are different but their values can be entered inside the same input field so if the registereduser's emailorphone is equals to storemailoprphoneorusername or registereduser's username is equal to storemailorphoneorusername it is same which is it doesn't care if the user had logged in using it's emailid or phone as well as username
          (registereduser.emailorphone === storemailorphoneorusername ||
            registereduser.username === storemailorphoneorusername) &&
          registereduser.password === storepassword
        );
      })
    ) {
      // console.log("user is registered with us");
      let storecurrentuserlogindetails = formdatabase.find(
        (currentuserdetails) => {
          return (
            (currentuserdetails.emailorphone === storemailorphoneorusername ||
              currentuserdetails.username === storemailorphoneorusername) &&
            currentuserdetails.password === storepassword
          );
        }
      );
      if (storecurrentuserlogindetails) {
        // =================== stored the current user's login credentials in encryped format in client side ===================
        localStorage.setItem(
          btoa("currentuserdetails"),
          storecurrentuserlogindetails.username
        );
        location.href = "index.html";
        loginform.reset();
      }
    } else {
      // console.log(
      //   "user isn't registered with us to login the portal signup first"
      // );
      loginform.reset();
    }
  } else {
    // console.log("not ok");
    loginform.reset();
  }
});
