import { useState } from "react";
import "./App.css";
import avatar from "./assets/images.jpg";

function App() {
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

    <div className={darkMode ? "container dark" : "container"}>

      <div className={darkMode ? "card dark-card" : "card"}>

        <div className="top-section"></div>

        <img
          src={avatar}
          alt="Student Avatar"
          className="avatar"
        />

        <h2>Nguyen Hoang Tu</h2>

        <h3>Software Engineering</h3>

        

        <p>
          <strong>Student ID:</strong> HE190852
        </p>

        <p>
          <strong>Class:</strong> FER202
        </p>

        <p className="likes">
           Total Likes: {likes}
        </p>

        <button onClick={handleLike}>
          Like for me
        </button>

        <h3>Hobbies</h3>

        <ul>
          {
            hobbies.map((hobby, index) => (
              <li key={index}>
                {hobby}
              </li>
            ))
          }
        </ul>

        {
          isOnline ? (
            <p className="online">
              Status: Online
            </p>
          ) : (
            <p className="offline">
              Status: Offline
            </p>
          )
        }

        <button onClick={handleToggleStatus}>
          Change Status
        </button>

        <button
          className="dark-mode-btn"
          onClick={handleDarkMode}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>

      </div>

    </div>
  );
}

export default App;