import { baseUrl, followProfilesEndpoint } from "../../constants/Api";
const token = localStorage.getItem("myToken");
const followingStored = localStorage.getItem('following')

export default function followUnfollow(e){

    let targetName = e.target.getAttribute("data-target")
    //var for using with if statement checking for if name exists in localstorage
    const checkName = followingStored.includes(targetName);

    // if name is not found in localstorage follow profile
    if(!checkName) {
        const followProfile = async () => {
            // change inner text to unfollow
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
            let following = data.following;

            for (let i=0; i<following.length; i++){
                //set name in localstorage
                localStorage.setItem('following', following[i].name)
            }
        
            if(!response.ok) {
                console.log("error");
            } 
        } catch (err) {
            console.log('error', err);
            }
        }
        followProfile();
    }
    // if name is found in localstorage, unfollow profile
    if(checkName) {
        const unfollowProfile = async () => {
            // change inner text to follow
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
                let following = data.following;

            for (let i=0; i<following.length; i++){
                 //remove name in localstorage / updating localstorage
                localStorage.setItem('following', following[i].name)
            }
        
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

