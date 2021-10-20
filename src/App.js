import logo from './logo.svg';
import doggo from './dog-food.jpg'
import './App.css';
import {PhotoViewer} from "./PhotoViewer/PhotoViewer";
import {imageUrls} from "./PhotoViewer/getImages"
import React from "react";


function App() {
    return (
        <div className="App">
            <div>
                <h1 className="websiteHeader">React Photo Viewer</h1>
                <PhotoViewer/>
            </div>
        </div>

    );
}

export default App;
