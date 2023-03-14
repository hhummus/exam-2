import { baseUrl, PostEntryEndpoint } from "../../constants/Api";
const token = localStorage.getItem("myToken");

export default function deletePost(e) {
    const id = e.target.getAttribute("data-target")

    const deleteit = async () => {
        const settings = {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`
            }};
        try {
        // api request
        const response = await fetch(baseUrl + PostEntryEndpoint + '/' + id, settings);
        const data = await response.json();
        console.log(data)
       
        window.location.reload();
        alert('You have succesfully deleted your post!') // lage modal som sier den ble slettet kanskje? bedre signal

        if(!response.ok) {
            console.log("error");
        } 
        } catch (err) {
        console.log('error', err);
        }
    }
    deleteit()
}