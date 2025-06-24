import React from "react";
import "./ProfileCard.css";

function ProfileCard({ name, jobTitle, company, bio, skills, imageUrl }) {
  return (
    <div className="profile-card">
      <img src={imageUrl} alt="Profile" />
      <h2>{name}</h2>
      <h4>{jobTitle} at {company}</h4>
      <p>{bio}</p>
      <div className="skills">
        {skills.map((skill, idx) => (
          <span key={idx}>{skill}</span>
        ))}
      </div>
      <button onClick={() => console.log(`Contact ${name}`)}>Contact</button>
    </div>
  );
}

export default ProfileCard;
