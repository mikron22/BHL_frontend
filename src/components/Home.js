import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { switchRoute, changeMode, changeHeating } from "../actions"
import {login, changeWeather} from "../actions"
import { ROUTE_FILEUPLOAD } from "../routeConstants"
import { useState, useCallback } from "react";
import axios from "axios"


const Home = () => {
    const [text, setText] = useState("Edytuj");
    const [mode, setMode] = useState("");
    const dispatch = useDispatch();
    const weather = useSelector((state) => state.weather.condition_icon)
    const wind_kph = useSelector((state) => state.weather.wind_kph)
    const temp_c = useSelector((state) => state.weather.temp_c)
    const cloud = useSelector((state) => state.weather.cloud)
    const roomHeating = useSelector((state) => state.heating.roomHeating)
    const boilerHeating = useSelector((state) => state.heating.boilerHeating)



    const data =  {
        "image": 10,
        "tempC": 1,
        "wind": "delectus aut autem",

         }

    const handleClick = e => {
        e.preventDefault()

        if (text === "Edytuj") 
        {
            setText("Wyślij")
        }
        else {
            setText("Edytuj")
            changeMode(dispatch, mode)
        }
    }
    
    const test = (src) => {
        document.getElementById("XD").src = src;
    }

    const handleUpdate = () => {
        changeWeather(dispatch)
        changeHeating(dispatch)
    }

    return (
        <div className="container mt-4">
            <div className="row">
             <div className="col">
                <div className="jumbotron h-100">
                    <h1>
                        <table className="table table-borderless">
                            <tbody>
                                <tr>
                                    <td><h1><i className="fas fa-home" style={{color:"#4582EC"}}/> 24°C</h1></td>
                                </tr>
                                <tr>
                                    <td><h1><i className="fas fa-bolt pl-2" style={{color:"#4582EC"}}/> 24 kWh</h1></td>
                                </tr>
                            </tbody>
                        </table>
                    </h1>
                </div>
            </div>
            <div className="col">
                <div className="jumbotron h-100">
                    <h1>
                        <table className="table table-borderless">
                            <tbody>
                                <tr>
                                    <td> <i className="fas fa-temperature-low fa-3x pl-3" style={{color:"#4582EC"}} /></td>
                                    <td><h1>{temp_c}°C</h1></td>

                                </tr>
                                <tr>
                                    <td> <i className="fas fa-wind fa-3x pl-2" style={{color:"#4582EC"}}/></td>
                                    <td><h1>{wind_kph} km/h</h1></td>
                                </tr>
                                <tr>
                                    <td><img className="" style = {{width: 50 }}src={weather}/></td>
                                    <td><h1>{cloud}%</h1></td>
                                </tr>
                            </tbody>
                        </table>
                    </h1>
                    <div className="d-flex w-100">
                        <button className="btn btn-primary mx-auto" onClick={handleUpdate()}>Aktualizuj</button>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="jumbotron h-100">
                <h1>
                        <table className="table table-borderless">
                            <tbody>
                                <tr>
                                    <td>
                                        <h5>
                                            {`Ogrzewanie jest ${roomHeating === true ? "włączone" : "wyłączone"}`}
                                        </h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5>
                                            {`Bojler jest ${boilerHeating === true ? "włączony" : "wyłączony"}`}
                                        </h5>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </h1>
                    {/* <p className="lead pt-2">
                    <fieldset>
                        <p> Tryb pracy: </p> */}

                        {/* <div className="form-group" style={{fontSize:19}}>
                            <div className="custom-control custom-radio">
                                <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input"  onClick={(e) => setMode("energooszczedny")} disabled = {text === "Edytuj"}/>
                                <label className="custom-control-label" for="customRadio1"> energooszczędny </label>
                            </div>
                            <div className="custom-control custom-radio">
                                <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" onClick={(e) => setMode("kompaktowy")} disabled = {text === "Edytuj"}/>
                                <label className="custom-control-label" for="customRadio2"> kompaktowy </label>
                            </div>
                            <div className="custom-control custom-radio">
                                <input type="radio" id="customRadio3" name="customRadio" className="custom-control-input" onClick={(e) => setMode("regeneracyjny")} disabled = {text === "Edytuj"}/>
                                <label className="custom-control-label" for="customRadio3"> regeneracyjny </label>
                            </div>
                            <div className="custom-control custom-radio">
                                <input type="radio" id="customRadio4" name="customRadio" className="custom-control-input"  onClick={(e) => setMode("energochlonny")} disabled = {text === "Edytuj"}/>
                                <label className="custom-control-label" for="customRadio4"> energochłonny </label>
                            </div>
                        </div> 
                    </fieldset> </div>
                        </p> 
                    <button type="button" className="btn btn-primary" onClick={(e) => handleClick(e)}>{text}</button>
                    */}
                </div>
            </div>
            </div>
        </div>
    )}

export default Home

