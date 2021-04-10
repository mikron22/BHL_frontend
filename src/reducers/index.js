import { combineReducers } from "redux"
import routeReducer from "./route"
import authReducer from "./auth"
import weatherReducer from "./weather"


const allReducers = combineReducers({
    routing: routeReducer,
    weather: weatherReducer,
    auth: authReducer,
})

export default allReducers
