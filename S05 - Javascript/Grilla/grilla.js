document.getElementById("Boton").onclick = function () {
   const a = document.getElementById("Filas").value;
   const b = document.getElementById("Columnas").value;

   const res = document.getElementById("resultado");
   res.innerHTML = "";
   let count = 1;
   for (let i = 1; i <= a; i++) {
      let row = document.createElement("div");
      row.classList.add("row");
      for (let j = 1; j <= b; j++) {
         let element = document.createElement("div");
         element.classList.add(
            "col-md-1",
            "border",
            "text-center",
            "btn",
            "btn-primary"
         );
         element.textContent = count;
         count++;
         row.appendChild(element);
      }
      res.appendChild(row);
   }
};
