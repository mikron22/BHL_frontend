import React from "react"
import { useDispatch } from "react-redux"
import { switchRoute, changeMode } from "../actions"
import { ROUTE_FILEUPLOAD } from "../routeConstants"
import { useState } from "react";



const Home = () => {
        const [text, setText] = useState("Edit");
        const [mode, setMode] = useState("");
        const dispatch = useDispatch();
    
        const handleClick = e => {
            e.preventDefault()
    
            if (text === "Edit") {
                setText("Send")
            }
            else {
                setText("Edit")
                changeMode(dispatch, mode)
            }
        }

    return (
        <div className="container col-8 mt-4">
            <div className="jumbotron">
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

                <button type="button" class="btn btn-primary" onClick={(e) => handleClick(e)}>{text}</button>
                </p>
            </div>
        </div>
    )
}

export default Home

