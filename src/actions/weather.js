import axios from "axios"


export const changeWeather =  (dispatch) => {
    
        return axios({
            method: "GET",
            url: "http://192.168.0.20:8000/current",
        }).then((response) => {
            dispatch({ type: "Change_Weather",
            payload: {
                ...response.data
            }
        })            
        })
        .catch((error) => {console.log(error);})
    
}