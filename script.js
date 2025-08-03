window.onload = function () {
  const select = document.getElementById("porcentaje");
  for (let i = 1; i <= 100; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = `${i}%`;
    select.appendChild(option);
  }
};

function convertir() {
  const base = parseFloat(document.getElementById("numeroBase").value);
  const porcentaje = parseInt(document.getElementById("porcentaje").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(base) || isNaN(porcentaje)) {
    resultado.textContent = "Ingresa un número y selecciona un porcentaje.";
    return;
  }

  const resultadoFinal = ((base * porcentaje) / 100).toFixed(2);
  resultado.textContent = `${porcentaje}% de ${base} es ${resultadoFinal}`;
}

function resetear() {
  document.getElementById("numeroBase").value = "";
  document.getElementById("porcentaje").selectedIndex = 0;
  document.getElementById("resultado").textContent = "";
}