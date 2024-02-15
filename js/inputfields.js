const allinputfields = document.querySelectorAll(".inputfields");
allinputfields.forEach((inputfield) => {
inputfield.addEventListener("input",()=>{
    if(inputfield.value !== "") {
        inputfield.parentElement.querySelector(".input-labels").classList.add("focused");
    }
    else {
        inputfield.parentElement.querySelector(".input-labels").classList.remove("focused");
    }
})
});
