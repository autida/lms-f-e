import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  // const
  const handleLogout = () => {
    // () => navigate("/");
    setAuth({});
  };
  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
