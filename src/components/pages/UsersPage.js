import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {baseUrl ,followProfilesEndpoint } from "../constants/Api";
import GoBack from "../constants/GoBack";
import Logo from "../navigation/Logo";
import Logout from "../navigation/Logout";
import "../css/ProfileUser.css";
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
        console.log(data);
            if(response.ok) {
                setProfile(data);
                let imgOk = (data.banner) ? `<img href={data.banner} alt="banner display" />` : `<p>Doesn't seem like {data.name} has uploaded a banner photo just yet.</p>`
                console.log(imgOk)
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
            <GoBack />
            <div className="profileDisplay">

            <div className="bannerDisplay">
            <p>Here i want the imgOk var</p>
            </div>

                <h1>{profile.name}</h1>
                
                <div className="row">
                    <div className="col">
                        <p>{profile._count.followers} followers</p> 
                    </div>
                    <div className="col">
                     <p>{profile._count.following} following</p>
                    </div>
                </div>
            </div>   
        </div>         
    </div>
       
    )
}

