import { getImagen } from "../../base/11-async-await";

describe('Pruebas con Async-Await Y Fetch', () => { 

    test('Debe devolver el url de la imagen', async() => { 
        
        const url = await getImagen();
        
        expect(typeof url ).toBe( 'string' )
    })
 })