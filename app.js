//Variables:

let titulos = document.querySelectorAll(".title");
let texto = document.querySelector(".text");
let parrafos = document.querySelectorAll("p");
let foto_direccion = document.querySelectorAll(".icon")[0];
let foto_correo = document.querySelectorAll(".icon")[1];
let foto_telefono = document.querySelectorAll(".icon")[2];
let foto_Redes = document.querySelectorAll("i");
let etiquetas = document.querySelectorAll("label");
let boton = document.querySelector(".btn");

titulos[0].insertAdjacentHTML("beforeend", "Mantengámonos en Contacto");
titulos[1].insertAdjacentHTML("beforeend","Contáctanos");

foto_direccion.src ="img/location.png";
foto_correo.src="img/email.png" ;
foto_telefono.src="img/phone.png";

parrafos[0].insertAdjacentHTML("beforeend","Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepedolorum adipisci recusandae praesentium dicta!");
parrafos[1].insertAdjacentHTML("beforeend","Bucaramanga - Santander");
parrafos[2].insertAdjacentHTML("beforeend","correoejemplo@dominio.com");
parrafos[3].insertAdjacentHTML("beforeend","123-456-789");
parrafos[4].insertAdjacentHTML("beforeend","Conéctate con Nosotros:");

foto_Redes[0].classList.add("fa-facebook-f");
foto_Redes[1].classList.add("fa-twitter");
foto_Redes[2].classList.add("fa-instagram");
foto_Redes[3].classList.add("fa-linkedin-in");

etiquetas[0].insertAdjacentHTML("beforeend","Usuario");
etiquetas[1].insertAdjacentHTML("beforeend","Correo Electrónico");
etiquetas[2].insertAdjacentHTML("beforeend","Teléfono");
etiquetas[3].insertAdjacentHTML("beforeend","Mensaje");

boton.value = "Enviar";
