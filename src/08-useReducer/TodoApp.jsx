import { useTodo } from '../hooks/useTodo';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';

export const TodoApp = () => {

    const { todos, handleNewTodo, handleDeleteTodo, handleToggleTodo, tasksCount, pendingTasksCount } = useTodo();

    return (
        <div className="container">
            <h1>Todo List { tasksCount }, <small>Pending tasks: { pendingTasksCount }</small> </h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    {
                        todos.length > 0
                            ? <TodoList todos={ todos } onDeleteTodo={ handleDeleteTodo } onToggleTodo={ handleToggleTodo }/>
                            : <h5>The tasks you add will be shown here...</h5>
                    }
                </div>

                <div className="col-5">
                    <h4>Add Task</h4>
                    <hr />

                    <TodoAdd onNewTodo={ handleNewTodo }/>
                </div>
            </div>
        </div>
    )
}
