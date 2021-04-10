
const changeMode = (dispatch, mode) => {
    dispatch({
        type: "CHANGE_MODE",
        payload: mode,
    })
}

export default changeMode