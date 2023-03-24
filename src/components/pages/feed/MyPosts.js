import { useEffect, useState } from "react";
import * as yup from 'yup';
import { useFormik } from "formik";
import { myPostsEndpoint, PostEntryEndpoint, baseUrl  } from "../../constants/Api";
import "../../css/Posts.css";
import deletePost from "./Delete";

const token = localStorage.getItem("myToken");
const name = localStorage.getItem("name")

const MyPosts = () => {
    useEffect(() => {
        getPosts();
    }, []);

    const [myPosts, getMyPosts] = useState([]);
    
    const getPosts = async () => {
        const settings = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
            }};
        try {
        // api request
        const response = await fetch(baseUrl + myPostsEndpoint + name + '/posts', settings);
        const data = await response.json();

        if (response.ok){
        getMyPosts(data);
         }
        if(!response.ok) {
            console.log("error");
        } 
        } catch (err) {
        console.log('error', err);
        }
    }

    // hadling change of post 
    const formik = useFormik({
        initialValues: {
            title: '',
            body: ''
        },
        validationSchema: yup.object({
            title: yup.string().required(),
            body: yup.string()
          }),
        onSubmit: values => {
            const updatePost = async () => {
               const id = document.getElementById("idPost");
               const theId = id.getAttribute("data-target");

                const settings = {
                    method: 'PUT',
                    // getting values from editing the posted post
                    body:JSON.stringify(values),
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }};
                try {
                    // api request
                  const response = await fetch(baseUrl + PostEntryEndpoint + '/' + theId, settings);
                  const data = await response.json();
                  console.log(data)
                
                    if(!response.ok) {
                        console.log('something went wrong')
                    } 
                } catch (err) {
                  console.log('error', err);
                }
            }
           updatePost()         
}})
        
    return (
    <div>  
        {myPosts.map(post => (      
        <div className="posts" id="idPost" data-target={Number(post.id)}>
            <div className="postContainer">
                <div className="row">
                    <div className="col">
                        <small className="post-id">post id: {post.id}</small>
                    </div>
                </div>
            </div>
            <div className="row postBody">
                    <div className="col">
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
            </div>
            <div className="row commentAndEmoji">
                <div className="col editYourPost">
                    <button type="button" className="btn btn-primary getIdButton" data-toggle="modal" data-target="#exampleModalCenter" >
                        Edit
                    </button>
                    <div className="modal fade" 
                    id="exampleModalCenter" 
                    tabindex="-1" 
                    role="dialog"     
                    aria-labelledby="exampleModalCenterTitle" 
                    aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLongTitle">Edit your Post</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <form onSubmit={formik.handleSubmit}  className="container">
                                    <small id="tryAgain">Check your wifi network and try again.</small>
       
                                    <label htmlFor="title"></label>
                                    <input
                                    id="title"
                                    name="title"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.title}
                                    />
                                    {formik.errors.title ? (
                                    <small className="error">{formik.errors.title}</small>
                                    ) : null}

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
                                    className="editPost"
                                    id="editPost"
                                    name="editButton">
                                    Submit Changes
                                    </button>  
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>      
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col deleteYourPost">
                    <button type="button" onClick={deletePost} data-target={post.id}>Delete</button>
                </div>
            </div>
            
        </div>    
        ))} 
    </div>
    )
}
export default MyPosts;