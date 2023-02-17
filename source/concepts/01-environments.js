
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const environmentsComponent = ( element ) => {

    console.log( import.meta.env );

    const html = `
        Dev: ${ import.meta.env.DEV } <br/>
        URL: ${ import.meta.env.VITE_BASE_URL } <br/>
    `;
    element.innerHTML = html;
}