// cierra el menu cuando el usario hace click en uno de sus enlaces 
function closeMenu() {
    let navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
    }
}

//Mostrar curriculum
function mostrarCurriculum() {
    window.open("/LuisRubioDev/assets/documentos/CvLuisRubio.pdf", "_blank");
}

//descargar curriculum
function descargarCV() {
    var a = document.createElement('a');
    a.href = "/LuisRubioDev/assets/documentos/CvLuisRubio.pdf";
    a.download = "CvLuisRubio.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

//Envio de correos


// Inicializa EmailJS al cargar la página
emailjs.init("Tbv4Ah_0_UfyfyscX");

// ID del servicio y plantilla que usará EmailJS para enviar el correo
const serviceId = "service_yvec8hp";
const templateId = "template_0mln2jt";


// Maneja el envío del formulario de contacto
function enviarEmail(event) {
    event.preventDefault(); // Evita que el formulario se envíe de manera tradicional

    // Envía el formulario utilizando EmailJS
    emailjs.sendForm(serviceId, templateId, formularioContacto)
        .then(() => {
            // Muestra un mensaje de éxito
            Swal.fire("¡Su mensaje ha sido enviado con éxito!");
            formularioContacto.reset(); // Limpia el formulario después de enviarlo
        })
        .catch((error) => {
            // Manejo de errores
            console.error('Error al enviar el correo:', error);
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error al enviar el mensaje',
                text: "No ha sido posible enviar su mensaje"
            });
        });
}

//Se obtiene el formulario y agrega el evento 'submit' para manejar el envío del formulario
const formularioContacto = document.getElementById("formContact");
formularioContacto.addEventListener("submit", enviarEmail);


//manejo de modo oscuro y light 
const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    // Cambiar la clase del navbar dependiendo del tema
    const navbar = document.querySelector('.navbar');
    if (newTheme === "dark") {
        navbar.classList.add('navbar-dark');
        navbar.classList.remove('navbar-light');
    } else {
        navbar.classList.add('navbar-light');
        navbar.classList.remove('navbar-dark');
    }

}

document.getElementById("theme-toggle").addEventListener("click", toggleTheme);

// Al cargar la página, verificar la preferencia guardada
const savedTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", savedTheme);
