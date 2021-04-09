
const initialState = {
  isSignedIn: true,
  authToken: "",
}


const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        isSignedIn: true,
        authToken: action.payload.authToken
      }
    case "SIGN_OUT":
      return {
        ...state,
        isSignedIn: false,
        authToken: ""
      }
    default:
      return state
  }
}

export default authReducer
