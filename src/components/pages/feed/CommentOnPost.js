import { baseUrl, PostEntryEndpoint  } from "../../constants/Api";
import { useFormik } from "formik";
import * as yup from "yup";
import "../../css/Login.css";
const errorLogin = document.getElementById("tryAgain");
const token = localStorage.getItem("myToken");

// ------ using formik and yup -------- //
const PostaComment = (props) => {
    const formik = useFormik({
        initialValues: {
            body: '',
        },
        validationSchema: yup.object({
            body: yup.string().required("you can't post an empty comment.")
          }),
        onSubmit: values => {
            const postComment = async () => {
                const settings = {
                    method: 'POST',
                    // getting values from input field
                    body:JSON.stringify(values),
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }};
                try {
                    // api request
                  const response = await fetch(baseUrl + PostEntryEndpoint + '/' + props.id + '/comment' , settings);
                  const data = await response.json();
                        
                    if(response.ok) {
                        console.log(data)
                    } 
                    if(!response.ok) {
                        errorLogin.style.display = "block";
                    } 
                } catch (err) {
                  console.log('error', err);
                }
            }
            postComment();
          },
    });  

    return (
        <form onSubmit={formik.handleSubmit} className="commentContainer">
            <small id="tryAgain">Check your wifi network and try again.</small>
       
                    <label htmlFor="body"></label>
                    <input
                    id="body"
                    name="body"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.body}
                    />
                    {formik.errors.body ? (
                    <small className="error">{formik.errors.body}</small>
                    ) : null}
                 
                    <button
                    type="submit" 
                    className="postAComment"
                    id="postApost"
                    name="postButton">
                    Post Comment
                    </button>  
        </form>
    )
}

export default PostaComment;