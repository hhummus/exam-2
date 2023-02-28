import "../css/Nav.css";
import Logo from "../navigation/Logo";
import Logout from "../navigation/Logout";

export default function FeedPage() {
    return (
        <>
        <div className="navigation">
        <Logo />
        <Logout />
        </div>

         <div>
            <h1>This is the feed page.</h1>
        </div>
        </>
       
    )
}