const testFunction = () => {
   let n = 4;
   let a = 2;
   let b = 2;
   let c = 2;
   showResult(legalAge(student));
};
function greet() {
   return "Hola mundo";
}
const square = (n) => n * n;

const cubo = (x) => x * x * x;

const sum = (a, b) => a + b;

//ejercicio
const tipoTriangulo = (a, b, c) => {
   if (a == b && b == c) {
      return "Equilatero";
   } else if (a == b || b == c || a == c) {
      return "Isosceles";
   } else {
      return "escaleno";
   }
};

//ejercicio 2
const sumaValores = (n) => {
   let sum = 0;
   let array = [];
   for (let i = 1; i <= n; i++) {
      array.push(i);
      sum += i;
   }
   console.log(sum);
   return array;
};

const test1 = () => {
   let values = [2, 3, 4];
   console.log(values);
   values.push(20);
   return values;
};

const find = (arr, x) => {
   for (let element of arr) {
      if (element == x) {
         return true;
      }
   }
   return false;
};

const showMatriz = () => {
   const values = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
   ];
};

function showResult(result) {
   document.getElementById("Textarea").value = result;
}

student = { nombre: "Juan", apellido: "Perez", edad: 22 };

const getFullName = (x) => x.nombre + " " + x.apellido;

const legalAge = (student) =>
   student.edad >= 18 ? "Mayor de edad" : "Menor de edad";
