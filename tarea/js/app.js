import estudiantes, { curso } from "./datos.js";
import reporte from "./calculos.js";

const nuevo = { ...estudiantes[0], nombre: "Ana María" };
const todos = [...estudiantes, nuevo];

console.log(`Curso: ${curso}`);

const lista = document.querySelector("#reportes");
todos.forEach((estudiante) => {
  const texto = reporte(estudiante);
  console.log(texto);
  lista.innerHTML += `<li>${texto}</li>`;
});
