import { act, renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';

describe('Pruebas en el useCounter', () => {

    test('debe de retornar los valores por defect', () => {
        const { result } = renderHook( () => useCounter() );
        const { counter, decrement, increment, reset }= result.current;

        expect( counter ).toBe(0);
        expect( decrement ).toEqual( expect.any( Function ) );
        expect( increment ).toEqual( expect.any( Function ) );
        expect( reset ).toEqual( expect.any( Function ) );
    });

    test('debe de generar el counter con el valor de 100', () => {
        const { result } = renderHook( () => useCounter(100) );
        const { counter }= result.current;

        expect( counter ).toBe(100);
    });

    test('debe de incrementar el counter', () => {
        const { result } = renderHook( () => useCounter() );
        const { increment }= result.current;

        act( () => {
            increment();
            increment(2);
        });

        expect( result.current.counter ).toBe(3);
    });

    test('debe de decrementar el counter', () => {
        const { result } = renderHook( () => useCounter(100) );
        const { decrement }= result.current;

        act( () => {
            decrement();
            decrement(2);
        });

        expect( result.current.counter ).toBe(97);
    });

    test('debe de resetear el counter al valor predefinido', () => {
        const { result } = renderHook( () => useCounter() );
        const { increment, decrement, reset }= result.current;

        act( () => {
            decrement();
            decrement(2);
            increment(10);
            reset();
        });

        expect( result.current.counter ).toBe(0);
    });

});
