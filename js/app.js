//toggle between main and result page
let showResultBtn = document.getElementById("showResultPage");
let returnBtn = document.getElementById("goback");
showResultBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.location.href = "./search-results.html";
});
returnBtn.addEventListener("click", () => {
  document.location.href = "./index.html";
});

//get api from congress
