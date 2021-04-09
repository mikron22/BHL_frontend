import { useDispatch } from "react-redux"
import { switchRoute } from "../actions"
import { ROUTE_FILEUPLOAD } from "../routeConstants"


const Home = () => {
    const dispatch = useDispatch()

    return (
        <div className="container col-8 mt-4">
            <div className="jumbotron">
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
        </div>
    )
}

export default Home
