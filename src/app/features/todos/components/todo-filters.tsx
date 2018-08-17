import * as React from 'react';
import { connect } from 'react-redux';
// import { memoize, curry } from "lodash/fp";


import { todosActions, todosModels, todosSelectors } from '..';
import { RootState } from '../../../store/rootReducers';
const {
    TodosFilter: { All, Active, Completed },
} = todosModels;

interface IProps {
    currentFilter: todosModels.TodosFilter;
    changeFilter: (id: string) => void;
}

const SEPARATOR = ' | ';
const FILTERS = [All, ' | ', Active, ' | ', Completed];

function TodoFilters({ currentFilter, changeFilter }: IProps) {
    const Button = (idx: number, filter: string) => (
        <span
            key={idx}
            // Replace with this: https://michalzalecki.com/react-memoized-event-handlers/
            // tslint:disable-next-line:jsx-no-lambda
            onClick={() => changeFilter(filter)}

            //   onClick = memoize(curry(() => {
            //     changeFilter(filter);
            //   }));


            style={getStyle(filter === currentFilter)}
        >
            {filter.toString()}
        </span>
    );

    return (
        <div>
            {FILTERS.map(
                (filter, idx) =>
                    filter === SEPARATOR ? SEPARATOR : Button(idx, filter)
            )}
        </div>
    );
}

const getStyle = (active: boolean): React.CSSProperties => ({
    cursor: 'pointer',
    ...(active
        ? { textDecoration: 'underline', fontWeight: 'bold' }
        : { opacity: 0.4 }),
});

const mapStateToProps = (state: RootState) => ({
    currentFilter: todosSelectors.getTodosFilter(state.todos),
});

export default connect(mapStateToProps, {
    changeFilter: todosActions.changeFilter,
})(TodoFilters);
