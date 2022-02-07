import React, {useEffect} from "react";
import {hotjar} from "react-hotjar";
import {PhotoViewer} from "../../PhotoViewer/PhotoViewer";
import {Clicker} from "../../Clicker/Clicker";
import {Link, useNavigate} from "react-router-dom";
import ReactGA from "react-ga";

export const ClickHandlerEvent = () => {
    ReactGA.event({
        category: "Button",
        action: "Click",
        label: "key event"
    })
    alert("send the information to GA")}

function Homepage() {

    const navigate = useNavigate()

    return (
        <div className="App">
            <div>
                <h1 className="websiteHeader">React Photo Viewer</h1>
                <PhotoViewer/>
                <ReactGA.OutboundLink to="/otherpage" className={"myButton"}/>
                <Clicker
                />
                <button
                    type="button"
                    className="myButton"
                    onClick={() => {
                        ClickHandlerEvent();
                        navigate("/otherpage");
                }}

                >Navigate using navigate</button>
            </div>
        </div>

    );
}

export default Homepage;
