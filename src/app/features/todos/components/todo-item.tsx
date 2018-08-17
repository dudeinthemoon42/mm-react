import * as React from 'react';
import { Todo } from '../models';

interface IProps {
    item: Todo;
    toggleItem: () => void;
}

function TodoItem({ item, toggleItem }: IProps) {
    return (
        <div onClick={toggleItem} style={getStyle(item.completed)}>
            {item.title}
        </div>
    );
}

const getStyle = (completed: boolean): React.CSSProperties => ({
    cursor: 'pointer',
    overflowX: 'hidden',
    textOverflow: 'ellipsis',
    ...(completed ? { textDecoration: 'line-through', opacity: 0.4 } : {}),
});

export default TodoItem;