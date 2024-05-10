import {useState} from "react";
import {supabase} from "../../client.js";
import {Link, useNavigate} from "react-router-dom";
import NavBar from "../nav-bar/NavBar.jsx";
import './sign-in-form.sass';
// eslint-disable-next-line react/prop-types
const SignInForm = ({setSession}) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });



  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      })
      if (error) {
        throw error;
      }
      console.log(data);
      sessionStorage.setItem('token', JSON.stringify(data));
      await setSession(data);
      navigate('/account');
    } catch (error) {
      alert(error.message);
    }

  }

  return (
    <>
      <NavBar/>
      <div className="container login-form">
        <h2>Log in to <span>VMTG</span></h2>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} name={'email'} type="email" placeholder="Email" />
          <input onChange={handleChange} name={'password'} type="password" placeholder="Password" />
          <button className={'btn btn-primary'} type="submit">Sign In</button>
        </form>
        <h3>Don&apos;t have an account? <Link to={'/register'}>Sign Up</Link> </h3>
      </div>

    </>
  );
}

export default SignInForm;