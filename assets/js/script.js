const thumbnailEls = document.querySelectorAll(".thumbnail");
const carouselEl = document.querySelector(".caousel");
const videoEl = document.getElementById("video");
const videoSourceEl = document.getElementById("source");

thumbnailEls.forEach((thumbnailEl) =>
  thumbnailEl.addEventListener("click", handleChange)
);

function parseUrl(url) {
  const urlArray = url.split("#");
  const videoUrlName = urlArray[1];
  const videoPathName = `./assets/videos/video_${videoUrlName}.mp4`;

  if (videoUrlName.length > 1) {
    videoEl.pause();
    videoSourceEl.removeAttribute("src");
    videoSourceEl.setAttribute("src", videoPathName);
    videoEl.load();
  } else {
    return;
  }
}

function handleChange(e) {
  const videoUrl = e.target.dataset.src;
  const videoName = e.target.dataset.name.toString();
  videoEl.pause();
  videoSourceEl.removeAttribute("src");
  videoSourceEl.setAttribute("src", videoUrl);
  videoEl.load();
  const urlArray = window.location.href.split("#");
  const baseUrl = urlArray[0];
  window.location = `${baseUrl}#${videoName}`;
}

parseUrl(window.location.href);
