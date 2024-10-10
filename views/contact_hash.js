export default async function Contact_hash(params) {
    // Variables específicas para la página Contact
    const contactEmail = "info@ejemplo.com";
    
    const view = `
        <div>
        
            <div class="container">

                <div class="block">
                    <h1>Contact (HASH)</h1>
                    <p>Puedes contactarnos en: <a href="mailto:${contactEmail}">${contactEmail}</a></p>
                </div>
            

            </div>

        </div>
    `;    
    
    const addListeners = null;
    const addStyles = null;
    
    return [view, addListeners];    
}
