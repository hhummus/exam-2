import "../css/Nav.css";
import "../css/SearchAndPostInputForm.css";
import PostaPost from "../constants/PostAPost";
import SearchForm from "../constants/SearchForm";
import Logo from "../navigation/Logo";
import Logout from "../navigation/Logout";
import Posts from "./feed/Posts";
import Profiles from "./feed/Profiles";
import MyPosts from "./feed/MyPosts";

function FeedPage() {
    return (
    <>
        <div className="container">
            <div className="navigation row">
                <div className="col"><Logo /></div>
                <div className="col"><Logout /></div> 
            </div>
        </div>
        <div className="sectionOne">
            <div className="container">
            <PostaPost />
            </div>
            
        </div>

        <div className="sectionTwo" id="myGroup">
            <div className="container">
                <h2 className="feedTitle">Your feed</h2>
                <div className="row feedNav">
                    <div className="col">
                    <a className="chooseFeed" data-toggle="collapse" href="#allPosts" role="button" aria-expanded="false" aria-controls="collapseExample">
                        All Posts
                    </a>
                    </div>
                    
                    <div className="col">
                    <a className="chooseFeed" data-toggle="collapse" href="#allProfiles" role="button" aria-expanded="false" aria-controls="collapseExample2">
                        Profiles
                    </a>
                    </div>
                   
                    <div className="col">
                    <a className="chooseFeed" data-toggle="collapse" href="#yourPost" role="button" aria-expanded="false" aria-controls="collapseExample3">
                        Your Posts
                    </a>
                    </div>       
                    
                </div>
            </div>

            
            <div className="collapse" 
            id="allPosts" 
            data-parent="#myGroup">
                <div className="search">
                <SearchForm placeholder={"Search posts by ID..."} id={"SearchPosts"}/>
            </div>
                <div className="container feed">
                    < Posts />
                </div>
            </div>
            <div className="collapse" 
            id="allProfiles" 
            data-parent="#myGroup">
                <div className="search">
                <SearchForm placeholder={"Search profiles by name..."} id={"SearchProfiles"}/>
            </div>
                <div className="container feed">
                    <Profiles/>
                </div>
            </div>
            <div className="collapse" 
            id="yourPost" 
            data-parent="#myGroup">
                <div className="container feed">
                    <MyPosts/>
                </div>
            </div>
        </div>  
        
        
    </>
       
    )
}

export default FeedPage;