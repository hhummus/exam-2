import { useEffect, useState } from "react";
import { profilesEndpoint, baseUrl  } from "../../constants/Api";
import followUnfollow from "./FollowUnfollow";
import "../../css/Posts.css";
const token = localStorage.getItem("myToken");

const Profiles = () => {
    useEffect(() => {
        getProfiles();
    }, []);


    const [profiles, setProfiles] = useState([]);
    
    
    const getProfiles = async () => {
        const settings = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
            }};
        try {
        // api request
        const response = await fetch(baseUrl + profilesEndpoint, settings);
        const data = await response.json();

        setProfiles(data);
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
        {profiles.map(profile => (      
            <div className="profiles" id={profile.id} data-target={profile.id} key={profile.id}>
                <div className="row">
                    <div className="col">
                        <p>{profile.name}</p>
                    </div>
                    <div className="col">
                        <button type="button" className="followButton" data-target={profile.name}>Follow</button>
                    </div>
                </div>

            </div>
        ))}
    </div>
)
}
export default Profiles;