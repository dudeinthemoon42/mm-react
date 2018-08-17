import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './app/App';
import registerServiceWorker from './registerServiceWorker';

import 'typeface-roboto';
import './app/App.css';
import './index.css';

const rootEl = document.getElementById("root") as HTMLElement;

const render = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>,
      rootEl
    );
  };

  if (module.hot) {
    module.hot.accept("./app/App", () => {
      setTimeout(render);
    });
  }

  render();

  registerServiceWorker();

/*import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './app/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();*/
