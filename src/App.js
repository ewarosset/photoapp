import logo from './logo.svg';
import doggo from './dog-food.jpg'
import './App.css';
import {PhotoViewer} from "./PhotoViewer/PhotoViewer";
import {Clicker} from "./Clicker/Clicker";
import {imageUrls} from "./PhotoViewer/getImages"
import React, {useEffect} from "react";
import { hotjar } from 'react-hotjar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Homepage from "./Pages/Homepage/Homepage";
import TestPage from "./Pages/Page2/TestPage";
import ReactGA from 'react-ga';

// const hotjarTest = () => {
//     hotjar.identify('USER_ID', { userProperty: 'value' });
//     hotjar.event('test-button');
//     hotjar.stateChange('/my/page');
// };

function App() {

    useEffect(() => {
        hotjar.initialize(2813391, 6);
    }, []);

    useEffect(() => {
        ReactGA.initialize('UA-219300525-2');
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="photoapp" element={<Homepage/>}/>
                <Route path="otherpage" element={<TestPage/>}/>
            </Routes>
        </Router>
    );
}

export default App;
