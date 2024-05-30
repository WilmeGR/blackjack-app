
import _ from 'underscore'

/**
 * Esta funcion regresa un nuevo arreglo de cartas
 * @param {Array<string>} tiposDeCartas ejemplo: ['C','D','H','S']
 * @param {Array<string>} tiposEspeciales ejemplo: ['A','J','Q','K']
 * @returns {Array<string>} retorna un arreglo nuevo
 */
export const crearDeck = (tiposDeCartas, tiposEspeciales) => {

    if(!tiposDeCartas || tiposDeCartas.length === 0) 
        throw new Error('Tipos de cartas es obligatorio como un arreglo de string');
    
    if(!tiposEspeciales || tiposEspeciales.length === 0)
        throw new Error('Tipos de especiales es obligatorio como un arreglo de string');

    
    let deck = [];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCartas ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCartas ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}