import { MessageCircle, Heart, Share2, Camera, Send, LogOut } from "lucide-react";
import { useOutletContext, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import FeedHeader from "../components/FeedHeader";
import CreatePost from "../components/CreatePost";
import PostsSection from "../components/PostsSection";
import axios from "axios";
import "../css/Feed.css";

const FeedPage = () => {
      const url = import.meta.env.REACT_APP_BACKEND_URL;
    const [activeTab, setActiveTab] = useState("all");
    const [showMenu, setShowMenu] = useState(false);
    const { user, setUser } = useOutletContext();
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);

    // ✅ Load user from localStorage
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        } else {
            navigate("/"); 
        }
    }, []);

    // ✅ Fetch posts from backend
    const fetchPosts = async () => {
        try {
            const { data } = await axios.get(`${url}/api/posts`);
            setPosts(data.posts);
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    // ✅ Filter posts (all or user specific)
    const filteredPosts =
        activeTab === "all"
            ? posts
            : posts.filter((p) => p.user?._id === user?._id);

    const handleLogout = () => {
        setUser(null);
        localStorage.clear();
        navigate("/");
    };

    return (
        <div className="feed-container">
            <FeedHeader
                user={user}
                showMenu={showMenu}
                handleLogout={handleLogout}
                LogOut={LogOut}
                setShowMenu={setShowMenu}
            />

            <CreatePost
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                Camera={Camera}
                Send={Send}
                setPosts={setPosts}
                user={user}
                refreshPosts={fetchPosts} // ✅ refresh after posting
            />

            <PostsSection
                filteredPosts={filteredPosts}
                Heart={Heart}
                MessageCircle={MessageCircle}
                Share2={Share2}
                user={user}
            />
        </div>
    );
};

export default FeedPage;
