import axios from "axios"


const changeHeating = (dispatch) => {
    return axios({
        method: "GET",
        url: "http://192.168.0.20:8000/current",
    }).then((response) => {
        dispatch({ type: "CHANGE_HEATING",
        payload: {
            ...response.data
        }
    })            
    })
    .catch((error) => {console.log(error);})

}

export default changeHeating
