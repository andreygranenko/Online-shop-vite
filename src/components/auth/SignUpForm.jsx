import {useState} from "react";
import {supabase} from "../../client.js";
import {Link} from "react-router-dom";
import './sign-up-form.sass';

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
      console.log(data);
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
      <div className="container signup-form">
        <h2>
          Create your account
        </h2>
        <form onSubmit={handleSubmit}>
          <input placeholder={'Email'} onChange={handleChange} type="email" id="email" name="email" />
          <input placeholder={'Password'} onChange={handleChange} type="password" id="password" name="password" />
          <button className={'btn btn-primary'} type="submit">Login</button>
        </form>
        <h3>Already have an account? <Link to={'/login'}>Login</Link></h3>
      </div>
    </>

  )
}

export default SignUpForm;