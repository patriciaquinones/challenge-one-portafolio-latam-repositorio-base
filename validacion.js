//Haz tú validación en javascript acá
var nombre = document.querySelector(".nombreContacto");
var textarea = document.querySelector(".mensajeContacto");
var asunto = document.querySelector(".asuntoContacto");
var email = document.querySelector(".emailContacto");

function validar_email(email) {
  var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email) ? true : false;
}

document.querySelector("#boton").disabled = true; // return disabled as true whenever the input field is empty
nombre.addEventListener("keyup", cambio); // enable the button once the input field has content
email.addEventListener("keyup", cambio);
asunto.addEventListener("keyup", cambio);
textarea.addEventListener("keyup", cambio);

var todoCorrecto = true;
function cambio(event) {
  event.preventDefault();
  if (
    nombre.value === "" ||
    email.value === "" ||
    asunto.value === "" ||
    textarea.value === ""
  ) {
    // if any of the input fields are empty
    document.querySelector("#boton").disabled = true;
    // return disabled as true whenever the input field is empty
  } else {
    validacion();
    document.querySelector("#boton").disabled = false; // enable the button once the input field has content
  }
}

window.onload = function () {
  document.form.nombre.focus();
  document.form.addEventListener("submit", validacion);
};
function validacion() {
  var formulario = document.form;
  for (var i = 0; i < formulario.length; i++) {
    if (
      formulario[i].type == "text" ||
      formulario[i].type == "textarea" ||
      formulario[i].type == "email"
    ) {
      if (
        formulario[i].value == null ||
        formulario[i].value.length == 0 ||
        /^\s*$/.test(formulario[i].value)
      ) {
        alert(
          formulario[0].name +
            " no puede estar vacío o contener sólo espacios en blanco"
        );
        todoCorrecto = false;
        document.querySelector("#boton").disabled = true;
        return false;
      } else if (formulario[i].value.length >= 50) {
        alert(formulario[i].name + " No puede ser mayor a 50 caracteres");
        todoCorrecto = false;
        document.querySelector("#boton").disabled = true;
        return false;
      } else if (document.getElementById("mensagem").value.length >= 300) {
        alert(formulario[i].name + " No puede ser mayor a 300 caracteres");
        todoCorrecto = false;
        document.querySelector("#boton").disabled = true;
        return false;
      } else if (!validar_email(document.getElementById("email").value)) {
        alert("Debe de proporcionar email válido");
        todoCorrecto = false;
        document.querySelector("#boton").disabled = true;
        return false;
      }
    }
  }
  if (todoCorrecto == true) {
    document.querySelector("#boton").disabled = false; // enable the button once the input field has content
    formulario.submit();
    alert("Formulario enviado correctamente");
  }
}

