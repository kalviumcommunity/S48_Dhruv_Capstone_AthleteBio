import React from "react";
import "./homepage.css";

// Import images from the src/images/ folder
import mclaren from "../images/mclaren logo.jpg";
import ferrari from "../images/ferrari.jpg";
import redbull from "../images/red-bull.jpg";
import mercedes from "../images/mercedes-amg-f1-logo.png";
import astonmartin from "../images/aston martin.png";
import alpine from "../images/alpine.jpg";
import kick from "../images/Kick.com_icon_logo.svg.png";
import haas from "../images/haas.png";
import williams from "../images/williams.png";
import visarb from "../images/vcarb.png";

const teams = [
  { name: "McLaren", logo: mclaren },
  { name: "Ferrari", logo: ferrari },
  { name: "Red Bull", logo: redbull },
  { name: "Mercedes", logo: mercedes },
  { name: "Aston Martin", logo: astonmartin },
  { name: "Alpine", logo: alpine },
  { name: "Kick Sauber", logo: kick },
  { name: "Haas", logo: haas },
  { name: "Williams", logo: williams },
  { name: "Visa RB", logo: visarb }
];

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="header">
        <h1>Athlete Bio</h1>
        <div className="search-auth">
          <input type="text" placeholder="Search..." />
          <button>Sign up</button>
          <button>Login</button>
        </div>
      </header>

      <div className="team-logos">
        {teams.map((team, index) => (
          <img key={index} src={team.logo} alt={team.name} className="team-logo" />
        ))}
      </div>

      <main className="content">
        <h2>Home</h2>
        <div className="about-box">
          <h3 className="about-title">About Formula 1</h3>
          <p className="about-text">
            Formula One, commonly known as F1, is the pinnacle of open-wheeled auto racing, established in 1950. The competition unfolds globally, featuring races known as Grands Prix, held on both specialized circuits and temporary urban tracks.F1 showcases a fierce rivalry among the world’s premier automotive brands to a global audience with an average of about 90 million viewers per grand prix. The vehicles, renowned for reaching speeds approximately 360 km/h (224 mph), boast 1.6L hybrid turbocharged engines that can rev up to 15,000 RPM. A standard Formula One race spans roughly 305 km (190 mi) for about 2 hours.
          </p>
        </div>
      </main>
    </div>
  );
};

export default HomePage;