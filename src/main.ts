import './style.css'
import 'bootstrap/dist/css/bootstrap.css'


document.addEventListener("DOMContentLoaded", () => {
  //const frameForm = document.getElementById("frameForm") as HTMLFormElement;
  const urlInput = document.getElementById("urlInput") as HTMLInputElement;
  const imageWidthInput = document.getElementById("imageWidthInput") as HTMLInputElement;
  const frameThicknessInput = document.getElementById("frameThicknessInput") as HTMLInputElement;
  const frameColorInput = document.getElementById("frameColorInput") as HTMLInputElement;
  const outPutImage = document.getElementById("outPutImage") as HTMLImageElement;
  const darkModeToggle = document.getElementById("darkModeToggle") as HTMLButtonElement;
  

  // frameForm.addEventListener("submit", e => {
  //   e.preventDefault();
  //   outPutImage.src = urlInput.value;
  //   outPutImage.style.width = imageWidthInput.value + "px";
  //   outPutImage.style.borderWidth = frameThicknessInput.value + "px";
  //   outPutImage.style.borderStyle = "solid"
  //   outPutImage.style.borderColor = frameColorInput.value;
  // })

  urlInput.addEventListener("change", () => {
    outPutImage.src = urlInput.value;
    outPutImage.style.borderStyle = "solid"
  })

  imageWidthInput.addEventListener("input", () => {
     outPutImage.style.width = imageWidthInput.value + "px";
  })

  frameThicknessInput.addEventListener("input", () => {
    outPutImage.style.borderWidth = frameThicknessInput.value + "px";
  })

  frameColorInput.addEventListener("input", () => {
    outPutImage.style.borderColor = frameColorInput.value;
  })

  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode")
  })
})