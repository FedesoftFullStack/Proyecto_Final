// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .
// VARIABLES REGISTRO
var NombreROK=false;
var NumeroDocumentoROK=false;
var ContrasenaROK=false;
var ConfirmContrasenaROK=false;
var NumeroTelefonoROK=false;
var TipoDocuROK=false;
var TipoContacoROK=false;
// VARIABLES LOGIN
var NumeroDocumentoLOK=false;
var ContrasenaLOK=false;
var TipoDocuLOK=false;

// FUNCIONES COMPROBACION LOGIN

function VerificarNumeroDocumentoLogin()
{
  var DocNumber = document.getElementById("LNumdoc");
  if(DocNumber.value.length>=6)
  {
    NumeroDocumentoLOK = true;
  }else{
    NumeroDocumentoLOK = false;
  }
  HabilitarBotonLogin();
}

function VerificarTipoDocumentoLogin()
{
  var TypeDoc = document.getElementById("LTypedoc");
  if(TypeDoc.value=="#"){
    TipoDocuLOK = false;
  }else{
    TipoDocuLOK = true;
  }
  HabilitarBotonLogin();
}

function VerificarContrasenaLogin()
{
  var PassNumber = document.getElementById("LPassNum");
  if(PassNumber.value!="")
    ContrasenaLOK = true;
  else
    ContrasenaLOK = false;
  HabilitarBotonLogin();
}

function HabilitarBotonLogin()
{
  if (ContrasenaLOK&&TipoDocuLOK&&NumeroDocumentoLOK)
    document.getElementById("BTNLogin").disabled = false;
  else
    document.getElementById("BTNLogin").disabled = true;
}

// FUNCIONES COMPROBACION REGISTRO
function VerificarNumeroContacto()
{
  var TipoContacto = document.getElementById("TipoContactoR");
  var NumeroContacto=document.getElementById("NumeroContactoR");
  if(TipoContacto.value=="Celular"&&NumeroContacto.value.length==10)
    NumeroTelefonoROK=true;
    else
  if((TipoContacto.value=="Fijo"&&NumeroContacto.value.length == 7)||(TipoContacto.value=="Celular"&&NumeroContacto.value.length == 10))
  {
    NumeroTelefonoROK=true;
  }
    else {
      NumeroTelefonoROK=false;
    }
    HabilitarBoton();
}
function VerificarNombre()
{
    var Nombre = document.getElementById("NombreR");
    if(Nombre.value==""){
      NombreROK = false;
    }else{
      NombreROK = true;
    }
    HabilitarBoton();
}

function VerificarTipoDoc()
{
     HabilitarBoton();
}

function VerificarTipoContact()
{
  var TipoContacto = document.getElementById("TipoContactoR");
  var NumeroContacto=document.getElementById("NumeroContactoR");
     if(TipoContacto.value=="#"){
       TipoContacoROK = false;
     }else{
       TipoContacoROK = true;
     }
     NumeroContacto.value="";
     HabilitarBoton();
}

function VerificarContrasena()
{
  var passInput = document.getElementById("ContrasenaR");
  var confPassInput = document.getElementById("ConfirmContrasenaR");
  if((passInput.value==confPassInput.value)&&(passInput.value!=""&&confPassInput.value!="")){
    passwordError.style.display = "none";
    ContrasenaROK = true;
  }
  else
  {
    ContrasenaROK = false;
    if(confPassInput.value!=""||passInput!="")
    {
        passwordError.style.display = "block";
    }
    else
    {
        passwordError.style.display = "none";
    }
  }
  HabilitarBoton();
}
function VerificarNumeroDocumento()
{
    var NumeroDocumento = document.getElementById("NumeroDocumentoR");
    if(NumeroDocumento.value.length>=6)
    {
      NumeroDocumentoROK = true;
    }else{
      NumeroDocumentoROK = false;
    }
    HabilitarBoton();
  }
function HabilitarBoton()
{
  var TipoDoc = document.getElementById("TipoDocR");
  if(NombreROK && NumeroDocumentoROK && ContrasenaROK && NumeroTelefonoROK && !(TipoDoc.value=="#") && TipoContacoROK){
    document.getElementById("BTNRegistro").disabled = false;
  }else{
    document.getElementById("BTNRegistro").disabled = true;
  }
}

function change(sw)
{
  switch(sw)
  {
    case 0:
      pag="servicios"
    break;
    case 1:
      pag=""
    break;
    case 2:
      pag="Login&Register"
    break;
  }
  document.getElementById("Pagina").src = pag;
}
