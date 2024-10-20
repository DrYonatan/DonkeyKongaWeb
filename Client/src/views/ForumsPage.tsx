import "../style.css";
import SideBarComponent from "../components/SideBarComponent";
import PostCard from "../components/PostCard";
import { getAllPosts } from "../api/posts.ts";
import { Post } from "../types/post";
import { useState, useEffect } from "react";

function ForumPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    getAllPosts().then((data) => {
      console.log(data);
      setPosts(data);
    });
  }, []);
 
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <SideBarComponent />
      <div className="postListContainer">
        {posts?.map((post) => {
          return (
            <PostCard
            username={post.poster.username}
            title={post.title}
            content={post.content}
            imgSrc={post.image}
             />

          );
        })}
        
      </div>
    </div>
  );
}

export default ForumPage;
