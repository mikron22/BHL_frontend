import { combineReducers } from "redux"
import routeReducer from "./route"
import authReducer from "./auth"
import modeReducer from "./mode"

const allReducers = combineReducers({
    routing: routeReducer,
    auth: authReducer,
    mode: modeReducer
})

export default allReducers
