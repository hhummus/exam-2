import { useNavigate } from "react-router-dom";
import "../css/logo.css";

function Logout() {
  const navigate = useNavigate();
 
  function handleLogout(e) {
  console.log(e)
  localStorage.setItem("myToken", []);
  navigate("/")
  };

  return (
    <button className="logout" id="logout" onClick={handleLogout}>Log out</button>
    )
  

}

export default Logout;