import { useTheme } from "@mui/material";
import "../style.css";
import { Skeleton, Card } from "@mui/material";

type PostProps = {
  username: string;
  title: string;
  content: string;
  imgSrc: string;
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
          <img src=""></img>
          <span>{postProps.username}</span>
          <h1>{postProps.title}</h1>
          <span>{postProps.content}</span>

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
