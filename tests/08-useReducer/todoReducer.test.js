import { todoReducer } from '../../src/08-useReducer/todoReducer';

describe('Pruebas en el todoReducer', () => {

    const initialState = [{
        id: 1,
        description: 'Demo TODO',
        done: false
    }];

    test('debe de regresar el estado inicial', () => {
        const newState = todoReducer( initialState, {} );

        expect( newState ).toBe( initialState );
    });

    test('should de agregar un nuevo TODO', () => {
        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'Nuevo TODO #2',
                done: false
            }
        }

        const newState = todoReducer( initialState, action );

        expect( newState.length ).toBe( 2 );
        expect( newState ).toContain( action.payload );
    });

    test('debe de eliminar un TODO', () => {
        const action = {
            type: '[TODO] Delete Todo',
            payload: 1
        }

        const newState = todoReducer( initialState, action );

        expect( newState.length ).toBe( 0 );
    });

    test('debe de realizar el Toggle del TODO', () => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1
        }

        const newState = todoReducer( initialState, action );
        expect( newState[0].done ).toBe(true);

        const newState2 = todoReducer( newState, action );
        expect( newState2[0].done ).toBe(false);
    });

});
