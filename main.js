// ========================= hide show the more options popup in sidebar menu =========================
const moreoptionspopupcontainer = document.querySelector(
  ".moreoptionspopupcontainer"
);
const moreoptionspopupbtn = document.querySelector(".moreoptionspopupbtn");
moreoptionspopupbtn.addEventListener("click", () => {
  moreoptionspopupcontainer.classList.toggle("openclose");
});

//hide show the user's profile details when the user hover's over the specific suggested user's profile name
const firstprofileusername = document.getElementById("firstprofileusername");
const secondprofileusername = document.getElementById("secondprofileusername");
const thirdprofileusername = document.getElementById("thirdprofileusername");
const fourthprofileusername = document.getElementById("fourthprofileusername");
const firstprofileusernamedetails = document.getElementById(
  "firstprofileusernamedetails"
);
const secondprofileusernamedetails = document.getElementById(
  "secondprofileusernamedetails"
);
const thirdprofileusernamedetails = document.getElementById(
  "thirdprofileusernamedetails"
);
const fourthprofileusernamedetails = document.getElementById(
  "fourthprofileusernamedetails"
);
firstprofileusername.addEventListener("mouseover", () => {
  firstprofileusernamedetails.classList.add("showhide");
});

firstprofileusername.addEventListener("mouseout", () => {
  firstprofileusernamedetails.classList.remove("showhide");
});

secondprofileusername.addEventListener("mouseover", () => {
  secondprofileusernamedetails.classList.add("showhide");
});

secondprofileusername.addEventListener("mouseout", () => {
  secondprofileusernamedetails.classList.remove("showhide");
});

thirdprofileusername.addEventListener("mouseover", () => {
  thirdprofileusernamedetails.classList.add("showhide");
});

thirdprofileusername.addEventListener("mouseout", () => {
  thirdprofileusernamedetails.classList.remove("showhide");
});

fourthprofileusername.addEventListener("mouseover", () => {
  fourthprofileusernamedetails.classList.add("showhide");
});

fourthprofileusername.addEventListener("mouseout", () => {
  fourthprofileusernamedetails.classList.remove("showhide");
});

// ========================= move story slider in right left positions =========================
const storyscrollcontainer = document.querySelector(".story-scroll-container");
const storiescontainer = document.querySelector(".stories-container");
let scrollstoryleft = document.getElementById("scrollstoryleft");
let scrollstoryright = document.getElementById("scrollstoryright");
let currentscrollpositions = 0;
let scrollamount = 320;
let maxscroll =
  -storiescontainer.offsetWidth + storyscrollcontainer.offsetWidth;
scrollstoryleft.style.opacity = 0;
function scrollhorizontally(inputdirection) {
  currentscrollpositions += inputdirection * scrollamount;
  if (currentscrollpositions > 0) {
    currentscrollpositions = 0;
    scrollstoryright.style.opacity = 0;
  } else {
    scrollstoryright.style.opacity = 1;
  }
  if (currentscrollpositions < maxscroll) {
    currentscrollpositions = maxscroll;
    scrollstoryleft.style.opacity = 0;
  } else {
    scrollstoryleft.style.opacity = 1;
  }
  storiescontainer.style.left = currentscrollpositions + "px";
}
