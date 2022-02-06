import React, {useEffect} from "react";
import {hotjar} from "react-hotjar";
import {PhotoViewer} from "../../PhotoViewer/PhotoViewer";
import {Clicker} from "../../Clicker/Clicker";
import {Link} from "react-router-dom";
import ReactGA from "react-ga";

function Test() {

    return (
        <div>
            <div>
                <Clicker/>
                <button
                    type="button"
                    className="myButton"
                />
                <Link to="/" className={"myButton"}/>
            </div>
        </div>

    );
}

export default Test;
