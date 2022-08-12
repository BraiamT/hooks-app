import { act, renderHook } from '@testing-library/react';
import { useForm } from '../../src/hooks/useForm';

describe('Pruebas en useForm', () => {

    const initialForm = {
        name: 'Braiam',
        email: 'cool-email@something.com'
    }

    test('should de regresar los valores por defecto', () => {
        const { result } = renderHook( () => useForm(initialForm) );

        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any( Function ),
            onFormReset: expect.any( Function )
        });
    });

    test('debe de cambiar el nombre del formulario', () => {
        const newName = 'Juan';
        const { result } = renderHook( () => useForm(initialForm) );
        const { onInputChange }= result.current;

        act( () => {
            onInputChange({ target: { name: 'name', value: newName } });
        });

        expect( result.current.name ).toBe(newName);
        expect( result.current.formState.name ).toBe(newName);
    });

    test('debe de reiniciar el formulario al estado inicial', () => {
        const newName = 'Juan';
        const { result } = renderHook( () => useForm(initialForm) );
        const { onInputChange, onFormReset }= result.current;

        act( () => {
            onInputChange({ target: { name: 'name', value: newName } });
            onFormReset();
        });

        expect( result.current.name ).toBe(initialForm.name);
        expect( result.current.formState.name ).toBe(initialForm.name);
    });

});
