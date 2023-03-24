import { useEffect, useState } from "react";
import { profilesEndpoint, baseUrl  } from "../../constants/Api";
import FollowUnfollowButton from "./FollowUnfollowButton";
import "../../css/Posts.css";
const token = localStorage.getItem("myToken");

const Profiles = () => {
    useEffect(() => {
        getProfiles();
    }, []);


    const [profiles, setProfiles] = useState([]);
    const [error, setError] = useState(null);
    
    
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
        console.log(data);
        
        if(response.ok) {
            setProfiles(data);
        } else {
            setError('Something went wrong.')
        }

    } catch (err) {
        setError('Something went wrong.', err)
    }
}

return (
    <div>
        {profiles.map(profile => (      
            <div className="profiles" id={profile.id} data-target={profile.id} key={profile.id}>
                <div className="row">
                    <div className="col">
                        <p>{profile.name}</p>
                        <p>{error}</p>
                    </div>
                    <div className="col">
                       <FollowUnfollowButton followers={profile.followers} profileName={profile.name} />
                    </div>
                </div>

            </div>
        ))}
    </div>
)
}
export default Profiles;