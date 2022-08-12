import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { MainApp } from '../../src/09-useContext/MainApp';

describe('Pruebas en <MainApp />', () => {

    test('debe de mostrar el HomePage al no colocar ruta ( / )', () => {
        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        );

        expect( screen.getByText('Home Page') ).toBeTruthy();
    });

    test('debe de mostrar el LoginPage al moverse a la ruta ( /login )', () => {
        render(
            <MemoryRouter initialEntries={[ '/login' ]}>
                <MainApp />
            </MemoryRouter>
        );

        expect( screen.getByText('Login Page') ).toBeTruthy();
    });

});
