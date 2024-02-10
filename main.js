// ========================= hide show the more options popup in sidebar menu =========================
const moreoptionspopupcontainer = document.querySelector(
  ".moreoptionspopupcontainer"
);
const moreoptionspopupbtn = document.querySelector(".moreoptionspopupbtn");
moreoptionspopupbtn.addEventListener("click", () => {
  moreoptionspopupcontainer.classList.toggle("openclose");
});
