import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function signinHandler() {
    setMessage("Loading");

    if (email === "mahe@gmail.com" && password === "password") {
      setTimeout(() => {
        setMessage("User Logged in sucessfully");
      }, 3000);
    } else {
      setTimeout(() => {
        setMessage("Incorrect user email and password");
      }, 3000);
    }
  }
  return (
    <div>
      <h1> Login Page</h1>
      <input
        type="text"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={signinHandler}>Signin</button>
      {message && <p>{message}</p>}
    </div>
  );
}
