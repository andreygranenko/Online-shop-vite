// eslint-disable-next-line react/prop-types
import {Navigate} from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Homepage = ({session, setSession}) => {
  console.log(session);

  // eslint-disable-next-line react/prop-types
  if (!session || !session.user) {
    const sessionFromStorage = JSON.parse(sessionStorage.getItem('token'));
    if (!sessionFromStorage) {
      return (
        <Navigate to={'/login'}/>
      )
    } else {
      setSession(sessionFromStorage);
      return <h2>Loading</h2>;
    }
  }

  return (
    // eslint-disable-next-line react/prop-types
    <h2>Hey {session.user.email}</h2>
  )
}

export default Homepage;
