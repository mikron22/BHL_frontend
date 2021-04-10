
const intialState = {
    image:"",
    tempC:"",
    wind:""
}


const weatherReducer = (state = intialState, action) => {
    switch (action.type) {
        case "Change_Weather":
            return {
                ...state,
                image: action.payload.image,
                wind: action.payload.wind,
                tempC: action.payload.tempC
            }
        default:
            return state
    }
}

export default weatherReducer
