"use client"
import React from "react";
import "./UserProfile.module.scss";

interface UserProfileProps {
  name: string;
  bio: string;
  avatar: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

const UserProfile: React.FC<UserProfileProps> = ({ name, bio, avatar, social }) => {
  return (
    <div className="user-profile">
      <img src={avatar} alt={name} className="avatar" />
      <h2 className="name">{name}</h2>
      <p className="bio">{bio}</p>
      <div className="social-links">
        {social.twitter && <a href={social.twitter} target="_blank" className="twitter">🐦 Twitter</a>}
        {social.linkedin && <a href={social.linkedin} target="_blank" className="linkedin">🔗 LinkedIn</a>}
        {social.github && <a href={social.github} target="_blank" className="github">💻 GitHub</a>}
      </div>
    </div>
  );
};

export default UserProfile;
