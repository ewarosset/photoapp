import React, {useState} from "react";
import './Clicker.css';
import {ClickHandlerEvent} from "../Pages/Homepage/Homepage";

export function Clicker(){

    const [clickNumber, setClickNumber] = useState(0);

    const randomList = ["doggo", "pupper", "subwoofer", "woofer"];

    function incrementCount(){
        setClickNumber(clickNumber +1);
    }

    return (
        <div className="buttonArea">
            <button className="myButton" onClick={ClickHandlerEvent} onClick={incrementCount}>Click me</button>
            <p className="clickNumber">Number of clicks: {clickNumber}</p>

            <section>

                <text>This will display a list</text>
                <ul>
                    {randomList.map((rando) => (

                        <li>{rando}</li>
                         ))}

                </ul>

            </section>




        </div>
    )
}
