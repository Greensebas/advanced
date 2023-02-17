import { heroes } from "./data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent = ( element ) => {

    const id = '5d86371fd55e2e2a30fe1ccb1';
    findHero( id, (error, hero) => {
        if(error){
            element.innerHTML = error;
            return;
        };

        // element.innerHTML = hero?.name || 'No hay heroe';                    // El '?' en el objeto que esperamos consulta si eso existe, si no existe asigna 'undefined'
        element.innerHTML = hero.name;
    });

};



/**
 * 
 * @param {String} id 
 * @param { ( error: String|Null, hero: Object)=> void} callback 
 */
const findHero = ( id, callback ) => {

    const hero = heroes.find( hero => hero.id === id);

    if( !hero ){
        callback(`Hero with id ${id} not found.`);
        return;
    };

    // Este callback tiene como primer argumento un error, por eso se le pasa null como parámetro
    callback( null, hero );
}