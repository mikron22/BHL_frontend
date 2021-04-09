import axios from "axios"

const API_URL = "http://192.168.0.2:8080"


export const login = async (username, password, dispatch) => {
    await axios.post(API_URL + "/auth/login", {
        username,
        password
    }).then((response => {
        if (response.data) {
            console.log(response)
            dispatch({
                type: "SIGN_IN",
                payload: {
                    authToken: JSON.stringify(response.data)
                }
            })
        }
    })
    ).catch(error => {
        dispatch({
            type: "SIGN_IN",
            payload: {
                authToken: "123"
            }
        })
    })
}

export const logout = (dispatch) => {
    dispatch({
        type: "SIGN_OUT"
    })
}
