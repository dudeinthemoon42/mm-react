import * as React from 'react';
import { connect } from 'react-redux';

import { todosActions } from '..';
import { RootState } from '../../../store/rootReducers';

interface IProps {
    addTodo: (title: string) => any;
}

interface IState {
    title: string;
}

class TodoForm extends React.Component<IProps, IState> {
    public state: Readonly<IState> = { title: '' };

    public handleTitleChange: React.ReactEventHandler<HTMLInputElement> = ev => {
        this.setState({ title: ev.currentTarget.value });
    };

    public handleAdd = () => {
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    };

    public render() {
        const { title } = this.state;

        return (
            <form>
                <input
                    type="text"
                    placeholder="Enter new todo"
                    value={title}
                    onChange={this.handleTitleChange}
                />
                &nbsp;
        <button type="button" onClick={this.handleAdd} disabled={!title}>
                    Add
        </button>
            </form>
        );
    }
}

const mapStateToProps = (state: RootState) => ({});

export default connect(mapStateToProps, {
    addTodo: (title: string) => todosActions.add({ title }),
})(TodoForm);