import { useTheme } from "@mui/material";
import "../style.css";
import { Card } from "@mui/material";
import { PostComment } from "../types/comment";

function CommentComponent({commenter, content, date} : PostComment) {
  const theme = useTheme();
  return (
    <div>
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
                src={commenter.profilepic}
              ></img>
              <span>{commenter.username}</span>
            </div>
            <span style={{ alignSelf: "flex-end" }}>
              {JSON.stringify(date.toLocaleDateString()).replace(/\"/g, "")}
            </span>
          </div>

          <div style={{ width: "780px" }}>{content}</div>

        </Card>
       
    </div>
  );
}

export default CommentComponent;
