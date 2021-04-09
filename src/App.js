import "bootswatch/dist/journal/bootstrap.min.css"
import { useSelector } from "react-redux"
import { NavigationBar, Login, Home, FileUpload, Reports } from "./components"
import { ROUTE_HOME, ROUTE_FILEUPLOAD, ROUTE_REPORTS } from "./routeConstants"


const getRouteComponent = (route, isSignedIn) => {
  if (!isSignedIn) {
    return <Login />
  }

  switch (route) {
    case ROUTE_HOME:
      return <Home />
    case ROUTE_FILEUPLOAD:
      return <FileUpload />
    case ROUTE_REPORTS:
      return <Reports />
    default:
      return <Home />
    // <p>Error</p>
  }
}


const App = () => {
  const route = useSelector((state) => state.routing.route)
  const isSignedIn = useSelector((state) => state.auth.isSignedIn)

  return (
    <div className="container-fluid px-0">
      <NavigationBar />
      <div>{getRouteComponent(route, isSignedIn)}</div>
    </div>
  )
}

export default App

