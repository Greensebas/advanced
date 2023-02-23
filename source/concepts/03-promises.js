import { heroes } from "./data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = ( element ) => {

    const renderHero = ( hero ) => {
        element.innerHTML = hero.name;
    };

    const renderTwoHerores = ( hero1, hero2 ) => {
        element.innerHTML = `
        <h3>${hero1.name}</h3>
        <h3>${hero2.name}</h3>
        
        `
    }

    const renderError = ( error ) => {
        element.innerHTML = `
            <h1>Error:</h1>
            <h3>${error}</h3>
        `;
    }

    const id1 = '5d86371fd55e2e2a30fe1ccb';
    const id2 = '5d86371fd55e2e2a30fe1ccb1';

    Promise.all([
        findHero(id1),
        findHero(id2),
    ])
    .then( ([hero1, hero2]) => { renderTwoHerores(hero1, hero2)})
    .catch( renderError );




    // findHero(id1)
    //     //.then( superHero => renderHero( superHero ) ); //Hacer esto es lo mismo que lo siguiente, si hay un solo argumento directamente se le va a pasar a la funcion
    //     .then( renderHero )                             
    //     .catch( renderError );
};




/**
 * 
 * @param {String} id 
 * @return {Promise}
 */
const findHero = ( id) => {

    return new Promise( ( resolve, reject ) => {
        
        const hero = heroes.find( hero => hero.id === id);

        if ( hero ) {
            resolve( hero );
            return;
        };

        reject( `Hero with ${id} not found`)
    });

};