import {useState} from "react";
import {supabase} from "./client.js";
import {Link} from "react-router-dom";
const SignInForm = () => {
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
    } catch (error) {
      alert(error.message);
    }

  }

  return (
    <>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} name={'email'} type="email" placeholder="Email" />
        <input onChange={handleChange} name={'password'} type="password" placeholder="Password" />
        <button type="submit">Sign In</button>
      </form>
      <h3>Don&apos;t have an account? <Link to={'/register'}>Sign Up</Link> </h3>
    </>
  );
}

export default SignInForm;