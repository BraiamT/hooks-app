import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer'

const init = () => {
    // Si el local storage regresa null, entonces []
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {
    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ));
    }, [todos]);

    const handleNewTodo = ( todo ) => {
        dispatch({type: '[TODO] Add Todo', payload: todo});
    }

    const handleDeleteTodo = ( id ) => {
        dispatch({type: '[TODO] Delete Todo', payload: id});
    }

    const handleToggleTodo = ( id ) => {
        dispatch({type: '[TODO] Toggle Todo', payload: id});
    }

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        tasksCount: todos.length,
        pendingTasksCount: todos.filter( todo => !todo.done ).length
    }
}
