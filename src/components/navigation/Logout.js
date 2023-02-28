/* 

function Logout() {

    return (
    <button className="logout" id="logout">Log out</button>
    )
  }
  
  export default Logout;

  const logoutbutton = document.getElementById('logout');
  logoutbutton.addEventListener('click', handleLogout);

  function handleLogout(e){
    console.log(e)
    localStorage.getItem(token)

    if(!token === null || !token === 'undefined') {
        token = null;
        window.location.href ="/";
    }
 
  }

 */