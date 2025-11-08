import React, { useState, useRef } from "react";
import axios from "axios";

const CreatePost = ({ activeTab, setActiveTab, Camera, Send, user, refreshPosts }) => {
  const url = import.meta.env.REACT_APP_BACKEND_URL;
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) setImage(file);
  };

  const handlePhotoClick = () => {
    fileInputRef.current.click();
  };

  const handlePostSubmit = async () => {
    if (!text && !image) return;

    const formData = new FormData();
    formData.append("text", text);
    formData.append("userId", user._id);
    formData.append("name", user.name);
    if (image) formData.append("image", image);

    try {
      await axios.post(`${url}/api/posts/`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // ✅ Refresh feed after posting
      await refreshPosts();

      // ✅ Reset form
      setText("");
      setImage(null);
    } catch (err) {
      console.log(err);
      alert("Error posting");
    }
  };

  return (
    <div className="top-section">
      <div className="feed-header">
        <div className="header-row">
          <h3>Create Post</h3>

          <div className="tab-buttons">
            <button
              className={activeTab === "all" ? "active" : ""}
              onClick={() => setActiveTab("all")}
            >
              All Posts
            </button>
            <button
              className={activeTab === "mine" ? "active" : ""}
              onClick={() => setActiveTab("mine")}
            >
              My Posts
            </button>
          </div>
        </div>
      </div>

      <div className="create-post-box">
        <div className="create-post-input-area">
          <div className="profile-placeholder">
            <img
              src={user?.picture || "/default-profile.png"}
              alt="profile"
            />
          </div>
          <input
            className="post-input"
            placeholder="What's on your mind?"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        {/* Hidden file input */}
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          ref={fileInputRef}
          onChange={handleImageSelect}
        />

        {image && (
          <p style={{ fontSize: "12px", color: "green" }}>
            Selected: {image.name}
          </p>
        )}

        <div className="create-post-actions">
          <button className="photo-btn" onClick={handlePhotoClick}>
            <Camera className="icon blue" /> Photo
          </button>
          <button
            className="post-btn"
            disabled={!text && !image}
            onClick={handlePostSubmit}
          >
            <Send className="icon" /> Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
