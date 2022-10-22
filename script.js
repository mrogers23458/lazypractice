const catBtn = document.getElementById("clickme");
const renderHelloBtn = document.getElementById("renderHello");
class App {
  constructor(state) {
    this.state = state;
  }
}

const myApp = new App(null);
console.log(myApp);

function greeter() {
  console.log("hello");
}
function handleRenderCatImage(e) {
  e.preventDefault();
  console.log("working");
  myApp.state = "hello";
  console.log(myApp);
  const catImg = document.querySelector(".lazy");
  catImg.setAttribute("src", "catimage.jpg");
}

function render() {
  if (myApp.state === "hello") {
    window.location = "hello.html";
  }
}

function renderHello(e) {
  e.preventDefault();
  myApp.state = "hello";
  render();
}

catBtn.addEventListener("click", handleRenderCatImage);
renderHelloBtn.addEventListener("click", renderHello);
