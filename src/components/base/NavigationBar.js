
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
                className="navbar-brand pr-4"
                role="button"
                onClick={() => switchRoute(dispatch, ROUTE_HOME)}
            >
                PLAGIARISM DETECTION
        </a>
            <div className="navbar-nav w-100">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a
                            className={`${route === ROUTE_FILEUPLOAD ? "nav-link active" : "nav-link"
                                }`}
                            role="button"
                            onClick={() => switchRoute(dispatch, ROUTE_FILEUPLOAD)}
                        >
                            Upload file
                  </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className={`${route === ROUTE_REPORTS ? "nav-link active" : "nav-link"
                                }`}
                            role="button"
                            onClick={() => switchRoute(dispatch, ROUTE_REPORTS)}
                        >
                            Reports
                  </a>
                    </li>
                </ul>
                <a
                    type="button"
                    className="btn btn-secondary"
                    data-container="body"
                    data-toggle="popover"
                    data-placement="right"
                    onClick={() => logout(dispatch)}
                >
                    Log out
                </a>
            </div>
        </nav>
    )
}

export default NavigationBar
