


export const weather =  (dispatch, data) => {
    dispatch({
        type: "Change_Weather",
        payload: {
            ...data
        }
    })

}