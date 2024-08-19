import React from "react";
import { useForm } from "react-hook-form";

import "../styles/LoginPage.scss";

import logo from "../assets/loginpage-assets/twitter-logo.svg";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <main>
      <div className="lp-container">
        <img src={logo} alt="logo" className="lp-logo" />
        <h2 className="lp-h2">Log in to Twitter</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="lp-input"
          type="text"
          placeholder="Phone, number, email address"
          {...register("email", { required: "This field is required" })}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <input
          className="lp-input"
          type="password"
          placeholder="Password"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <button type="submit" className="lp-button">
          Log In
        </button>
      </form>
      <div className="lp-links">
        <Link to="/">Forgot Password</Link>
        <Link to="/signup">Sign up to Twitter</Link>
      </div>
    </main>
  );
};

export default LoginPage;
