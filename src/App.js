
import './App.css';
import React, {useEffect} from "react";
import { hotjar } from 'react-hotjar';
import {HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Homepage from "./Pages/Homepage/Homepage";
import TestPage from "./Pages/Page2/TestPage";
import ReactGA from 'react-ga';

function usePageViews() {
    let location = useLocation();
    useEffect(() => {
        ReactGA.initialize('UA-219300525-2');
        // ReactGA.set({ page: location.pathname });
        // ReactGA.pageview(location.pathname);
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [location]);
}

const cookie = <script type="text/javascript" charSet="UTF-8"
                       src="//cdn.cookie-script.com/s/734d039edba9d0ec7bfa6cf3e7f8d521.js"></script>

function App() {

    // ReactGA.initialize('UA-219300525-2');


    useEffect(() => {
        hotjar.initialize(2813391, 6);
    }, []);

    usePageViews();

    return (
        <Routes>
            <Route path="" element element={<Homepage/>}/>
            <Route path="otherpage" element={<TestPage/>}/>
        </Routes>

    );
}

export default App;
