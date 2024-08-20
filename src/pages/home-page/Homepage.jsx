// eslint-disable-next-line react/prop-types
import {Navigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {supabase} from '../../client.js';
import {motion} from "framer-motion";
import './homepage.sass';
// eslint-disable-next-line react/prop-types
const Homepage = ({session, setSession}) => {
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [username, setUsername] = useState(null);
  const [website, setWebsite] = useState(null);

  useEffect(() => {
    let ignore = false;
    async function getProfile() {
      setLoading(true);
      // eslint-disable-next-line react/prop-types
      const { user } = session;

      const { data, error } = await supabase
        .from('profiles')
        .select(`username, avatar_url, website, full_name`)
        // eslint-disable-next-line react/prop-types
        .eq('id', user.id)
        .single();


      if (!ignore) {
        if (error) {
          console.warn(error);
        } else if (data) {
          setEmail(data.username);
          setAvatarUrl(data.avatar_url);
          setUsername(data.full_name);
          setWebsite(data.website);
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

  const onUpdateProfile = async (event) => {
    event.preventDefault();
    setLoading(true);
    // eslint-disable-next-line react/prop-types
    const { user } = session;

    const updates = {
      // eslint-disable-next-line react/prop-types
      id: user.id,
      username: email,
      full_name: username,
      updated_at: new Date(),
    };

    const { error } = await supabase.from('profiles').upsert(updates);



    if (error) {
      alert(error.message);
    } else {
      alert('Profile updated');
    }
    setLoading(false);
  }

  const onSignOut = async () => {
    const { error } = await supabase.auth.signOut()
    setSession(null);
    sessionStorage.removeItem('token');
    if (error) {
      console.error('Sign out error', error)
    }
  }

  return (
    <>
      {loading ? <h2>Loading</h2> : null}
      {/* eslint-disable-next-line react/prop-types */}
      <motion.div
        className={'account-info container'}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}>
        <h2>Identification</h2>
        <h5>Verify your identity</h5>
        <form onSubmit={onUpdateProfile}>
          <div className={'info-wrap'}>
            <div className="info-container">
              <label htmlFor={'name'} className="label">Full name</label>
              <input
                value={username ? username : ''}
                placeholder={'John Smitt'}
                name={'name'}
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                className="info-container-inner"/>
            </div>
            <div className="info-container">
              <label htmlFor={'number'}  className="label">Phone number</label>
              <input
                value={website ? website : ''}
                name={'number'}
                placeholder={'23203232'}
                type="text"
                onChange={(e) => setWebsite(e.target.value)}
                className="info-container-inner"/>
            </div>
            <div className="info-container">
              <label htmlFor={'address'} className="label">username</label>
              <input
                value={email ? email : ''}
                name={'address'}
                placeholder={'test'}
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                className="info-container-inner"/>
            </div>
            <div className="info-container">
              <label className="label">Avatar url</label>
              <input
                value={avatarUrl ? avatarUrl : ''}
                placeholder={'google.com'}
                type="text"
                onChange={(e) => setAvatarUrl(e.target.value)}
                className="info-container-inner"/>
            </div>
          </div>
          <button className="update btn btn-primary">Update</button>

        </form>
        <button onClick={onSignOut} className="sign-out btn btn-danger">Sign out</button>

        {/*<h2>Hey {email}</h2>*/}
      </motion.div>
    </>

  )
}

export default Homepage;
