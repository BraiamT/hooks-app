import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples';
import { useCounter } from '../../src/hooks/useCounter';
import { useFetch } from '../../src/hooks/useFetch';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks />', () => {
    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach( () => {
        jest.clearAllMocks();
    });

    test('debe de mostrar el componente por defecto', () => {
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render(<MultipleCustomHooks />);

        expect( screen.getByText('Loading...') );
        expect( screen.getByText('Breaking Bad Quotes') );

        const nextQuoteButton = screen.getByRole('button', { name: 'Next Quote' });
        expect( nextQuoteButton.disabled ).toBeTruthy();
    });

    test('should de mostrar un Quote', () => {
        useFetch.mockReturnValue({
            data: [{ author: 'Brianeitor', quote: '... Cosas que muy poca gente sabe' }],
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHooks />);
        screen.debug();

        expect( screen.getByText('Brianeitor') ).toBeTruthy();
        expect( screen.getByText('... Cosas que muy poca gente sabe') ).toBeTruthy();

        const nextQuoteButton = screen.getByRole('button', { name: 'Next Quote' });
        expect( nextQuoteButton.disabled ).toBeFalsy();
    });

    test('debe de llamar la función de incrementar()', () => {
        useFetch.mockReturnValue({
            data: [{ author: 'Brianeitor', quote: '... Cosas que muy poca gente sabe' }],
            isLoading: false,
            hasError: null
        });


        render(<MultipleCustomHooks />);
        const nextQuoteButton = screen.getByRole('button', { name: 'Next Quote' });
        fireEvent.click( nextQuoteButton );

        expect(mockIncrement).toHaveBeenCalled();
    });

});
