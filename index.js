const btn = document.getElementById("btn");
const elemento = document.getElementById("elemento");

let State = false;

if (State) {
  for (let i = 0; i < 5; i++) {
    // Cambia el color de fondo 5 veces
    setTimeout(() => {
      elemento.style.backgroundColor = ChangeFondo();
    }, i * 1000); // Espera i segundos antes de cambiar el color
  }
}

const ChangeFondo = () => {
  let R = Math.floor(Math.random() * 255);
  let G = Math.floor(Math.random() * 255);
  let B = Math.floor(Math.random() * 255);

  let Color = `rgb(${R},${G},${B})`;
  console.log(R);

  return Color;
};

const ChangeColor = () => {
  console.log(elemento.style.backgroundColor);
  console.log(ChangeFondo());
  if (State) {
    document.documentElement.style.setProperty("--colorFondo", "#faeed6");
    document.documentElement.style.setProperty("--colorLetras", "#e9ab57");
  } else {
    document.documentElement.style.setProperty("--colorLetras", "#faeed6");
    document.documentElement.style.setProperty("--colorFondo", "#3d1d0d");
  }
  State = !State;
};
btn.addEventListener("click", () => ChangeColor());
