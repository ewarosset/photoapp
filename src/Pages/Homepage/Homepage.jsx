import React, {useEffect} from "react";
import {hotjar} from "react-hotjar";
import {PhotoViewer} from "../../PhotoViewer/PhotoViewer";
import {Clicker} from "../../Clicker/Clicker";
import {Link, useNavigate} from "react-router-dom";
import ReactGA from "react-ga";

function Homepage() {

    const ClickHandler = () => {
        ReactGA.event({
            category: "Button",
            action: "Click"
        })
        alert("send the information to GA")
    }

    const navigate = useNavigate()

    return (
        <div className="App">
            <div>
                <h1 className="websiteHeader">React Photo Viewer</h1>
                <PhotoViewer/>
                <Link to="/otherpage" className={"myButton"}/>
                <Clicker onClick={() => ClickHandler}
                />
                <button
                    type="button"
                    className="myButton"
                    onClick={() => ClickHandler}
                    onClick={() => navigate("/otherpage")}

                >Navigate using navigate</button>
            </div>
        </div>

    );
}

export default Homepage;
