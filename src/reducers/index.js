import { combineReducers } from "redux"
import routeReducer from "./route"
import authReducer from "./auth"
import modeReducer from "./mode"
import weatherReducer from "./weather"


const allReducers = combineReducers({
    routing: routeReducer,
    weather: weatherReducer,
    auth: authReducer,
    mode: modeReducer
})

export default allReducers
