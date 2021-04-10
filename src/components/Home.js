import React from "react"
import { useDispatch } from "react-redux"
import { switchRoute, changeMode } from "../actions"
import {login, weather} from "../actions"
import { ROUTE_FILEUPLOAD } from "../routeConstants"
import { useState } from "react";




const Home = () => {
    const [text, setText] = useState("Edit");
    const [mode, setMode] = useState("");
    const dispatch = useDispatch();

    const data =  {
        "image": 10,
        "tempC": 1,
        "wind": "delectus aut autem",
         }

    const handleClick = e => {
        e.preventDefault()

        if (text === "Edit") 
        {
            setText("Send")
        }
        else {
            setText("Edit")
            changeMode(dispatch, mode)
        }
    }

    const test = () => {
        document.getElementById("XD").src = "http://cdn.weatherapi.com/weather/64x64/day/113.png?fbclid=IwAR1Huegx9wSvHF9HXqfkfaKVGY06ofn6MRjd429oJFlW-SzwHq2_p5PlBGg";
    }

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="jumbotron col-4">
                    <h1><i className="fas fa-home"/> 24°C
                    <br/>

                        <i className="fas fa-bolt pl-2"/> 24 kWh
                    </h1>
                </div>
                <div className="jumbotron col-4">
                    <p className="lead pt-2">
                    <fieldset>
                        <p> Tryb pracy: </p>

                        <div class="form-group">
                            <div class="custom-control custom-radio">
                                <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input"  onClick={(e) => setMode("energooszczedny")} disabled = {text === "Edit"}/>
                                <label class="custom-control-label" for="customRadio1"> energooszczędny </label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input" onClick={(e) => setMode("kompaktowy")} disabled = {text === "Edit"}/>
                                <label class="custom-control-label" for="customRadio2"> kompaktowy </label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="customRadio3" name="customRadio" class="custom-control-input" onClick={(e) => setMode("regeneracyjny")} disabled = {text === "Edit"}/>
                                <label class="custom-control-label" for="customRadio3"> regeneracyjny </label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="customRadio4" name="customRadio" class="custom-control-input" onClick={(e) => setMode("energochlonny")} disabled = {text === "Edit"}/>
                                <label class="custom-control-label" for="customRadio4"> energochłonny </label>
                            </div>
                        </div>
                        </fieldset>
                        </p>
                    <button type="button" class="btn btn-primary" onClick={(e) => handleClick(e)}>{text}</button>
                </div>
                <div className="jumbotron col-4">
                    <h1>
                        <i className="fas fa-home"/> 24°C
                        <img id="XD" src="http://cdn.weatherapi.com/weather/64x64/night/113.png?fbclid=IwAR1Huegx9wSvHF9HXqfkfaKVGY06ofn6MRjd429oJFlW-SzwHq2_p5PlBGg"/>
                        <button onClick={() => weather(dispatch, data)}>abc</button>
                    </h1>
                </div>
            </div>
        </div>
    )}

export default Home

