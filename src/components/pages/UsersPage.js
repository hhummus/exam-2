import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {baseUrl ,followProfilesEndpoint } from "../constants/Api";
import GoBack from "../constants/GoBack";
import Logo from "../navigation/Logo";
import Logout from "../navigation/Logout";
import ShowPost from "./userpage/ShowPost";
import "../css/ProfileUser.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faUser } from '@fortawesome/free-solid-svg-icons'
const token = localStorage.getItem("myToken")

export default function UsersPage() {
    let params = useParams();
    const name = params.name;

    useEffect(() => {
        getProfile();
    }, []);

    const [profile, setProfile] = useState([]);

    const getProfile = async () => {
        const settings = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
            }};
        try {
        // api request
        const response = await fetch(baseUrl + followProfilesEndpoint + name, settings);
        const data = await response.json();
            if(response.ok) {
            setProfile(data);
            let imgOk = (data.banner) ? `<img src="${data.banner}" alt="banner display" />` : `<p>Doesn't seem like ${data.name} has uploaded a banner photo just yet.</p>`
            console.log(data, imgOk)
            } 

        } catch (err) {
            console.log('error', err);
        }
    }
    return (
    <div>
        <div className="container">
            <div className="navigation row">
                <div className="col"><Logo /></div>
                <div className="col"><Logout /></div> 
            </div>
        </div>
            <GoBack />
            <div className="profileDisplay">

                <div className="bannerDisplay">
                  <p>banner</p>
                </div>
                <div className="avatar">
                    <FontAwesomeIcon icon={faUser} className="fa-solid fa-3x avatarIcon" />
                </div>
                
                <div className="userInfo">
                    <h1>{profile.name}</h1>
                    <div className="row">
                        <div className="col followers">
                         {/* <p>{profile._count.followers} followers</p>  */}  
                        </div>
                        <div className="col following">
                            {/* <p>{profile._count.followers} following</p>   */}
                        </div>
                    </div>
                </div>  
            </div>  
            <div className="container usersPosts">
                <h2>{profile.name}'s latest posts</h2>
                <ShowPost user={name}/>
            </div> 
    </div>         
    
       
    )
}

