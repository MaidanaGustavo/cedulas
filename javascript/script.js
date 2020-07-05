function inicia() {
  let cedulas = document.getElementById("cedulas");
  cedulas.style.visibility = "hidden";
}

function executa() {
  let val = document.getElementById("valor");
  let valor = parseInt(val.value);
  limpar();

  while (valor >= 1) {
    if (valor >= 100) {
      document.getElementById("cemQuantidade").innerHTML =
        "" + parseInt(valor / 100) + "";
      document.getElementById("cem").style.visibility = "visible";
      valor = valor % 100;
    }

    if (valor >= 50) {
      console.log(valor + "a2");
      document.getElementById("cinquentaQuantidade").innerHTML =
        "" + parseInt(valor / 50) + "";
      document.getElementById("cinquenta").style.visibility = "visible";
      valor = valor % 50;
    }

    if (valor >= 20) {
      document.getElementById("vinteQuantidade").innerHTML =
        "" + parseInt(valor / 20) + "";
      document.getElementById("vinte").style.visibility = "visible";
      valor = valor % 20;
    }
    if (valor >= 10) {
      document.getElementById("dezQuantidade").innerHTML =
        "" + parseInt(valor / 10) + "";
      document.getElementById("dez").style.visibility = "visible";
      valor = valor % 10;
    }

    if (valor >= 5) {
      document.getElementById("cincoQuantidade").innerHTML =
        "" + parseInt(valor / 5) + "";
      document.getElementById("cinco").style.visibility = "visible";
      valor = valor % 5;
    }

    if (valor >= 2) {
      document.getElementById("doisQuantidade").innerHTML =
        "" + parseInt(valor / 2) + "";
      document.getElementById("dois").style.visibility = "visible";
      valor = valor % 2;
    }

    if (valor >= 1) {
      document.getElementById("umQuantidade").innerHTML =
        "" + parseInt(valor / 1) + "";
      document.getElementById("um").style.visibility = "visible";
      valor = valor % 1;
    }
  }
}

function limpar() {
  document.getElementById("um").style.visibility = "hidden";
  document.getElementById("dois").style.visibility = "hidden";
  document.getElementById("cinco").style.visibility = "hidden";
  document.getElementById("dez").style.visibility = "hidden";
  document.getElementById("vinte").style.visibility = "hidden";
  document.getElementById("cinquenta").style.visibility = "hidden";
  document.getElementById("cem").style.visibility = "hidden";
}
