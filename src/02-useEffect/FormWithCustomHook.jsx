import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {

    const { formState, onInputChange, onFormReset, email, password, username } = useForm({
        email: '',
        password: '',
        username: ''
    });

    // const { email, password, username } = formState;

    return (
        <>
            <h1>Custom Hook Form</h1>
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
                className="form-control mt-3"
                placeholder="cool-email@example.com"
                name="email"
                value={ email }
                onChange={ onInputChange }
            />

            <input
                type="password"
                className="form-control mt-3 mb-2"
                placeholder="Password"
                name="password"
                value={ password }
                onChange={ onInputChange }
            />

            <button onClick={ onFormReset } className="btn btn-info mt-3">Reset Form</button>

        </>
    )
}
