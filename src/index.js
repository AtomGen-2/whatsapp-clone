import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
// sign in requirements imports
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateProvider.js"

ReactDOM.render(
  <React.StrictMode>
    {/* we push teh user information obtained on "Sign in" to the data layer*/}
    <StateProvider initialState = {initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
