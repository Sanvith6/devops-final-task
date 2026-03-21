// SIDEBAR TOGGLE
function toggleSidebar() {
  document.querySelector(".sidebar").classList.toggle("collapsed");
  document.querySelector(".main").classList.toggle("collapsed");
}

// DARK MODE
function toggleTheme() {
  document.body.classList.toggle("dark");

  // save theme
  let theme = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", theme);
}

// LOAD SAVED THEME
(function () {
  let savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }
})();