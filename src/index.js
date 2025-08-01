import "./styles.css";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

const changeClass = (newClass, builder) => {
  const content = document.getElementById("content");
  let currClass = content.className;
  if (currClass != newClass) {
    content.innerHTML = "";
    content.classList.replace(currClass, newClass);
    builder();
  }
};

document.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
  }
});

window.addEventListener(
  "DOMContentLoaded",
  function () {
    // on load, sethome should run by itself so the page is not blank
  },
  false,
);
