const intialState = {
    roomHeating: false,
    boilerHeating: false
}


const heatingReducer = (state = intialState, action) => {
    switch (action.type) {
        case "CHANGE_HEATING":
            return {
                ...state,
                roomHeating: action.payload.roomHeating,
                boilerHeating: action.payload.boilerHeating,
            }
        default:
            return state
    }
}

export default heatingReducer
