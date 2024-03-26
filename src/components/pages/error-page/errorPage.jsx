import {useRouteError} from "react-router-dom";
import NavBar from "../../nav-bar/NavBar.jsx";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <NavBar/>
  )
}

export default ErrorPage;