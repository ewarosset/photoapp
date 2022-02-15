import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter, useLocation} from "react-router-dom";
import {Helmet, HelmetProvider} from "react-helmet-async";

const hotJar = `(function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:2813391,hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`;
//
const googleAnalytics = `window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());

                  gtag('config', 'UA-219300525-2');`


const oneTrust = `function OptanonWrapper() { }`

// const history = createBrowserHistory();
//
// history.listen((location) => {
//     if (window.ga) {
//         window.ga('send', 'pageview', location.pathname);
//     }
// });

ReactDOM.render(
  <React.StrictMode>
      <HelmetProvider>
          <Helmet>
              {/*<script type="text/javascript" charSet="UTF-8"*/}
              {/*        src="//cdn.cookie-script.com/s/734d039edba9d0ec7bfa6cf3e7f8d521.js">*/}
              {/*</script>*/}
              <script type="text/javascript"
                      src="https://cdn-ukwest.onetrust.com/consent/b0af53b9-1706-4de5-8bf1-301b24cbabc4/OtAutoBlock.js"></script>
              <script src="https://cdn-ukwest.onetrust.com/scripttemplates/otSDKStub.js" type="text/javascript"
                      charSet="UTF-8" data-domain-script="b0af53b9-1706-4de5-8bf1-301b24cbabc4"></script>
              <script type="text/javascript">
                  {oneTrust}
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
