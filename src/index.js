import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter} from "react-router-dom";
import {Helmet, HelmetProvider} from "react-helmet-async";


ReactDOM.render(
  <React.StrictMode>
      <HelmetProvider>
          <Helmet>
              <script type="text/javascript" charSet="UTF-8"
                      src="//cdn.cookie-script.com/s/734d039edba9d0ec7bfa6cf3e7f8d521.js">
              </script>
          </Helmet>
          <HashRouter>
              <App />
          </HashRouter>
      </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
