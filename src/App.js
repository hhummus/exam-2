import LoginPage from "./components/pages/LoginRegister";
import Logo from "./components/navigation/Logo";
import Pages from "./components/Router";
import "./components/css/Nav.css";


function App() {
  return (
    <div className="App">
      <div className="navigation">
        <Logo />
      </div>
          <LoginPage />
          <Pages />
      </div>
      
  );

}

export default App;

