import React from 'react';
import ReactDOM from 'react-dom';
import "./index.scss";
import App from "./component/App/App";
import APIProvider from "./context/APIContext";

ReactDOM.render(
  <React.StrictMode>
    <APIProvider>
      <App />
    </APIProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
