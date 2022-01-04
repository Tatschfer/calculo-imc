function calculaIMC(){
    document.getElementById("altura").style.borderColor="#ffffff";
    document.getElementById("altura").style.backgroundColor="#ffffff";
    document.getElementById("peso").style.borderColor="#ffffff";
    document.getElementById("peso").style.backgroundColor="#ffffff";

    if (document.getElementById("peso").value === ""){
        Swal.fire({
            text: 'Preencha seu peso!',
          })
        document.getElementById("peso").style.backgroundColor="#f0c7e7"
        document.getElementById("peso").focus();
        return false;
    }

    if(document.getElementById("altura").value === ""){
        Swal.fire({
            text: 'Preencha sua altura!',
          })
        document.getElementById("altura").style.backgroundColor="#f0c7e7"
        document.getElementById("altura").focus();
        return false;
    }

    var peso= parseFloat(document.getElementById("peso").value);
    var altura=parseFloat(document.getElementById("altura").value);
    var resultado = peso/(altura*altura);
    Swal.fire({
        text: 'Seu IMC é: ' + resultado,
      })

    return true;
}