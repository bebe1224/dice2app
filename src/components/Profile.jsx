import React from "react";
import "../styles/profile.css";  // Profile.css 경로 확인

function Profile({ img, summary, name }) {
  return (
    <div className="profile">  {/* 'Profile-card' -> 'profile-card'로 수정 */}
      <img src={img} alt={name} />
      <h2>{name}</h2>
      <p>{summary}</p>
    </div>
  );
}

export default Profile;
