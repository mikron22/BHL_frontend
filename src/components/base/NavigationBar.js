
import { useSelector, useDispatch } from "react-redux"
import { switchRoute, logout } from "../../actions"
import { ROUTE_HOME, ROUTE_FILEUPLOAD, ROUTE_REPORTS } from "../../routeConstants"


const NavigationBar = () => {
    const route = useSelector((state) => state.routing.route)
    // const isSignedIn = useSelector((state) => state.auth.isSignedIn)
    const dispatch = useDispatch()

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
            <a

                className="navbar-brand mx-auto pr-4"
                role="button"
                onClick={() => switchRoute(dispatch, ROUTE_HOME)}
            >
                NAZWA
        </a>
        </nav>
    )
}


export default NavigationBar
