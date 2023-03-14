import { useNavigate } from "react-router-dom";
const navigate = useNavigate();
function Logout() {

    return (
    <button className="logout" id="logout" onClick={handleLogout}>Log out</button>
    )
  }
  
  export default Logout;


function handleLogout(e) {
  console.log(e)
  localStorage.setItem("myToken", []);
  navigate("/")
  };



 