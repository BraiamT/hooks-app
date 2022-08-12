
export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span
                className={`align-self-center${ todo.done ? ' text-decoration-line-through' : '' }`}
                aria-label="span"
                style={{ cursor: "pointer" }}
                onClick={ () => onToggleTodo( todo.id ) }
            >{ todo.description }</span>
            <button
                className="btn btn-outline-danger btn-sm me-0"
                onClick={ () => onDeleteTodo(todo.id) }
            >Delete</button>
        </li>
    )
}
