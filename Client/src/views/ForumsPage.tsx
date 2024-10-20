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
        <PostCard
          username="User"
          title="Funny Post"
          content="Hello everynyan how are you fine thank you"
          imgSrc="https://dynamic.brandcrowd.com/template/preview/design/568c6a46-4fc5-4d41-9409-e6c38e66d819?v=4&designTemplateVersion=6&size=design-preview-tall-1x"
        />
        <PostCard
          username="User2"
          title="Another Post"
          content="Ahhhahhh"
          imgSrc=""
        />
        <PostCard
          username="User3"
          title="Postiada"
          content="Pwoof"
          imgSrc="https://media.sproutsocial.com/uploads/2017/01/Instagram-Post-Ideas.png"
        />
      </div>
    </div>
  );
}

export default ForumPage;
