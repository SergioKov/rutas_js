export default async function About() {
    // Variables específicas para la página About
    const aboutMessage = "Esta es la página de About.";
    const additionalInfo = "Aquí puedes encontrar más información sobre nosotros.";
    console.log('es about');
    
    return `
        <h1>About</h1>
        <p>${aboutMessage}</p>
        <p>${additionalInfo}</p>
    `;
}
