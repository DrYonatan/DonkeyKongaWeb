import "../style.css";
import SideBarComponent from "../components/SideBarComponent";
import PostCard from "../components/PostCard";
import { useParams } from "react-router-dom";
import { findPostById } from "../api/posts";
import { useEffect, useState } from "react";
import { Card, Skeleton, TextField, Button } from "@mui/material";
import { Post } from "../types/post";
import { PostComment } from "../types/comment";
import CommentComponent from "../components/CommentComponent";
import { useTheme } from "@mui/material";
import { uploadComment } from "../api/comment";
import { useUserContext } from "../contexts/userContext/userContext";

function PostCommentsPage() {
  const [post, setPost] = useState<Post>({
    title: "",
    content: "",
    date: new Date(),
    image: "",
    poster: { username: "", password: "", profilepic: "" },
    comments: [],
  });

  const { user } = useUserContext();

  const [comments, setComments] = useState<PostComment[]>();

  const { postId } = useParams();

  const [comment, setComment] = useState("");

  const theme = useTheme();

  useEffect(() => {
    const id: number = postId ? Number(postId) : 1;
    findPostById(id).then((data) => {
      console.log(id);
      if (data) {
        setPost(data);
        setComments(data.comments);
      } else alert("Post doesn't exist!");
    });
  }, [post]);

  const onChangeComment = (comment: string) => {
    setComment(comment);
  };

  const upload = () => {
    if (user) {
      uploadComment({
        date: new Date(Date.now()),
        commenter: user!,
        content: comment,
        post: post,
      });
      setComment("");
    } else alert("Log in to comment!");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <SideBarComponent />
      <div className="postListContainer">
        {post.title != "" ? (
          <PostCard
            poster={post.poster}
            title={post.title}
            content={post.content}
            imgSrc={post.image}
            date={new Date(post.date)}
          />
        ) : (
          <Card className="postCard">
            {" "}
            <Skeleton variant="rectangular" width={760} height={50} />
            <Skeleton variant="rectangular" width={760} height={200} />
          </Card>
        )}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <h1 style={{ color: theme.palette.secondary.contrastText }}>
            Comments
          </h1>
          <TextField
            onChange={(e) => {
              onChangeComment(e.target.value);
            }}
            InputProps={{
              style: {
                color: theme.palette.secondary.contrastText,
                width: "800px",
              },
            }}
            label="Write your comment"
            value={comment}
          />
          <Button
            variant="contained"
            style={{
              color: theme.palette.secondary.contrastText,
              alignSelf: "flex-end",
            }}
            onClick={upload}
          >
            Comment
          </Button>
        </div>
        <div>
          {comments?.map((comment) => {
            return (
              <CommentComponent
                commenter={comment.commenter}
                content={comment.content}
                date={new Date(comment.date)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PostCommentsPage;
