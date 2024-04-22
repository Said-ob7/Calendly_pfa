import { Link } from "react-router-dom";
import AppContent from "../components/AppContent";
import Navbar from "../components/Navbar";

function Login() {
  return (
    <div>
      <Navbar />
      <AppContent />
      <br />
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default Login;
