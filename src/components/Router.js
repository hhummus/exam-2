import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FeedPage from "./pages/FeedPage";
import LoginRegister from "./pages/LoginRegister";
import ProfilePage from "./pages/ProfilePage";
import UsersPage from "./pages/UsersPage";

const Pages = () => {
  return (
    <Router>
      <Routes>
        <Route path="feed" element={<FeedPage />} />
        <Route path="/" element={<LoginRegister />} />
        <Route path="profile/:id" element={<ProfilePage />} />
        <Route path="your-profil/:name" element={<UsersPage />} />

        <Route path="*" element={<div>Please check that your paths are correct before trying again.</div>} /> 
      </Routes>
    </Router>
  );
};

export default Pages;
