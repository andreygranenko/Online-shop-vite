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
      const { user } = session;

      const { data, error } = await supabase
        .from('Users')
        .select(`email`)
        .eq('id', user.id)
        .single();

      if (!ignore) {
        if (error) {
          console.warn(error);
        } else if (data) {
          setEmail(data.email);
        }
      }

      setLoading(false);
    }

    getProfile();

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
      <h2>Heye {email}</h2>
    </>

  )
}

export default Homepage;
