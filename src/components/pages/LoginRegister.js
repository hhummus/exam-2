/* Login and register form */ 
import LoginForm from "./login/Loginform";
import RegisterForm from "./login/Registerform";
import "../../components/css/Login.css";




export default function LoginPage() {
  

return (
<div className="container-sm container-forms">
    <p className="login-register-cta">
        <button className="login-cta" type="button" data-toggle="collapse" data-target="#login" aria-expanded="true" aria-controls="login">
        Login
        </button>
        <button className="register-cta" type="button" data-toggle="collapse" data-target="#register" aria-expanded="false" aria-controls="register">
        Register
        </button>
    </p>
    <div className="collapse show" id="login">
        <div className="card card-body">
            <LoginForm />
        </div>
    </div>

    <div className="collapse" id="register">
        <div className="card card-body">
           <RegisterForm />
        </div>
    </div>
</div>
)
}


