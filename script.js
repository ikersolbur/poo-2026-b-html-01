const btnSaludar  = document.getElementById('btn-saludar');
let mensajeMostrado =false;
console.log(btnSaludar);

btnSaludar.addEventListener('click',function(){

const seccionContacto = document.getElementById('Contacto');
    console.log('click')
    if(!mensajeMostrado){
    const mensaje = document.createElement('p');
    mensaje.textContent='gracias por tu visita';
    mensaje.style.color= '#2f5a6a';
    mensaje.style.fontWeight='bold';

    seccionContacto.appendChild(mensaje);
    mensajeMostrado=true;
    btnSaludar.textContent="mensaje enviado"
    btnSaludar.disabled=true;
    btnSaludar.style.backgroundColor='#bdc3c7'
    }

})