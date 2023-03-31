import { useEffect, useState } from "react";
import { myPostsEndpoint, baseUrl  } from "../../constants/Api";
import "../../css/Posts.css";
import deletePost from "./Delete";
import EditMyPost from "./EditMyPost";

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
    return (
    <div>  
        {myPosts.map(post => (      
        <div className="posts" id={post.id} data-target={Number(post.id)}>
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
                <div className="col">
                    <EditMyPost  postId={Number(post.id)}/>
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