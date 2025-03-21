import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { registration } from "../api/apiCalls";

const Register = () => {
  const [form, setForm] = useState({ username: "", mobile: "", password: "" });
  const [hide, setHide] = useState(true)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registration(form)

    console.log(response.message)

      setForm({ username: "", mobile: "", password: "" });
      window.location.reload()
    
    } catch (error) {
      console.log(error.response.data.error)
    }
    
  };
  return (
    <main className="body">
      <section className="section-R ">
        <h1>Register here</h1>
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

          <div className="mobile">
            <label htmlFor="mobile">Mob. No.: </label>
            <input
              value={form.mobile}
              onChange={handleChange}
              name="mobile"
              type="number"
              placeholder=" Enter your phone no."
              id="mobile"
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
            <button onClick={()=> setHide(!hide)} className="icon-register eye-btn">
             {hide ? <FaEyeSlash /> : <FaEye /> }
            </button>
          </div>

          <button onClick={handleSubmit} className="login-button">
            Submit
          </button>
          <p>
            Already have an account.{" "}
            <NavLink className="signup-btn" to={"/login"}>
              {" "}
              Login here{" "}
            </NavLink>{" "}
          </p>
        </div>
      </section>

      <section className="register anime-R section-L">
        <h1>Hii ! Buddy</h1>
        <p>
        Welcome to Tweety! 🚀 A world of fresh stories, exciting conversations, and amazing connections awaits you. Join now, share your thoughts, and be part of something awesome. Start your journey today and make every moment count!
        </p>
      </section>
    </main>
  );
};

export default Register;
