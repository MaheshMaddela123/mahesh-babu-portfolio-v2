import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const defaultUsers = [
  { username: "admin", password: "password" },
];

const Login = () => {
  const [mode, setMode] = useState("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("All fields required");
      return;
    }

    const storedUsers =
      JSON.parse(localStorage.getItem("users")) || [];

    if (mode === "signup") {
      // 🔹 SIGNUP
      const exists = storedUsers.some(
        (u) => u.username === username
      );

      if (exists) {
        alert("User already exists");
        return;
      }

      const newUser = { username, password };
      const updatedUsers = [...storedUsers, newUser];

      localStorage.setItem(
        "users",
        JSON.stringify(updatedUsers)
      );

      alert("Signup successful. Please login.");
      setMode("login");
      setUsername("");
      setPassword("");
    } else {
      const allUsers = [...defaultUsers, ...storedUsers];

      const validUser = allUsers.find(
        (u) =>
          u.username === username &&
          u.password === password
      );

      if (!validUser) {
        alert("Invalid credentials");
        return;
      }

      localStorage.setItem(
        "currentUser",
        JSON.stringify(validUser)
      );

      navigate("/", { replace: true });
    }
  };

  return (
    <div className="login-container">
      <h1>{mode === "login" ? "Login" : "Signup"}</h1>

      <form className="formData" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">
          {mode === "login" ? "Login" : "Signup"}
        </button>
      </form>

      <p>
        {mode === "login"
          ? "Don't have an account?"
          : "Already have an account?"}

        <span
          style={{ color: "blue", cursor: "pointer", marginLeft: 5 }}
          onClick={() =>
            setMode(mode === "login" ? "signup" : "login")
          }
        >
          {mode === "login" ? "Signup" : "Login"}
        </span>
      </p>
    </div>
  );
};

export default Login;