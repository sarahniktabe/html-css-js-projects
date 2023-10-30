const btn = document.querySelector(".my-btn");
const alertBox = document.querySelector(".alert-box ");
let timer;

btn.addEventListener("click", function () {
  showAlertBox();
});

function showAlertBox() {
  alertBox.classList.add("show");
  alertBox.classList.remove("hide");
  if (alertBox.classList.contains("hidden")) {
    alertBox.classList.remove("hidden");
  }
  timer = setTimeout(function () {
    hideAlertBox();
  }, 3000);
}

function hideAlertBox() {
  alertBox.classList.remove("show");
  alertBox.classList.add("hide");
}
