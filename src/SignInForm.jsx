import {useState} from "react";
import {supabase} from "./client.js";
const SignInForm = () => {
  const [formData, setFormData] = useState({
    email: formData.email,
    password: formData.password
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
        email: 'example@email.com',
        password: 'example-password',
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
    </>
  );
}

export default SignInForm;