import { baseUrl, authEndpoint } from "../../constants/Api"; 
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
export let token = '';
const errorLogin = document.getElementById("tryAgain");

// ------ using formik and yup -------- //
const LoginForm = () => {
  const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: yup.object({
            email: yup.string().email().required("You have to fill in your email."),
            password: yup.string().required("Wrong password. Please try again")
          }),
        onSubmit: values => {
            const userAuth = async () => {
                const settings = {
                    method: 'POST',
                    // getting values from the login input and storing them in body
                    body:JSON.stringify(values),
                    headers: {
                        'Content-Type': 'application/json'
                    }};
                try {
                    // api request
                  const response = await fetch(baseUrl + authEndpoint, settings);
                  const data = await response.json();
                 console.log(data)
                    if(response.ok) {
                        // saved to localStorage
                        token = data.accessToken; 
                        localStorage.setItem('myToken', token); 

                        // going to feed page if response is ok
                        navigate("feed");
                    } 
                    if(!response.ok) {
                        errorLogin.style.display = "block";
                    } 
                } catch (err) {
                  console.log('error', err);
                }
            }
            userAuth();
          },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
          <small id="tryAgain">Something went wrong. Email or password incorrect.</small>

          <label htmlFor="email">Email</label>
          <input pattern="^[\w\-.]+@(stud\.)?noroff\.no$" title="Only Noroff emails can register"
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? (
             <small className="error">{formik.errors.email}</small>
            ) : null}
 
          <label htmlFor="password">Password</label>
          <input 
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            />
            {formik.errors.password ? (
              <small className="error">{formik.errors.password}</small>
            ) : null}

          <button 
           type="submit" 
           className="login"
           id="loginButton"
           name="loginButton">
            Log in</button>        
        </form>
      );
}
export default LoginForm;