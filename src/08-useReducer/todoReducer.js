
export const todoReducer = ( state = [], action ) => {
    switch ( action.type ) {
        case '[TODO] Add Todo':
            // throw new Error('Action.type = ABC falta su implementación');
            return [...state, action.payload];

        case '[TODO] Delete Todo':
            return state.filter( todo => todo.id !== action.payload );

        case '[TODO] Toggle Todo':
            return state.map( todo => {

                if ( todo.id === action.payload ) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo;
            });

        default:
            return state;
    }
}
