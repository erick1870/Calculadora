document.addEventListener("DOMContentLoaded", function () {
  let display = document.getElementById("display");
  let buttons = document.getElementsByTagName("button");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      if (this.textContent === "=") {
        try {
          let result = eval(display.value);
          display.value = Number.isInteger(result) ? result : result.toFixed(1);
        } catch (error) {
          display.value = "Error";
        }
      } else if (this.textContent === "C") {
        display.value = "";
      } else if (this.textContent === "%") {
        display.value = parseFloat(display.value) / 100;
      } else {
        if (this.textContent === "." && display.value.includes(".")) {
          return; // evitamos múltiples puntos decimales
        }

        if (display.value.length >= 12) {
          return; // 12 caracteres en pantalla
        }

        display.value += this.textContent;
      }
    });
  }
});
