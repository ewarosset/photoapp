import React, {useEffect} from "react";
import {hotjar} from "react-hotjar";
import {PhotoViewer} from "../../PhotoViewer/PhotoViewer";
import {Clicker} from "../../Clicker/Clicker";

function Homepage() {

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

export default Homepage;
