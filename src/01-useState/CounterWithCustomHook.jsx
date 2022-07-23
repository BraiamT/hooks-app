import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter();

    return (
        <>
            <h1>Counter With Custom Hook: { counter }</h1>
            <hr />

            <button className="btn btn-warning" onClick={ () => decrement(10) }>-1</button>
            <button className="btn btn-secondary" onClick={ reset }>Reset</button>
            <button className="btn btn-primary" onClick={ () => increment(10) }>+1</button>
        </>
    )

}
