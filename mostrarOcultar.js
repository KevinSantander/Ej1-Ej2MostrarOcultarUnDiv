let caja = document.createElement("div");
let cuerpo = document.querySelector("body");
cuerpo.appendChild(caja);

let parrafo = document.createElement("p");
let texto = document.createTextNode("Vamos a ocultar este DIV!");
parrafo.appendChild(texto);
caja.appendChild(parrafo);

const img = document.createElement("img");
img.src =
  "https://talently.tech/blog/wp-content/uploads/2022/02/%C2%BFQue-es-un-framework-en-programacion-scaled.jpg";
caja.appendChild(img);

const boton = document.createElement("button");
boton.appendChild(document.createTextNode("muestra y oculta"));
document.body.appendChild(boton);

const boton2 = document.createElement("button");
boton2.appendChild(document.createTextNode("muestra y oculta"));
document.body.appendChild(boton2);

const boton3 = document.createElement("button");
boton3.appendChild(document.createTextNode("muestra y oculta"));
document.body.appendChild(boton3);

boton.addEventListener("click", () => {
  caja.classList.toggle("mostrarOcultarImg");
});

boton2.addEventListener("click", () => {
  caja.classList.toggle("mostrarOcultarImg");
});

boton3.addEventListener("click", () => {
  caja.classList.toggle("mostrarOcultarImg");
});
