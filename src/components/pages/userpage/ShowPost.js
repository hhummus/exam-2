import { useEffect, useState } from "react";
import { followProfilesEndpoint, baseUrl  } from "../../constants/Api.js";
import PostaComment from "../feed/CommentOnPost.js";
import "../../css/Posts.css";
const token = localStorage.getItem("myToken");

const ShowPost = (props) => {
    useEffect(() => {
        getPosts();
    }, []);

    const [posts, setPosts] = useState([]);
    
    const getPosts = async () => {
        const settings = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
            }};
        try {
        // api request
        const response = await fetch(baseUrl + followProfilesEndpoint + props.user + '/posts', settings);
        const data = await response.json(); 
        if(response.ok) {
            setPosts(data);
            console.log(data);
        } 
        } catch (err) {
        console.log('error', err);
        }
    }
    return (
    <div>
    {posts.map(post => (      
        <div className="posts" id={post.id} data-target={post.id} key={post.id}>
            <div className="postContainer">
                <div className="row postBody">
                    <div className="col-9">
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                    <div className="col-3">   
                        <small className="post-id">id {post.id}</small>
                    </div>
                    <PostaComment id={Number(post.id)}/> 
                </div>
            </div>  
       </div>
    ))}
    </div>
    )
}
export default ShowPost;