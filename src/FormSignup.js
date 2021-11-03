import React from "react";

const FormSignup = () => {
  return (
    <div className="orm-content-right">
      <form className="form">
        <h1>Get started with us today!</h1>
        <div className="form-input">
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            name="username"
            className="form-input"
            placeholder="Enter your username"
          />
        </div>
        <div className="form-input">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
          />
        </div>
      </form>
    </div>
  );
};

export default FormSignup;
