const body = document.querySelector('body');
const btn = document.querySelector(".mode-toggler");
let btntext = document.querySelector(".mode-toggler p");
const btnicon = document.querySelector(".mode-toggler img");
const theme = localStorage.getItem('theme');

//-- change current theme
btn.onclick = () => {
  theme == "dark"
    ? localStorage.setItem("theme", "light")
    : localStorage.setItem("theme", "dark")
  // text toggler
  btntext.textContent = btntext.textContent == "DARK" ? "LIGHT" : "DARK";
  // icon toggler
  btntext.textContent == "DARK"
    ? btnicon.setAttribute("src", "./publics/assets/icons/icon-moon.svg")
    : btnicon.setAttribute("src", "./publics/assets/icons/icon-sun.svg")
  // class-theme toggler
  body.classList.toggle('dark')
}

//-- read current theme
if (theme == "dark") {
  btntext.textContent = "DARK"
  btnicon.setAttribute("src", "./publics/assets/icons/icon-moon.svg")
  body.classList.add("dark")
} else {
  btntext.textContent = "LIGHT"
  btnicon.setAttribute("src", "./publics/assets/icons/icon-sun.svg")
  body.classList.remove("darl")
}