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

// =================== currentloggedinusername is the username of logged in user the nickname is just the secondary text which is not so hardly stricted for login signup authentication ===================
const currentloggedinusername = document.getElementById(
  "currentloggedinusername"
);
const logoutbtn = document.getElementById("logoutbtn");

// =================== stored the current user's login credentials in encryped format in client side ===================
let currentloggedinuser = localStorage.getItem("Y3VycmVudHVzZXJkZXRhaWxz")
  ? localStorage.getItem("Y3VycmVudHVzZXJkZXRhaWxz")
  : "";
currentloggedinusername.innerHTML = atob(currentloggedinuser);
if (currentloggedinuser == "") {
  location.href = "login.html";
}
logoutbtn.onclick = function () {
  location.href = "login.html";
  localStorage.removeItem("Y3VycmVudHVzZXJkZXRhaWxz");
};

const createpostformusername = document.getElementById(
  "createpostformusername"
);
createpostformusername.innerHTML = atob(
  localStorage.getItem("Y3VycmVudHVzZXJkZXRhaWxz")
);
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
  // console.log(e.target.files[0]);
  let selectedimagefileurl = URL.createObjectURL(e.target.files[0]);
  // ======================== created a blob url from the user's selected image file ========================
  console.log(selectedimagefileurl);
  let imagetag = document.createElement("img");
  imagetag.src = selectedimagefileurl;
  imagetag.className = "selectedimagefilepost";
  inputfilecontainer.innerHTML = "";
  fakeinputfilebtn.style.display = "none";
  inputfilecontainer.appendChild(imagetag);
});

const postscontainer = document.querySelector(".posts-container");
const createpostform = document.getElementById("createpostform");
const inputpostcaption = document.getElementById("inputpostcaption");
const inputpostlocationaddress = document.getElementById(
  "input-post-location-address"
);
let postdivarr = [];
createpostform.addEventListener("submit", (e) => {
  e.preventDefault();
  let file = inputfile.files[0];
  // ================== user's uploaded post's caption and location stored in client side in encrypted format ==================
  let postextdetails = {
    postcaption: btoa(inputpostcaption.value),
    postlocationaddress: btoa(inputpostlocationaddress.value),
  };
  const filereader = new FileReader();
  // ==================== converted the image file into base 64 url using filerader api ====================
  filereader.addEventListener("load", (e) => {
    console.log(filereader.result);
    localStorage.setItem("postpic", filereader.result);
    renderphotos();
  });
  filereader.readAsDataURL(file);
  localStorage.setItem(btoa("postextdetails"), JSON.stringify(postextdetails));
  createpostform.reset();
  inputfilecontainer.innerHTML = "";
  overlaycontainer.style.display = "none";
  body.classList.remove("active");
  document.title = "Instagram";
});

function renderphotos() {
  postscontainer.innerHTML = "";
  for (let index = 0; index < localStorage.length; index++) {
    let postkey = localStorage.key(index);
    if (postkey.startsWith("postpic")) {
      let postdiv = document.createElement("div");
      postdiv.className = "posts";
      let postcontentmaincontainer = document.createElement("div");
      postcontentmaincontainer.className = "posts-maincontent-container";
      postcontentmaincontainer.innerHTML = `<div class="posts-maincontent-container">
      <div class="posted-userdetails-container">
        <div class="posted-userdetails-box">
          <div class="photobox">
            <img
              src="images/profilepic.jpg"
              alt="posted user's profile pic"
              class="profilepic"
            />
          </div>
          <div class="userdetails-inner-box">
          <!-- ====================== retrieved the post information from client side in decrypted format ====================== -->
            <h3 class="posted-username">${atob(
              localStorage.getItem("Y3VycmVudHVzZXJkZXRhaWxz")
            )}<span class="timestamp">1d</span></h3>
            <p class="location">${atob(
              JSON.parse(localStorage.getItem("cG9zdGV4dGRldGFpbHM="))
                .postlocationaddress
            )}</p>
          </div>
        </div>
        <div class="posts-otheroptions-container">
          <svg
            aria-label="More options"
            class="x1lliihq x1n2onr6 x5n08af"
            fill="currentColor"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <title>More options</title>
            <circle cx="12" cy="12" r="1.5"></circle>
            <circle cx="6" cy="12" r="1.5"></circle>
            <circle cx="18" cy="12" r="1.5"></circle>
          </svg>
        </div>
      </div>
      <div class="usersfeedcontentpost">
        <img
          src="${localStorage.getItem("postpic")}"
          alt="user's posted photo"
          class="userfeedpic"
        />
      </div>
      <div class="post-activity-container">
        <div class="post-activity-inner-container">
          <div class="likeicon"><i class="fa-regular fa-heart"></i>
          </div>
          <div class="commenticon">
            <svg
              aria-label="Comment"
              class="x1lliihq x1n2onr6 x5n08af"
              fill="currentColor"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <title>Comment</title>
              <path
                d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                fill="none"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
            </svg>
          </div>
          <div class="shareicon">
            <svg
              aria-label="Share Post"
              class="x1lliihq x1n2onr6 x1roi4f4"
              fill="currentColor"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <title>Share Post</title>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="2"
                x1="22"
                x2="9.218"
                y1="3"
                y2="10.083"
              ></line>
              <polygon
                fill="none"
                points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="2"
              ></polygon>
            </svg>
          </div>
        </div>
        <div class="collections-activity-container">
          <div class="saveicon">
            <svg
              aria-label="Save"
              class="x1lliihq x1n2onr6 x5n08af"
              fill="currentColor"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <title>Save</title>
              <polygon
                fill="none"
                points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></polygon>
            </svg>
          </div>
        </div>
      </div>
      <div class="captions-otherdetails-container">
        <div class="relateduser-likedby-activity">
          <p class="likedbytext">
            Liked by
            <h3 class="likedusername posted-usename">__bottom.g__</h3>
            and others
          </p>
        </div>
        <div class="user-post-caption-container">
          <h3 class="posted-username">${atob(
            localStorage.getItem("Y3VycmVudHVzZXJkZXRhaWxz")
          )}</h3>
          <p class="usercaptiontext">${atob(
            JSON.parse(localStorage.getItem("cG9zdGV4dGRldGFpbHM=")).postcaption
          )}</p>
        </div>
        <div class="show-posts-comments-container">
          <p class="commentsheadline">view all 23,502 comments</p>
        </div>
        <div class="post-comments-container">
          <div class="post-comment-input-container">
            <form action="#" method="post" class="postcommentsform">
              <input type="text" name="postcomment" placeholder="Add a Comment..." class="post-comment-inputfield">
            </form>
          </div>
        </div>
      </div>
    </div>`;
      postdiv.appendChild(postcontentmaincontainer);
      postdivarr.push(postdiv);
    }
  }
  postdivarr.forEach((singlepostdiv) => {
    postscontainer.appendChild(singlepostdiv);
  });
}
renderphotos();

// =========================== like unlike the post according to the user's click ===========================
const hearticon = document.querySelectorAll(".likeicon i");
Array.from(hearticon).forEach((singlehearticon) => {
  singlehearticon.addEventListener("click", () => {
    if (singlehearticon.classList.contains("fa-regular")) {
      singlehearticon.setAttribute("title", "Unlike");
      singlehearticon.classList.add("fa-solid");
      singlehearticon.classList.remove("fa-regular");
    } else {
      singlehearticon.setAttribute("title", "Like");
      singlehearticon.classList.add("fa-regular");
      singlehearticon.classList.remove("fa-solid");
    }
  });
});

// =========================== comment on the particular post ===========================
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
              singlepostcommentscontainer.appendChild(postcommentptag);
              postcommentptag.innerHTML = JSON.parse(
                localStorage.getItem("userpostcomment")
              )
                ? JSON.parse(localStorage.getItem("userpostcomment"))
                : "";
            }
          );
          localStorage.setItem(
            "userpostcomment",
            JSON.stringify(userpostcomment)
          );
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
