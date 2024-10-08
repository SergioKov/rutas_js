export default async function Home(params) {
    // Simular la carga de datos (puede venir de una API)
    const welcomeMessage = "Bienvenido a la página de inicio.";
    const params_html = (Object.keys(params).length >0) ? params : '' ;
    return `
        <div>
        <h1>Home</h1>
        <p>${welcomeMessage}</p>
        <p>params: ${params_html}</p>
        </div>
    `;
}
