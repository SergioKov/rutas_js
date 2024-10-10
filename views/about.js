export default async function About() {
    // Variables específicas para la página About
    const aboutMessage = "Esta es la página de About.";
    const additionalInfo = "Aquí puedes encontrar más información sobre nosotros.";
    console.log('es about');

    const view = `
        <div>
        
            <div class="container">

                <div class="block">
                    <h1>About</h1>
                    <p>${aboutMessage}</p>
                    <p>${additionalInfo}</p>
                    <br>
                    <p>Welcome to the About page.</p>
                    <button id="btn_about">Click Me</button>
                </div>
            
                <section class="about-content">
                    <h2>Nuestra Historia</h2>
                    <p>En <strong>Mi SPA</strong>, creemos en el poder del bienestar físico y mental. Desde que abrimos nuestras puertas en 2010, nos hemos dedicado a brindar servicios de spa de la más alta calidad para ayudar a nuestros clientes a relajarse, rejuvenecer y recargar energías.</p>

                    <img src="https://via.placeholder.com/800x400" alt="Imagen del spa">

                    <h2>Nuestra Misión</h2>
                    <p>Nuestra misión es proporcionar un oasis de paz y tranquilidad en medio del ajetreo de la vida diaria. Nos esforzamos por crear un ambiente acogedor y cálido donde puedas desconectar del estrés y cuidar de ti mismo.</p>

                    <h2>Valores</h2>
                    <ul class="spisok">
                        <li><strong>Calidad:</strong> Ofrecemos solo los mejores tratamientos y productos en todos nuestros servicios.</li>
                        <li><strong>Compromiso:</strong> Nos dedicamos a hacer que cada experiencia en nuestro spa sea inolvidable.</li>
                        <li><strong>Sostenibilidad:</strong> Nos preocupamos por el medio ambiente y utilizamos productos naturales y sostenibles.</li>
                        <li><strong>Atención personalizada:</strong> Cada cliente es único, y nos adaptamos a tus necesidades y preferencias.</li>
                    </ul>
                </section>

            </div>

        </div>
    `;

    // 2. Añadir los estilos desde un archivo externo
    function addStyles(){
        loadStyles('../css/about.css');
    };
    
    function loadStyles(stylePath) {
        // Verificar si ya hay un estilo cargado y eliminarlo
        const existingLink = document.querySelector('link[data-dynamic-style]');
        if (existingLink) {
            existingLink.remove(); // Eliminar el estilo anterior
        }
    
        // Crear un nuevo <link> para el archivo de estilos actual
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = stylePath;
        link.setAttribute('data-dynamic-style', 'true'); // Marcador para identificar este estilo como dinámico
        document.head.appendChild(link);
    }    

    // Las funciones de listeners
    function addListeners(){
        const button = document.getElementById('btn_about');
        
        // Remover cualquier listener anterior para evitar duplicados
        button.removeEventListener('click', handleClick);
        
        // Añadir el listener de nuevo
        button.addEventListener('click', handleClick);
    };

    let n = 0;

    // Función manejadora del evento
    function handleClick(event){
        //alert('Button clicked!');
        console.log('abajo event: ');
        console.log(event);
        console.log('this se refiere a button. this: ', this);
        console.log('event.currentTarget se refiere a button. event.currentTarget: ', event.currentTarget);
        n++;
        this.textContent = `Button clicked ${n} times`;
    };
    
    // 4. Retornar un array con la vista, los estilos y la función que añade los listeners
    return [view, addStyles, addListeners];
}
