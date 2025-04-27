import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { login } from "../api/apiCalls";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {

  const [form, setform] = useState({
    username: "",
    password: "",
  });
  const [hide, sethide] = useState(true)

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await login(form)

      if(response.state){

      setform({username:'',password:''})

      window.location.reload()

      toast.success(response.message)
      }

      console.log(response)

    } catch (error) {
      console.log(error)
    }
    
    
  }

  return (
    <>
      <main className="body">
        <section className="section-L anime-L">
          <h1>Welcome Back !!</h1>
          <p>
          Welcome back to *Tweety*! 🎉 You've been missed! Fresh stories, trending posts, and exciting conversations are waiting just for you. Don't miss out—dive in now, reconnect, and keep the energy alive. Your community is just a tap away!
          </p>
        </section>

        <section className="section-R ">
          <h1>Login here</h1>
          <div className="entry-fields">
            <div className="username">
              <label htmlFor="username">Username: </label>
              <input
                value={form.username}
                onChange={handleChange}
                name="username"
                type="text"
                placeholder=" Enter your username"
                id="username"
              />
            </div>

            <div className="password">
              <label htmlFor="password">Password: </label>
              <input
                value={form.password}
                onChange={handleChange}
                name="password"
                type={hide ? "password" : "text"}
                placeholder=" Enter your password"
                id="password"
              />
              
              <button className="eye-btn" onClick={()=> sethide(!hide)}> {hide ? <FaEyeSlash className="icon" /> : <FaEye className="icon" />} </button>
            </div>

            <button onClick={handleSubmit} className="login-button">Submit</button>
            <p>
              Wanna to create account ?{" "}
              <NavLink className="signup-btn" to={"/registration"}>
                {" "}
                SignUp here.{" "}
              </NavLink>{" "}
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
