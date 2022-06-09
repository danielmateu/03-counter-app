import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de heroes', ()=>{

    test('Debe devolver un heroe a partir de un id', () => { 

        const id = 1;
        const heroe = getHeroeById(id);
        
        const heroeData = heroes.find(heroe => heroe.id === id);

        expect( heroe ).toEqual(heroeData);
    })

    test('Debe devolver undefined si Heroe no existe', () => { 

        const id = 10;
        const heroe = getHeroeById(id);

        expect( heroe ).toBe(undefined);
    })

    test('Debe de retornar un arreglo con los heroes de DC',()=>{
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);

        const dcHeroes = heroes.filter(heroe => heroe.owner === owner);

        expect(dcHeroes).toEqual(heroes);
    })

    test('Debe de retornar un arreglo con los heroes del Owner', ()=>{
        const heroes = getHeroesByOwner('');

        const ownerHeroes = heroes.filter(heroe => heroe.owner);
        
        expect(ownerHeroes).toEqual(heroes);
    })

    //toEqual al arreglo Filtrado

    //Debe retornar un arreglo con los heroes de Marvel
    test('Debe de retornar un arreglo con los heroes de Marvel',()=>{
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        // const marvelHeroes = heroes.filter(heroe => heroe.owner === owner);
        // expect(marvelHeroes).toEqual(heroes);
        expect(heroes.length).toBe(2);
    })
})