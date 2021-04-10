import { useDispatch } from "react-redux"
import {login, weather} from "../actions"
import { ROUTE_FILEUPLOAD } from "../routeConstants"



const Home = () => {
    const dispatch = useDispatch()
    const test = () => {
        document.getElementById("XD").src = "http://cdn.weatherapi.com/weather/64x64/day/113.png?fbclid=IwAR1Huegx9wSvHF9HXqfkfaKVGY06ofn6MRjd429oJFlW-SzwHq2_p5PlBGg";
    }

    const data =  {
        "image": 10,
        "tempC": 1,
        "wind": "delectus aut autem",

        // {
        //     "cloud": 10,
        //     "wind": 1,
        //     "img": "delectus aut autem",
        // },
        // {
        //     "cloud": 10,
        //     "wind": 1,
        //     "img": "delectus aut autem",
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
                                <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input"/>
                                <label class="custom-control-label" for="customRadio1"> energooszczędny </label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input"/>
                                <label class="custom-control-label" for="customRadio2"> kompaktowy </label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="customRadio3" name="customRadio" class="custom-control-input"/>
                                <label class="custom-control-label" for="customRadio3"> regeneracyjny </label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="customRadio4" name="customRadio" class="custom-control-input"/>
                                <label class="custom-control-label" for="customRadio4"> energochłonny </label>
                            </div>

                        </div>
                    </fieldset>
                    </p>
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


    )
}

export default Home
