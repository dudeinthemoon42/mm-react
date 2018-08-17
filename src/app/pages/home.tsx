import * as React from "react";
import { connect } from "react-redux";

import { PokemonCard } from '../components/card/pokemon-card/pokemonCard';
import Todos from '../features/todos/components/main';

export class Home extends React.Component {

    public componentDidMount() {
        console.log("componentDidMount");
    }

    public componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    public render() {
        return (
        <main className="App">
            <header className="App-header">
                <h1 className="App-title">Bobby's ReactJS Project</h1>
            </header>
            <p className="App-intro">
            Here we go!
            </p>
            <PokemonCard />
            <Todos />
        </main>
        );
    }
}

const mapState2Props = (state: any) => {
    return {
        data: state.test.data
    }
}

export default connect(mapState2Props)(Home);