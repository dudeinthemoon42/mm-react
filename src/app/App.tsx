import * as React from 'react';
import { Provider } from "react-redux";

import { Home } from './pages/home';
import { configureStore } from './store/configureStore'


class App extends React.Component {

    private store = configureStore()

    public render() {
        return (
            <Provider store={this.store}>
                <Home/>
            </Provider>
        );
  }
}

export default App;


/*import * as React from 'react';
import './App.css';

import { Provider } from "react-redux";

import { Home } from "./pages/home";
import { configureStore } from "./store/configureStore";

import { PokemonCard } from './components/card/pokemon-card/pokemonCard';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bobby's ReactJS Project</h1>
        </header>
        <p className="App-intro">
          Here we go!
        </p>

        <PokemonCard />
      </div>
    );
  }
}

export default App;*/
