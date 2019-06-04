import app from './app';
import {render} from 'lit-html';

const renderApp = () => render(app(), document.body);

renderApp();

if (module.hot) {
  module.hot.accept('./app.js', () => {
    renderApp();
  });
}
