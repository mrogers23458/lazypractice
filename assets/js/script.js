//elements
const thumbnailEls = document.querySelectorAll(".thumbnail");
const carouselEl = document.querySelector(".caousel");
const videoEl = document.querySelector("video");
const videoSourceEl = document.getElementById("source");
const backBtnEl = document.querySelector(".button--slider--back");
const forwardBtnEl = document.querySelector(".button--slider--forward");

const carouselStateObj = {
  previousX: 0,
  newX: 0,
  currentX: 0,
};

//listeners
thumbnailEls.forEach((thumbnailEl) =>
  thumbnailEl.addEventListener("click", handleChange)
);
backBtnEl.addEventListener("click", handleSlideBack);
forwardBtnEl.addEventListener("click", handleSlideForward);

//functions
function handleSlideBack(e) {
  console.log(`${e.target.dataset.x} clicked`);
  console.log(`previous X was ${carouselStateObj.previousX}`);
  carouselStateObj.newX = carouselStateObj.previousX - 1;
  carouselStateObj.previousX += -1;
  console.log(`new X = ${carouselStateObj.newX}`);
}
function handleSlideForward(e) {
  console.log(`${e.target.dataset.x} clicked`);
  console.log(`previous X was ${carouselStateObj.previousX}`);
  carouselStateObj.newX = carouselStateObj.previousX + 1;
  carouselStateObj.previousX += 1;
  console.log(`new X = ${carouselStateObj.newX}`);
}

function parseUrl(url) {
  const urlArray = url.split("#");
  const videoUrlName = urlArray[1];
  const videoPathName = `./assets/videos/video_${videoUrlName}.mp4`;

  if (videoUrlName?.length && videoUrlName.length > 1) {
    videoEl.pause();
    videoSourceEl.removeAttribute("src");
    videoSourceEl.setAttribute("src", videoPathName);
    videoEl.load();
  } else {
    return;
  }
}

function handleChange(e) {
  //sets url and video name based off event
  const videoUrl = e.target.dataset.src;
  const videoName = e.target.dataset.name.toString();

  //pauses, replaces, and reloads video
  videoEl.pause();
  videoSourceEl.removeAttribute("src");
  videoSourceEl.setAttribute("src", videoUrl);
  videoEl.load();

  //handles history
  const urlArray = window.location.href.split("#");
  const baseUrl = urlArray[0];
  window.location = `${baseUrl}#${videoName}`;
}

//calls
parseUrl(window.location.href);
