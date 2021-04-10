
const intialState = {
    time: "",
    cloud:"",
    temp_c:"",
    condition_icon:"",
    wind_kph:""
}


const weatherReducer = (state = intialState, action) => {
    switch (action.type) {
        case "Change_Weather":
            return {
                ...state,
                time: action.payload.time,
                cloud: action.payload.cloud,
                temp_c: action.payload.temp_c,
                condition_icon: action.payload.condition_icon,
                wind_kph: action.payload.wind_kph
            }
        default:
            return state
    }
}

export default weatherReducer
