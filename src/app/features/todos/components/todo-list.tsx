import * as React from 'react';
import { connect } from 'react-redux';

import { todosActions, todosModels, todosSelectors } from '..';
import { RootState } from '../../../store/rootReducers';
import TodoItem from './todo-item';

interface IProps {
    todos: todosModels.Todo[];
    toggleTodo: (id: string) => any;
}

function TodoList({ todos = [], toggleTodo }: IProps) {
    return (
        <ul style={getStyle()}>
            {todos.map(todo => (
                <li key={todo.id}>
                    {/* tslint:disable-next-line:jsx-no-lambda */}
                    <TodoItem item={todo} toggleItem={() => toggleTodo(todo.id)} />
                </li>
            ))}
        </ul>
    );
}

const getStyle = (): React.CSSProperties => ({
    margin: 'auto',
    textAlign: 'left',
    width: 200,
});

const mapStateToProps = (state: RootState) => ({
    todos: todosSelectors.getFilteredTodos(state.todos),
});

export default connect(mapStateToProps, {
    toggleTodo: (id: string) => todosActions.toggle({ id }),
})(TodoList);