
const switchRoute = (dispatch, route) => {
    dispatch({
        type: "SWITCH_ROUTE",
        payload: route,
    })
}

export default switchRoute