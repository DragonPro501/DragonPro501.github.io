// Referencias a los elementos
const loginContainer = document.getElementById('login-container');
const loadingContainer = document.getElementById('loading-container');
const contentContainer = document.getElementById('content-container');
const birthdayTitle = document.getElementById('fixed-title'); // Cambiado
const welcomeMessage = document.getElementById('welcome-message');
const scrollContent = document.getElementById('scroll-content');
const contentHeader = document.getElementById('content-header');
// Referencia al botón
const changeContentButton = document.getElementById('change-content-button');

// Manejar el cambio de contenido
changeContentButton.addEventListener('click', () => {
  // Oculta el contenido inicial
  contentHeader.classList.add('hidden');
  
  setTimeout(() => {
    contentHeader.style.display = 'none';
    birthdayTitle.style.display = 'none';
    // Muestra el contenido adicional
    scrollContent.style.display = 'flex';
    setTimeout(() => {
      scrollContent.classList.add('visible');
    }, 100); // Duración para sincronizar con la transición CSS
  }, 500); // Duración de la animación
});

// Lógica del formulario
document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const password = document.getElementById('password').value;

  if (name == "Ari" && password === "1234") {
    loginContainer.classList.add('hidden');
    document.body.style.backgroundColor = 'black';
    setTimeout(() => {
      loginContainer.style.display = 'none';
      loadingContainer.style.display = 'block';
      loadingContainer.classList.remove('hidden');
       // Aparece el contenedor de carga

      setTimeout(() => {
        document.body.style.backgroundColor = 'white';
        loadingContainer.classList.remove('visible'); // Se oculta el contenedor de carga
        loadingContainer.classList.add('hidden');
        setTimeout(() => {
          loadingContainer.style.display = 'none';
          contentContainer.style.display = 'block';
          contentContainer.classList.remove('hidden');
          contentContainer.classList.add('visible'); // Aparece el contenido principal

          // Personalizar el contenido
          birthdayTitle.textContent = `¡¡FELIZ CUMPLEAÑOS, ${name}!!!`;
          welcomeMessage.innerHTML = `
            Querida, apreciada, enojona (señorita de mil emociones), ${name}.
            <br>Hoy es bien sabido que no es un día como cualquier otro, pues, es el cumpleaños de la más apreciada amiga, así que, en vez de escribir mensajes de felicitaciones vía WhatsApp, he elaborado algo mucho más dinámico y entorno a lo que me estoy especializando: programación. <br>Considera esta página que desarrollé como mi mayor estima y cariño, en donde dediqué una parte de mi tiempo en hacerlo lo más llamativo posible (aunque siempre me faltó animaciones y los efectos de sonido 😔)
            <br>No siendo más, espero que sea de tu agrado. Echa un vistazo lo que hay! :)
          `;
        }, 1000);
      }, 2000);
    }, 1000);
} else {
    alert('Vaya, parece que te equivocaste en algo. Por favor, inténtalo de nuevo (Que nOoB)');
  }
});

// Obtener los elementos
const showTextButton = document.getElementById('show-text-button');
const textContainer = document.getElementById('text-container');
const closeTextButton = document.getElementById('close-text-button');
const darkBackground = document.getElementById('dark-background');

// Mostrar el contenedor del texto y el fondo oscuro al hacer clic en el botón
showTextButton.addEventListener('click', () => {
  darkBackground.style.display = 'block';
  textContainer.classList.add('show');
  setTimeout(() => {
    textContainer.style.opacity = '1';
  }, 10); // Permite que la animación de transición funcione
});

// Ocultar el contenedor del texto y el fondo oscuro al hacer clic en el botón de cerrar
closeTextButton.addEventListener('click', () => {
  textContainer.classList.remove('show');
  setTimeout(() => {
    darkBackground.style.display = 'none';
    textContainer.style.opacity = '0';
  }, 500); // Tiempo coincidente con la animación
});

// Obtener los elementos necesarios
const images = document.querySelectorAll('.sticker'); // Selecciona todas las imágenes
const imageViewer = document.getElementById('image-viewer');
const expandedImage = document.getElementById('expanded-image');
const closeImageButton = document.getElementById('close-image-button');

// Función para mostrar la imagen ampliada
images.forEach(image => {
  image.addEventListener('click', () => {
    expandedImage.src = image.src; // Cambia el src de la imagen ampliada
    darkBackground.style.display = 'block'; // Muestra el fondo oscuro
    imageViewer.style.display = 'block'; // Muestra el contenedor de la imagen
  });
});

// Función para cerrar la imagen ampliada
closeImageButton.addEventListener('click', () => {
  imageViewer.style.display = 'none'; // Oculta el contenedor de la imagen
  darkBackground.style.display = 'none'; // Oculta el fondo oscuro
});