import React, {useEffect} from "react";
import {hotjar} from "react-hotjar";
import {PhotoViewer} from "../../PhotoViewer/PhotoViewer";
import {Clicker} from "../../Clicker/Clicker";

function Test() {

    return (
        <div className="App">
            <div>
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

export default Test;
