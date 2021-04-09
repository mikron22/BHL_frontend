import { useDispatch } from "react-redux"
import { switchRoute } from "../actions"
import { ROUTE_FILEUPLOAD } from "../routeConstants"


const Home = () => {
    const dispatch = useDispatch()

    return (
        <div className="container col-8 mt-4">
            <div className="jumbotron">
                <h1 className="display-3">Hello!</h1>
                <p className="lead my-3">
                    This is a tool that enables the detection of plagiarism in JavaScript
                    source code.
                </p>
                <hr className="pt-4" />
                <p>Upload your file for analysis here:</p>
                <p className="lead pt-2">
                    <a
                        className="btn btn-primary"
                        onClick={() => switchRoute(dispatch, ROUTE_FILEUPLOAD)}
                        role="button"
                    >
                        Upload file
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Home
