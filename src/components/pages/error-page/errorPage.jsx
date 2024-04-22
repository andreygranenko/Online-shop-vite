import {useRouteError} from "react-router-dom";
import NavBar from "../../nav-bar/NavBar.jsx";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <NavBar/>
  )
}

export default ErrorPage;