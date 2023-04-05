let page = 1;
showPage(page);

function pageForm(n) {
  showPage(n);
}

function pageHome(n) {
  showPage(n);
}

function showPage(n) {
  let home = document.getElementById("pageHome");
  let form = document.getElementById("pageForm");
  if (n === 1) {
    form.style.display = "none";
    home.style.display = "block";
  }
  if (n === 2) {
    home.style.display = "none";
    form.style.display = "block";
  }
}
