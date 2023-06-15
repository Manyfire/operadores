//estructura del condicional
/*const usuario = {
  edad: 17,
  pais: 'Canada',
  ticket: true,
};

if(usuario.edad > 21) {
  console.log('el usuario es mayor de edad y puede comprar alcool');
}
else {
  console.log('No puede comprar alcool porque el usuario es menor de edad');
};
*/
//-----------------------
const usuario = {
  edad: 12,
  pais: 'Canada',
  ticket: true,
};

/*if(usuario.edad >= 21 && usuario.ticket ){
  console.log('el usuario puede entrar al concierto de metalica');
}
else if(usuario.edad >= 21 && usuario.ticket == false){
  console.log('el usuario tiene la edad pero No tiene Ticket para el concierto de metalica');
}
else {
  console.log('el usuario no tiene la edad requerida para entrar al concierto de metalica');
};*/

//otra manera
if(usuario.edad >= 18){
  if(usuario.ticket){
    console.log('el usuario puede entrar al concierto de metalica');
  }
  else{
    console.log('el usuario No tiene ticket para entrar al concierto de metalica');
  }
}
else {
  console.log('el usuario es menor de edad y no tiene la edad requerida para entrar al concierto de metalica');
}
//=================================
window.onload= inicio ;
function inicio() {
  
  document.getElementById('botonSubmit').onclick =accion;

}

function accion(){
  const usuarioName= document.getElementById('usuarioName').value ;
  const age= document.getElementById('age').value ;
  const reponces= document.querySelector('.reponces');
  
  const billetOui= document.getElementById('ticketOui').value ;

  // 1# pregunta si tiene ticket?
 
  if(billetOui === "oui" || billetOui === "Oui"){
    if(usuarioName !== "" && age > 21){
      reponces.innerHTML= `<br> <b>${usuarioName}</b> <br> Felicitacion! Usted tiene billet para entrar al concierto!`;
    }
  }
  else if(billetOui !== "oui") {
    reponces.innerHTML= `<br> <b>${usuarioName}</b> <br> Lo siento, no tienes billet para entrar al concierto!`;
  }
 
  
}
