export default async function Error404() {
    // Variables específicas para la página About
    const aboutMessage = "Esta es la página de Error 404.";
    const additionalInfo = "Página no encontrada.";
    console.log('es error404');
    
    const view = `
        <div>
        
            <div class="container">

                <div class="block">
                    <h1>Error 404</h1>
                    <p>${aboutMessage}</p>
                    <p>${additionalInfo}</p>
                </div>
            
            </div>

        </div>
    `;

    const addListeners = null;
    const addStyles = null;
    
    return [view, addListeners];    
}
