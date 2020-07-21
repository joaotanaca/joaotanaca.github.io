window.addEventListener("DOMContentLoaded", () => {
  localStorage.getItem("theme") && setTheme(localStorage.theme);
});

const { dark, light } = {
  dark: "/assets/styles/dark.css",
  light: "/assets/styles/light.css",
};

function switchMode() {
  const button = document.querySelector("#switch");
  button.className =
    button.className === "" || button.className === "desactived"
      ? "active"
      : "desactived";
  setTheme();
}

function setTheme(theme = "") {
  const button = document.querySelector("#switch");
  const cssTheme = document.querySelector("#theme");
  //Se tema não for string vazia, ativa o botão
  if (theme) {
    if (theme === "dark") {
      button.className = button.className === "" ? "active" : "";
      cssTheme.setAttribute("href", dark);
    }
    return;
  }

  const includesLight = cssTheme.getAttribute("href").includes("light");

  cssTheme.setAttribute("href", includesLight ? dark : light);

  localStorage.setItem("theme", includesLight ? "dark" : "light");

  return;
}
