import { useEffect, useState } from "react";
import { postsEndpoint, baseUrl  } from "../../constants/Api";
import PostaComment from "./CommentOnPost";
import followUnfollow from "./FollowUnfollow";
import "../../css/Posts.css";

const token = localStorage.getItem("myToken");

const Posts = () => {
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
        const response = await fetch(baseUrl + postsEndpoint, settings);
        const data = await response.json();

        setPosts(data);
        console.log(data);
    
        if(!response.ok) {
            console.log("error");
        } 
        } catch (err) {
        console.log('error', err);
        }
    }

    return (
    <div>
    {posts.map(post => (      
        <div className="posts" id={post.id} data-target={post.id}>
            <div className="postContainer">
                <div className="row">
                    <div className="col">
                        <small className="post-id">post id: {post.id}</small>
                    </div>
                    <div className="col followContainer"> 
                        <button type="button" 
                        className="followButton" 
                        
                        data-target={post.name}>Follow
                        </button>
                    </div>
                </div>
                <div className="row postBody">
                    <div className="col">
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                   
                <PostaComment id={Number(post.id)}/> 
               
                </div>
               
               
                
            </div>
               
       </div>
    ))}
    </div>
    )
}
export default Posts;