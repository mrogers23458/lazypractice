const btn = document.getElementById("clickme");

function handleRenderCatImage(e) {
  e.preventDefault();
  console.log("working");
  const catImg = document.querySelector(".lazy");
  catImg.setAttribute("src", "catimage.jpg");
}

btn.addEventListener("click", handleRenderCatImage);
