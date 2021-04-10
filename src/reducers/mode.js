const intialState = {
    mode: "",
}


const modeReducer = (state = intialState, action) => {
    switch (action.type) {
        case "CHANGE_MODE":
            return {
                ...state,
                mode: action.payload,
            }
        default:
            return state
    }
}

export default modeReducer
