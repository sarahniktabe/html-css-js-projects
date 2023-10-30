const btn = document.querySelector(".my-btn");
const alertBox = document.querySelector(".alert-box ");

btn.addEventListener("click", function () {
  showAlertBox();
});

function showAlertBox() {
  if (alertBox.classList.contains("hidden")) {
    alertBox.classList.remove("hidden");
  }
}

