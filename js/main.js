// find stylesheet by index - animate.css
var animateStylesheet = document.styleSheets[3];

// turn off main page animations for repeat visitors
if (firstImpression()) {
  console.log("New user - enjoy the animations");
  animateStylesheet.disabled = false;
} else {
  console.log("Returning user - I'll disable the animations for you");
  animateStylesheet.disabled = true;
}
