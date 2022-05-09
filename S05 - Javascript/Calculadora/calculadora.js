let resultados = [];
const textArea = document.getElementById("resultados");

function showResult(func) {
   document.getElementById("resultado").value = func;
   resultados.unshift(func);
   textArea.innerHTML = "";
   resultados.forEach((res) => {
      let element = document.createElement("p");
      element.style = "margin: 0;";
      element.textContent = res;
      textArea.appendChild(element);
   });
}

const valores = () => {
   a = document.getElementById("inputA").value;
   b = document.getElementById("inputB").value;
   return [a, b];
};

const mult = (a, b) => +a * +b;
const sum = (a, b) => +a + +b;
const clean = () => {
   document.getElementById("inputA").value = "";
   document.getElementById("inputB").value = "";
   document.getElementById("resultado").value = "";
};

document.getElementById("btnMult").onclick = function () {
   const values = valores();
   showResult(mult(values[0], values[1]));
};

document.getElementById("btnSum").onclick = function () {
   const values = valores();
   showResult(sum(values[0], values[1]));
};

document.getElementById("btnClean").onclick = function () {
   clean();
};
