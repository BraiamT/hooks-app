import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ onNewTodo }) => {

    const { onInputChange, onFormReset, task } = useForm({
        task: ''
    });

    const onSubmit = (event) => {
        event.preventDefault();
        if (task.trim().length <= 1) return;

        onNewTodo({
            id: new Date().getTime(),
            description: task.trim(),
            done: false
        });
        onFormReset();
    }

    return (
        <form onSubmit={ onSubmit } aria-label="add-todo-form">
            <input
                type="text"
                placeholder="What to do?"
                name="task"
                value={ task }
                onChange={ onInputChange }
                className="form-control"
            />
            <div className="d-grid m-0">
                <button
                    type="submit"
                    className="btn btn-primary btn-sm mt-2 me-0"
                >Add</button>
            </div>
        </form>
    )
}
