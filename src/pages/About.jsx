import { useState, useEffect } from "react";
import "../Style/About.css"; // for styling

function About() {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch team data from API
  useEffect(() => {
    async function fetchTeamData() {
      const response = await fetch("https://dummyjson.com/users?limit=3");
      const data = await response.json();
      setTeam(data.users);
      setLoading(false);
    }
    fetchTeamData();
  }, []);

  return (
    <div className="about-container">
      <h1 className="about-title">🍕 About Us</h1>

      {/* Story Paragraph */}
      <section className="story-section">
        <h2 className="section-title">Our Story</h2>
        <p className="section-text">
          Welcome to <span className="highlight">Pizza Palace</span>! 
          We started in 2010 with one dream — to make every pizza slice unforgettable.
          From fresh ingredients to secret sauces, every pizza is made with love and passion.
        </p>
      </section>

      {/* Mission Paragraph */}
      <section className="story-section">
        <h2 className="section-title">Our Mission</h2>
        <p className="section-text">
          Our mission is simple: deliver hot, cheesy, and delicious pizzas to everyone, everywhere.  
          We believe a great pizza can bring people together and create smiles.
        </p>
      </section>

      {/* Vision Paragraph */}
      <section className="story-section">
        <h2 className="section-title">Our Vision</h2>
        <p className="section-text">
          We aim to become the most loved pizza brand, known for quality, taste, and happiness in every bite.
        </p>
      </section>

      {/* Team Section */}
      <h2 className="section-title">Meet Our Team 👨‍🍳</h2>
      {loading ? (
        <p className="loading-text">Loading team members...</p>
      ) : (
        <div className="team-container">
          {team.map((member) => (
            <div key={member.id} className="team-card">
              <img src={member.image} alt={member.firstName} className="team-img" />
              <h3>{member.firstName} {member.lastName}</h3>
              <p>Pizza Specialist</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default About;
