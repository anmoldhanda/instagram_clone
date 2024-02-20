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
// by default the left icon needs to hide itself if the user's haven't scrolled anything yet
scrollstoryleft.style.opacity = 0;
function scrollhorizontally(inputscrolldirection) {
  currentscrollpositions += inputscrolldirection * scrollamount;
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

const allpostcommentinputcontainers = document.getElementsByClassName(
  "post-comment-input-container"
);
const showallpostscommentscontainer = document.getElementsByClassName(
  "show-posts-comments-container"
);
let postcommentsarr = [];
Array.from(allpostcommentinputcontainers).forEach(
  (singlepostcommentinputcontainer) => {
    // ============== get particular's post's comment input field from post comment container ==============
    const postcommentsform =
      singlepostcommentinputcontainer.querySelector(".postcommentsform");
    const postcommentinputfield = singlepostcommentinputcontainer.querySelector(
      ".post-comment-inputfield"
    );
    let postcommentformsubmission = false;
    const postcommentbtn = document.createElement("button");
    postcommentbtn.className = "postcommentsbtn";
    postcommentbtn.textContent = "post";
    // ==================== append the postcommentbtn to each postcommentinputcontainer ====================
    singlepostcommentinputcontainer.appendChild(postcommentbtn);
    postcommentinputfield.onkeyup = function () {
      if (postcommentinputfield.value.trim() === "") {
        // =================== check if input field's value is not empty from right left ===================
        postcommentbtn.style.display = "none";
        postcommentformsubmission = false;
      } else {
        postcommentbtn.style.display = "block";
        postcommentformsubmission = true;
      }
      // =================================== real time commenting on post ===================================
      postcommentsform.addEventListener("submit", (e) => {
        e.preventDefault();
        if (postcommentformsubmission) {
          let postcommentptag = document.createElement("p");
          let userpostcomment = postcommentinputfield.value.trim();
          postcommentptag.textContent = userpostcomment;
          postcommentsarr.push(userpostcomment);
          Array.from(showallpostscommentscontainer).forEach(
            (singlepostcommentscontainer) => {
              singlepostcommentscontainer.appendChild(
                postcommentptag.cloneNode(true)
              );
            }
          );
          localStorage.setItem("userpostcomment", userpostcomment);
          postcommentsform.reset();
          console.log("comment posted successfully");
        } else {
          console.log("please enter a comment before posting");
          postcommentsform.reset();
        }
      });
    };
  }
);

// =================== currentloggedinusername is the username of logged in user the nickname is just the secondary text which is not so hardly stricted for login signup authentication ===================
const currentloggedinusername = document.getElementById(
  "currentloggedinusername"
);
const logoutbtn = document.getElementById("logoutbtn");

let currentloggedinuser = localStorage.getItem("currentuserdetails")
  ? localStorage.getItem("currentuserdetails")
  : "";
currentloggedinusername.innerHTML = currentloggedinuser;
if (currentloggedinuser == "") {
  location.href = "login.html";
}
logoutbtn.onclick = function () {
  location.href = "login.html";
  localStorage.removeItem("currentuserdetails");
};

// ==================================== show hide the create post popup ====================================
const createpostpopupbtn = document.querySelector(".createpostpopupbtn");
const crossiconoverlay = document.querySelector(".crossicon-overlay");
const overlaycontainer = document.querySelector(".overlay-container");
const body = document.body;
createpostpopupbtn.addEventListener("click", () => {
  overlaycontainer.style.display = "block";
  body.classList.add("active");
  document.title = "Create new post • Instagram";
});
crossiconoverlay.addEventListener("click", () => {
  overlaycontainer.style.display = "none";
  body.classList.remove("active");
  document.title = "Instagram";
});

const inputfile = document.getElementById("inputfile");
const fakeinputfilebtn = document.querySelector(".fake-inputfile-btn");
const inputfilecontainer = document.querySelector(".inputfilecontainer");
fakeinputfilebtn.addEventListener("click", (e) => {
  inputfile.click();
});
inputfile.addEventListener("change", (e) => {
  console.log(e.target.files[0]);
  let selectedimagefileurl = URL.createObjectURL(e.target.files[0]);
  console.log(selectedimagefileurl);
  let imagetag = document.createElement("img");
  imagetag.src = selectedimagefileurl;
  imagetag.className = "selectedimagefilepost";
  inputfilecontainer.innerHTML = "";
  fakeinputfilebtn.style.display = "none";
  inputfilecontainer.appendChild(imagetag);
});
