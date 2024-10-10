export default async function Contact() {
    // Variables específicas para la página Contact
    const contactEmail = "info@ejemplo.com";
    
    const view = `
        <div>
        
            <div class="container">

                <div class="block">
                    <h1>Contact</h1>
                    <p>Puedes contactarnos en: <a href="mailto:${contactEmail}">${contactEmail}</a></p>
                </div>

                <section class="content">
                    
                    <div class="map">
                        <iframe src="https://www.google.com/maps/embed?..." width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>


                        <div class="form-container">
                            <form action="#" method="POST">
                                <div class="form-group">
                                    <input type="text" id="name" name="name" required placeholder=" ">
                                    <label for="name">Nombre</label>
                                </div>

                                <div class="form-group">
                                    <input type="email" id="email" name="email" required placeholder=" ">
                                    <label for="email">Correo Electrónico</label>
                                </div>

                                <div class="form-group">
                                    <input type="text" id="subject" name="subject" required placeholder=" ">
                                    <label for="subject">Asunto</label>
                                </div>

                                <div class="form-group">
                                    <textarea id="message" name="message" rows="5" required placeholder=" "></textarea>
                                    <label class="lab_message" for="message">Mensaje</label>
                                </div>


                                <button type="submit">Enviar</button>
                            </form>
                        </div>


                </section>

                <aside class="block">
                    <h2>Nuestra ubicación</h2>
                    <p>
                        Dirección: Calle Falsa 123, Ciudad, País<br>
                        Teléfono: +123 456 789<br>
                        Correo: contacto@mispa.com
                    </p>
                    <h3>Horarios de apertura</h3>
                    <ul class="spisok">
                        <li>Lunes a Viernes: 9:00 AM - 8:00 PM</li>
                        <li>Sábado: 10:00 AM - 6:00 PM</li>
                        <li>Domingo: Cerrado</li>
                    </ul>
                </aside>
            

            </div>

        </div>
    `; 
    
    const addListeners = null;

    // 2. Añadir los estilos desde un archivo externo
    function addStyles(){
        loadStyles('../css/contact.css');
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
    
    return [view, addStyles, addListeners];   
}
