import "../style.css";
import SideBarComponent from "../components/SideBarComponent";
import PostCard from "../components/PostCard";
import { useParams } from "react-router-dom";
import { findPostById } from "../api/posts";
import { useEffect, useState } from "react";
import { Card, Skeleton } from "@mui/material";

function PostCommentsPage() {
  const [post, setPost] = useState({
    title: "",
    content: "",
    image: "",
    date: new Date(),
    poster: { username: "", password: "", profilepic: "" },
  });
  const { postId } = useParams();

  useEffect(() => {
    const id: number = postId ? Number(postId) : 1;
    findPostById(id).then((data) => {
      console.log(id);
      if (data) setPost(data);
      else alert("Post doesn't exist!");
    });
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <SideBarComponent />
      <div className="postListContainer">
        {post ? <PostCard
          poster={post.poster}
          title={post.title}
          content={post.content}
          imgSrc={post.image}
          date={post.date}
        /> :  <Card className="postCard">
        {" "}
        <Skeleton variant="rectangular" width={760} height={50} />
        <Skeleton variant="rectangular" width={760} height={200} />
      </Card>}
      </div>
    </div>
  );
}

export default PostCommentsPage;
