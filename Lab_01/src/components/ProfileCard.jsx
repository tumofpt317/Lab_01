import { useState } from "react";
import avatar from "../assets/images.jpg";
import HobbyList from "./HobbyList";

function ProfileCard() {
  const [isOnline, setIsOnline] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [likes, setLikes] = useState(0);

  const hobbies = [
    "Coding",
    "Gaming",
    "Football",
    "Music"
  ];

  const handleToggleStatus = () => {
    setIsOnline(!isOnline);
  };

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className={darkMode ? "card dark-card" : "card"}>
      <div className="top-section"></div>
      <img src={avatar} alt="Student Avatar" className="avatar" />

      <h2>Nguyen Hoang Tu</h2>
      <h3>Software Engineering</h3>

      <p>
        <strong>Student ID:</strong> HE190852
      </p>
      <p>
        <strong>Class:</strong> FER202
      </p>

      <p className="likes">Total Likes: {likes}</p>
      
      <button onClick={handleLike} type="button">
        Like for me
      </button>

      <h3>Hobbies</h3>
      
      <HobbyList hobbies={hobbies} />

      {isOnline ? (
        <p className="online">Status: Online</p>
      ) : (
        <p className="offline">Status: Offline</p>
      )}

      <button onClick={handleToggleStatus} className="status-btn" type="button">
        Change Status
      </button>

      <button 
        className="dark-mode-btn" 
        onClick={handleDarkMode}
        style={{ marginLeft: "10px" }} 
        type="button"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

    </div>
  );
}

export default ProfileCard;
