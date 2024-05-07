// eslint-disable-next-line react/prop-types
import {Navigate} from "react-router-dom";

const Homepage = ({token}) => {

  console.log(token);
  if (!token) {
    return (
      <Navigate to={'/login'}/>
    )
  }
  return (
    // eslint-disable-next-line react/prop-types
    <h2>Hey {token.user.email}</h2>
  )
}

export default Homepage;