import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';

const PostsSection = ({ filteredPosts, Heart, MessageCircle, Share2, user }) => {
  const url = import.meta.env.REACT_APP_BACKEND_URL;
  const [posts, setPosts] = useState(filteredPosts);
  const [openComments, setOpenComments] = useState(null);
  const [commentText, setCommentText] = useState("");

  useEffect(() => {
    setPosts(filteredPosts);
  }, [filteredPosts]);

  function formatPostDate(dateString) {
    const date = new Date(dateString);
    const day = date.toDateString();
    const time = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true });
    return `${day} · ${time}`;
  }

  const handleLike = async (postId) => {
    try {
      const { data } = await axios.post(`${url}/api/posts/${postId}/like`, { userId: user._id });
      setPosts((prev) => prev.map(p => p._id === postId ? { ...p, likes: data.likes } : p));
    } catch (err) {
      console.error(err);
    }
  }

  const handleComment = async (postId) => {
    if (!commentText) return;
    try {
      const { data } = await axios.post(`${url}/api/posts/${postId}/comment`, {
        userId: user._id,
        text: commentText,
      });

      setPosts((prev) => prev.map(p => p._id === postId ? { ...p, comments: data.comments } : p));
      setCommentText("");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="posts-section">
      {posts.map((post) => (
        <div key={post._id} className="post-card">
          <div className="post-header">
            <div className="profile-placeholder">
              <img src={post?.user?.picture || "/default-profile.png"} alt="profile" />
            </div>
            <div className="post-user-info">
              <p className="name">{post?.user?.name || "Unknown User"}</p>
              <p className="time">{formatPostDate(post.createdAt)}</p>
            </div>
          </div>

          <p className="post-text">{post.text}</p>

          {post.image && <img src={post.image} alt="post" className="post-image" />}

          <div className="post-actions">
            <button onClick={() => handleLike(post._id)}><Heart className="icon" /> {post.likes?.length || 0}</button>
            <button onClick={() => setOpenComments(openComments === post._id ? null : post._id)}><MessageCircle className="icon" /> {post.comments?.length || 0}</button>
            <button><Share2 className="icon" /> {post.shares}</button>
          </div>

          {openComments === post._id && (
            <div className="comments-section">
              <div className="existing-comments">
                {post.comments?.map((c, idx) => (
                  <p key={idx}>
                    <strong>{c?.user?.name || "User"}:</strong> {c.text}
                  </p>
                ))}


              </div>

              <div className="add-comment">
                <input
                  type="text"
                  placeholder="Write a comment..."
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                />
                <button onClick={() => handleComment(post._id)}>Post</button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default PostsSection;