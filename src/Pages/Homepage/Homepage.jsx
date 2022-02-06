import React, {useEffect} from "react";
import {hotjar} from "react-hotjar";
import {PhotoViewer} from "../../PhotoViewer/PhotoViewer";
import {Clicker} from "../../Clicker/Clicker";
import {Link} from "react-router-dom";

function Homepage() {

    return (
        <div className="App">
            <div>
                <h1 className="websiteHeader">React Photo Viewer</h1>
                <PhotoViewer/>
                <Link to="/otherpage" className={"myButton"}/>
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
