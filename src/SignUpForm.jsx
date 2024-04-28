import {useState} from "react";
import {supabase} from "./client.js";
import {Link} from "react-router-dom";

const SignUpForm = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password
      })
      if (error) {
        throw error;
      }
      alert("Check your email for the confirmation link")
    } catch (error) {
      alert(error.message);
    }
  }

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value
    }));
  }

  console.log(formData);
  return (
    <>
      <h2>
        Sign Up
      </h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input onChange={handleChange} type="email" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input onChange={handleChange} type="password" id="password" name="password" />
        <button type="submit">Sign Up</button>
      </form>
      <h3>Already have an account? <Link to={'/login'}>Sing In</Link></h3>
    </>

  )
}

export default SignUpForm;