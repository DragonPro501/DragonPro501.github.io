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

const fuegosArtificiales = new Audio('/Music/Fuegos-artificiales.mp3');
const alegria = new Audio('/Music/Alegría.mp3');
const fondoMusica = new Audio('/Music/Musica-fondo.mp3');
fondoMusica.volume = 0.6;
fondoMusica.loop = true;
fuegosArtificiales.volume = 0.5;
alegria.volume = 0.5;

// Manejar el cambio de contenido
changeContentButton.addEventListener('click', () => {
  // Oculta el contenido inicial
  contentHeader.style.opacity = '0';
  contentHeader.style.transition = 'opacity 0.5s ease-in-out';
  
  setTimeout(() => {
    contentHeader.style.display = 'none';
    birthdayTitle.style.display = 'none';
    // Muestra el contenido adicional
    scrollContent.style.display = 'flex';
    setTimeout(() => {
      fondoMusica.play();
      scrollContent.classList.add('visible');
    }, 100); // Duración para sincronizar con la transición CSS
  }, 500); // Duración de la animación
});

// Lógica del formulario
document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const password = document.getElementById('password').value;

  if (name == "Ari" && password === "pan_tostadouv") {
    contentContainer.style.display = 'block';
    contentContainer.style.opacity = '0';
    contentHeader.style.display = 'block';
    contentHeader.style.opacity = '0';
    loginContainer.classList.add('hidden');
    document.body.style.backgroundColor = 'black';
    loadingContainer.style.display = 'block';
    loadingContainer.style.opacity = '0';
    setTimeout(() => {
      loadingContainer.style.opacity = '1';
      loadingContainer.style.transition = 'opacity 1s ease-in-out';
      loginContainer.classList.remove('hidden');
      loginContainer.style.display = 'none';
       // Aparece el contenedor de carga
      setTimeout(() => {
        fuegosArtificiales.play();
        document.body.style.backgroundColor = 'white';
        loadingContainer.style.opacity = '0';
        loadingContainer.style.transition = 'opacity 1s ease-in-out';
        loadingContainer.classList.remove('hidden'); // Se oculta el contenedor de carga
        loadingContainer.classList.add('hidden');
        setTimeout(() => {
          loadingContainer.style.display = 'none';
          setTimeout(() => {
            contentContainer.classList.add('visible'); // Aparece el contenido principal
            contentHeader.style.opacity = '1';
            contentHeader.style.transition = 'opacity .6s ease-in-out';
            loadingConfetti(4, 1500);
          }, 600);
          setTimeout(() => {
            alegria.play();
            
          }, 1000);
          contentContainer.style.opacity = '1';
          contentContainer.style.transition = 'opacity 1s ease-in-out';
          contentContainer.classList.remove('hidden');

          // Personalizar el contenido
          birthdayTitle.textContent = `¡¡FELIZ CUMPLEAÑOS, ${name}!!!`;
          welcomeMessage.innerHTML = `
            Querida, apreciada, enojona (señorita de mil emociones), ${name}.
            <br>Hoy es bien sabido que no es un día como cualquier otro, pues, es el cumpleaños de la más apreciada amiga, así que, en vez de escribir mensajes de felicitaciones vía WhatsApp, he elaborado algo mucho más dinámico y entorno a lo que me estoy especializando: programación. <br>Considera esta página que desarrollé como mi mayor estima y cariño, en donde dediqué una parte de mi tiempo en hacerlo lo más llamativo posible (aunque siempre me quedó mal optimizado, así que espere errores de diseño y dimensiones 😔)
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
    textContainer.style.transition = 'opacity 0.6s ease-in-out';
    textContainer.style.opacity = '1';
  }, 100); // Permite que la animación de transición funcione
});

// Ocultar el contenedor del texto y el fondo oscuro al hacer clic en el botón de cerrar
closeTextButton.addEventListener('click', () => {
  textContainer.style.opacity = '0';
    textContainer.style.transition = 'opacity 0.5s ease-in-out';
  
  setTimeout(() => {
    darkBackground.style.display = 'none';
    textContainer.classList.remove('show');
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

function loadingConfetti(times, interval) {
  let count = 0;
  const confettiCanvas = document.getElementById('confetti-canvas');
  
  const confettiInterval = setInterval(() => {
    // Lanza confeti sin interferir con los existentes
    confetti.create(confettiCanvas, { resize: true })({
      particleCount: 150,
      spread: 100,
      startVelocity: 40,
      origin: {
        y: Math.random() * 0.5 + 0.25, // Limitar entre el 25% y el 75% del alto
        x: Math.random() * 0.8 + 0.1  // Limitar entre el 10% y el 90% del ancho
      },
      scalar: 1.8, // Incrementa el tamaño de los confetis (1 es el tamaño por defecto)
      colors: ['#ff66b2', '#ffd700', '#4caf50', '#1e90ff'] // Colores personalizados
    });
    count++;
    if (count >= times) {
      clearInterval(confettiInterval); // Detiene el ciclo tras las repeticiones
    }
  }, interval); // Intervalo entre lanzamientos
}
