import * as React from 'react';

import TodoFilters from './todo-filters';
import TodoForm from './todo-form';
import TodoList from './todo-list';

export default () => (
    <React.Fragment>
        <TodoForm />
        <br />
        <TodoFilters />
        <br />
        <TodoList />
    </React.Fragment>
);