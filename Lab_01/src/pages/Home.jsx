import { useState } from "react";
import ProfileCard from "../components/ProfileCard";

function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "container dark" : "container"}>
      <ProfileCard />
    </div>
  );
}

export default Home;
