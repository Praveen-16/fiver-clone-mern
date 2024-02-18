import React, { useState } from "react";
import "./Login.scss"; 
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";

function CustomLogin() { 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null); 

  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => { 
    e.preventDefault();
    try {
      const loginResponse = await newRequest.post("/auth/login", { username, password });
      localStorage.setItem("currentUser", JSON.stringify(loginResponse.data));
      navigate("/");
    } catch (loginErr) {
      setLoginError(loginErr.response.data); 
    }
  };

  return (
    <div className="custom-login">
      <form onSubmit={handleLoginSubmit}>
        <h1>Sign in</h1>
        <label htmlFor="username">Username</label>
        <input
          name="username"
          type="text"
          placeholder="YourUsername" 
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {loginError && <div className="login-error">{loginError}</div>} 
      </form>
    </div>
  );
}

export default CustomLogin;
