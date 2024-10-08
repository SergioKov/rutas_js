export default async function Contact_hash(params) {
    // Variables específicas para la página Contact
    const contactEmail = "info@ejemplo.com";
    
    return `
        <h1>Contact (HASH)</h1>
        <p>Puedes contactarnos en: <a href="mailto:${contactEmail}">${contactEmail}</a></p>
    `;
}
