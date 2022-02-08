import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter} from "react-router-dom";
import {Helmet, HelmetProvider} from "react-helmet-async";

const hotJar = `(function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:2813391,hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`;

const googleAnalytics = `window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());

                  gtag('config', 'UA-219300525-2');`

ReactDOM.render(
  <React.StrictMode>
      <HelmetProvider>
          <Helmet>
              <script type="text/javascript" charSet="UTF-8"
                      src="//cdn.cookie-script.com/s/734d039edba9d0ec7bfa6cf3e7f8d521.js">
              </script>
              <script async src="https://www.googletagmanager.com/gtag/js?id=UA-219300525-2"></script>
              <script>
                  {googleAnalytics}
              </script>
              <script>
                  {hotJar}
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
