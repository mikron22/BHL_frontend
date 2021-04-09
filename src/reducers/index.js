import { combineReducers } from "redux"
import routeReducer from "./route"
import authReducer from "./auth"

const allReducers = combineReducers({
    routing: routeReducer,
    auth: authReducer,
})

export default allReducers
