
const intialState = {
    route: "",
}


const routeReducer = (state = intialState, action) => {
    switch (action.type) {
        case "SWITCH_ROUTE":
            return {
                ...state,
                route: action.payload,
            }
        default:
            return state
    }
}

export default routeReducer
