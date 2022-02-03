import logo from './logo.svg';
import doggo from './dog-food.jpg'
import './App.css';
import {PhotoViewer} from "./PhotoViewer/PhotoViewer";
import {Clicker} from "./Clicker/Clicker";
import {imageUrls} from "./PhotoViewer/getImages"
import React, {useEffect} from "react";
import { hotjar } from 'react-hotjar';


// const hotjarTest = () => {
//     hotjar.identify('USER_ID', { userProperty: 'value' });
//     hotjar.event('test-button');
//     hotjar.stateChange('/my/page');
// };

function App() {

    useEffect(() => {
        hotjar.initialize(2813391, 6);
    }, []);
    return (
        <div className="App">
            <div>
                <h1 className="websiteHeader">React Photo Viewer</h1>
                <PhotoViewer/>
                <Clicker/>
                <button
                    type="button"
                    className="myButton"
                    // onClick={hotjarTest}
                />
            </div>
        </div>

    );
}

export default App;
