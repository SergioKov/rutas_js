export default async function Home(params) {
    // Simular la carga de datos (puede venir de una API)
    const welcomeMessage = "Bienvenido a la página de inicio.";
    const params_html = (Object.keys(params).length >0) ? params : '' ;
    return `
        <div>
        
            <div class="container">

                <div class="block">
                    <h1>Home</h1>
                    <p>${welcomeMessage}</p>
                    <p>params: ${params_html}</p>
                </div>
            
                <aside class="sidebar">
                    <h2>Sobre Nosotros</h2>
                    <p>Ofrecemos tratamientos de spa de alta calidad para ayudarte a relajarte y rejuvenecer. Ven a visitarnos y disfruta de un momento especial solo para ti.</p>
                    <h3>Servicios populares</h3>
                    <ul class="spisok">
                        <li>Masajes relajantes</li>
                        <li>Faciales rejuvenecedores</li>
                        <li>Tratamientos corporales</li>
                    </ul>
                </aside>

                <section class="content">
                    <article class="post">
                        <h2>Nuevas promociones de otoño</h2>
                        <p>Este otoño, aprovecha nuestras ofertas especiales en masajes y tratamientos faciales. ¡Reserva tu cita ahora y disfruta de un 20% de descuento!</p>
                    </article>

                    <article class="post">
                        <h2>Consejos para una piel saludable</h2>
                        <p>La clave para una piel radiante es la constancia en tu rutina de cuidado. No olvides hidratarte, usar protector solar y visitar nuestro spa regularmente para tratamientos profesionales.</p>
                    </article>
                </section>

            </div>

        </div>
    `;
}
