import { useTheme } from "@mui/material";
import "../style.css";
import { Skeleton, Card } from "@mui/material";
import { User } from "../types/user";

type PostProps = {
  poster: User;
  title: string;
  content: string;
  imgSrc: string;
  date: Date;
};

function PostCard(postProps: PostProps) {
  const theme = useTheme();
  return (
    <div>
      {postProps ? (
        <Card
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.secondary.contrastText,
          }}
          className="postCard"
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginRight: "20px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img
                style={{ height: "30px", width: "30px", borderRadius: "100%" }}
                src={postProps.poster.profilepic}
              ></img>
              <span>{postProps.poster.username}</span>
            </div>
            <span style={{ alignSelf: "flex-end" }}>
              {JSON.stringify(postProps.date.toLocaleDateString()).replace(/\"/g, "")}
            </span>
          </div>

          <h1>{postProps.title}</h1>
          <div style={{ width: "780px" }}>{postProps.content}</div>

          <img
            style={{
              maxHeight: "800px",
              width: "760px",
              alignSelf: "center",
              borderRadius: "20px",
            }}
            src={postProps.imgSrc}
          ></img>
        </Card>
      ) : (
        <Card className="postCard">
          {" "}
          <Skeleton variant="rectangular" width={760} height={50} />
          <Skeleton variant="rectangular" width={760} height={200} />
        </Card>
      )}
    </div>
  );
}

export default PostCard;
