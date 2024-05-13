// eslint-disable-next-line react/prop-types
import {Navigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {supabase} from './client.js';
// eslint-disable-next-line react/prop-types
const Homepage = ({session, setSession}) => {
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    let ignore = false;
    async function getProfile() {
      setLoading(true);
      // eslint-disable-next-line react/prop-types
      const { user } = session;

      const { data, error } = await supabase
        .from('profiles')
        .select(`username`)
        .eq('id', user.id)
        .single();


      if (!ignore) {
        if (error) {
          console.warn(error);
        } else if (data) {
          setEmail(data.username);
        }
      }

      setLoading(false);
    }

    if (session) getProfile();


    return () => {
      ignore = true;
    }
  }, [session]);

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
    <>
      {/* eslint-disable-next-line react/prop-types */}
      <h2>Hey {email}</h2>
    </>

  )
}

export default Homepage;
