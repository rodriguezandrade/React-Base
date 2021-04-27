import  {getHeroeByIdAsync} from '../../bases/09-promises';

describe('Uso de promesas', () => {
    test('should be a prueba con promesas', () => {
       const id = 1;

       getHeroeByIdAsync(id).then(heroe => {
      expect(true).toBe(false);
       });
    })
    
})
