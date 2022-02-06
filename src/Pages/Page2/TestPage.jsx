import React, {useEffect} from "react";
import {hotjar} from "react-hotjar";
import {PhotoViewer} from "../../PhotoViewer/PhotoViewer";
import {Clicker} from "../../Clicker/Clicker";
import {Link} from "react-router-dom";

function Test() {

    useEffect(() => {
        hotjar.initialize(2813391, 6);
    }, []);

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
