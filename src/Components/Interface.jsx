import React from 'react';
import { FaTwitter, FaLinkedin, FaCalendarAlt, FaClock } from 'react-icons/fa';
import { MdPostAdd, MdHistory } from 'react-icons/md';
import './Interface.css';
import axios from 'axios'
const Interface =  () => {
    const TwitterLogin =async () =>{
       await window.open("http://localhost:4000/oauth/twitter")
    }
    const LinkidenLogin = async () =>{
        await window.open("http://localhost:4000/oauth/linkedin")
    }
  return (
    <div className="scheduler-app">
      {/* Header */}
      <header className="app-header">
        <h1>Social Scheduler</h1>
        <div className="auth-buttons">
          <button className="auth-btn twitter" onClick={()=> TwitterLogin()}>
            <FaTwitter /> Continue with Twitter
          </button>
          <button className="auth-btn linkedin" onClick={()=> LinkidenLogin()}>
            <FaLinkedin /> Continue with LinkedIn
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="app-main">
        {/* Navigation Tabs */}
        <nav className="tabs">
          <button className="tab active">
            <MdPostAdd /> Schedule Post
          </button>
          <button className="tab">
            <MdHistory /> Post History
          </button>
        </nav>

        {/* Post Form */}
        <div className="post-form">
          <textarea 
            placeholder="Write your post here..."
            className="post-input"
          />
          
          <div className="schedule-options">
            <div className="time-selector">
              <FaCalendarAlt className="icon"/>
              <input type="date" className="date-picker" />
            </div>
            <div className="time-selector">
              <FaClock className="icon"/>
              <input type="time" className="time-picker" />
            </div>
          </div>

          <button className="schedule-btn">
            Schedule Post
          </button>
        </div>

        {/* Scheduled Posts List */}
        <div className="posts-list">
          <div className="post-card">
            <p className="post-content">Sample scheduled post content</p>
            <div className="post-meta">
              <span className="platform twitter">Twitter</span>
              <span className="schedule-time">May 25, 2024 at 2:30 PM</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Interface;