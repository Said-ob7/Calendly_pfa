import { Link } from "react-router-dom";
import AppContent from "../components/AppContent";
import Navbar from "../components/Navbar";

function Login() {
  return (
    <div>
      <Navbar />
      <h1>Login Page</h1>
      <AppContent />
      <br />
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default Login;
