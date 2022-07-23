import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Braiam',
        email: 'braiam.tejeda@gmail.com'
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value // para que esto funcione, el 'name' de los inputs debe ser igual al de las propiedades en el state
        });
    }

    /**
     * Si un useEffect no tiene ninguna dependencia, este se va a llamar
     * cada vez que se cambie el estado (cada vez que se redibuje el componente <SimpleForm />)
     * (La dependencia es el segundo argumento del hook XD)
     * Si la dependencia colocada es un [] vacío, eso quiere decir que solo se llamará
     * el useEffect una sola vez al cargar el componente
     * Siempre es mejor tener varios useEffect, uno para cada cambio del cual se
     * quiera estar pendiente, que tener uno con mucha lógica dentro
     * Por último, la función de retorno, se llama cuando el componente se destruye, vease en <Message />
     */
    useEffect(() => {
        // console.log('useEffect called');
    }, []);

    /* De esta forma se está pendiente y se hace algo cada vez que cambia el formState */
    useEffect(() => {
        // console.log('formState changed!');
    }, [formState]);

    /* De esta forma se está pendiente y se hace algo cada vez que cambia solo el email */
     useEffect(() => {
        // console.log('email changed!');
    }, [email]);

    return (
        <>
            <h1>Simple Form</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={ username }
                onChange={ onInputChange }
            />

            <input
                type="email"
                className="form-control mt-3 mb-2"
                placeholder="cool-email@example.com"
                name="email"
                value={ email }
                onChange={ onInputChange }
            />

            {
                ( username === 'BraiamT' ) && <Message />
            }
        </>
    )
}
