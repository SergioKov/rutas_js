export default async function About() {
    // Variables específicas para la página About
    const aboutMessage = "Esta es la página de About.";
    const additionalInfo = "Aquí puedes encontrar más información sobre nosotros.";
    console.log('es about');
    
    return `
        <div>
        
            <div class="container">

                <div class="block">
                    <h1>About</h1>
                    <p>${aboutMessage}</p>
                    <p>${additionalInfo}</p>
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
}
