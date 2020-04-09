import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Router from './Router';
import { Store } from './storeConfig'


if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./firebase-messaging-sw.js")
    .then(function(registration) {
      console.log("Registration successful, scope is:", registration.scope);
    })
    .catch(function(err) {
      console.log("Service worker registration failed, error:", err);
    });
}

ReactDOM.render(
  <Provider store={Store}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>

, document.getElementById('root'));