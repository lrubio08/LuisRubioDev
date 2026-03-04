// cierra el menu cuando el usuario hace click en uno de sus enlaces 
function closeMenu() {
    let navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
    }
}


//descargar curriculum
function descargarCV() {
    var a = document.createElement('a');
    a.href = "assets/documentos/CvLuisRubio.pdf";
    a.download = "CvLuisRubio.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// Maneja el envío del formulario de contacto
async function enviarEmail(event) {
    event.preventDefault();
    
    const formulario = document.getElementById("formContact");
    const datos = new FormData(formulario);

    try {
        const response = await fetch("https://formspree.io/f/xqedrppq", {
            method: "POST",
            body: datos,
            headers: { "Accept": "application/json" }
        });

        if (response.ok) {
            Swal.fire("¡Su mensaje ha sido enviado con éxito!");
            formulario.reset();
        } else {
            throw new Error("Error en el envío");
        }
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        Swal.fire({
            icon: 'error',
            title: 'Hubo un error al enviar el mensaje',
            text: "No ha sido posible enviar su mensaje"
        });
    }
}

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
