import { baseUrl, followProfilesEndpoint } from "../../constants/Api";
const token = localStorage.getItem("myToken");

export default function followUnfollow(e){
    let targetName = e.target.getAttribute("data-target")

    // when refreshing the page the button text goes back to ''follow''
    //regardless of if I'm following the user. 
    if(e.target.innerText === "Follow") {
        const followProfile = async () => {
            e.target.innerText = "Unfollow";
            const settings = {
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${token}`
                }};
        try {
            // api request
            const response = await fetch(baseUrl + followProfilesEndpoint + targetName + "/follow", settings);
            const data = await response.json();
            console.log(data);
        
            if(!response.ok) {
                console.log("error");
            } 
            } catch (err) {
            console.log('error', err);
            }
        }
        followProfile();
     // unfollow 
    } else {
        const unfollowProfile = async () => {
        e.target.innerText = "Follow";
        const settings = {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${token}`
            }};
        try {
            // api request
            const response = await fetch(baseUrl + followProfilesEndpoint + targetName + "/unfollow", settings);
            const data = await response.json();
            console.log(data);
    
            if(!response.ok) {
            console.log("error");
            } 
        } catch (err) {
        console.log('error', err);
        }
        }
        unfollowProfile(); 
    }
}


