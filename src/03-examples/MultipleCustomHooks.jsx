import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote } from './';

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);

    // if data !== null then data [0] else false
    // doble negación (!null/undefined = true | !!null/undefined = false)
    const { author, quote } = !!data && data[0];

    return (
        <>
            <h1>Braking Bad Quotes</h1>
            <hr />

            {
                isLoading
                    ? <LoadingQuote />
                    : <Quote author={ author } quote={ quote } />
            }

            <button
                className="btn btn-primary"
                disabled={ isLoading }
                onClick={ () => increment() }
                >Next Quote
            </button>

        </>
    )
}
