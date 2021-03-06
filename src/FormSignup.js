import React from "react";
import useForm from "./useForm";
import validate from "./validateInfo";
import "./Form.css";

const FormSignup = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(validate);

  return (
    <div className="orm-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Get started with us today!</h1>
        <div className="form-inputs">
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            name="username"
            id="username"
            className="form-input"
            placeholder="Enter your username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-input"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-input"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>

        <div className="form-inputs">
          <label htmlFor="password2">Confirm password</label>
          <input
            type="password2"
            name="password2"
            id="password2"
            className="form-input"
            placeholder="Confirm your password"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className="form-input-btn" type="submit">
          Sign Up
        </button>
        <span className="form-input-login">
          Already have an account? Login <a href="#">Here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
