import React, { useState } from "react";
import { Link } from "react-router-dom";

// import axios from "axios";

function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    passTooShort: false,
    emailFormat: false,
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const registerSubmit = async (e) => {
    e.preventDefault();
    validations();
    // if (validations ok ) {try (axios)}
  };

  const validations = () => {
    if (user.password.length < 6) {
      setError.passTooShort(true);
    } else if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        user.email
      )
    ) {
      setError.EmailFormat(true);
    }
  };
  return (
    <div className="login-page">
      <form onSubmit={registerSubmit}>
        <h2>Register</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={user.name}
          onChange={onChangeInput}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={onChangeInput}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={onChangeInput}
        />
        <div>
          <button type="submit">Register</button>
          <p>Already have an account?</p>
          <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
