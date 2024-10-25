import { useState } from "react";
import "../style.css";
import { Card, useTheme } from "@mui/material";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import TextField from "@mui/material/TextField";

import SideBarComponent from "../components/SideBarComponent";
import { uploadPost } from "../api/posts";
import { useUserContext } from "../contexts/userContext/userContext";

function UploadPostPage() {
  const theme = useTheme();
  const { user } = useUserContext();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const onChangeTitle = (title: string) => {
    setTitle(title);
  };
  const onChangeContent = (content: string) => {
    setContent(content);
  };
  const onChangeImage = (image: string) => {
    setImage(image);
  };

  const upload = () => {
    if (user) {
      const post = {
        date: new Date(Date.now()),
        title: title,
        content: content,
        image: image,
        poster: user,
      };
      uploadPost(post);
    }
    else {
      alert("Log in to upload!")
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "50px" }}>
      <SideBarComponent />

      <Card
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.secondary.contrastText,
          width: "1000px",
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          border: "solid",
          borderWidth: "1px",
        }}
      >
        <Button
          onClick={upload}
          style={{
            width: "200px",
            alignSelf: "center",
            backgroundColor: theme.palette.secondary.main,
          }}
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
        />
        <h2>Title</h2>
        <TextField
          onChange={(e) => {
            onChangeTitle(e.target.value);
          }}
          required
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: theme.palette.secondary.contrastText, // Replace with your desired color
              },
              "&:hover fieldset": {
                borderColor: "gray", // Replace with your hover color
              },
              "&.Mui-focused fieldset": {
                borderColor: "yourFocusedColor", // Replace with your focused color
              },
            },
          }}
          id="outlined-required"
          label="Required"
          InputProps={{
            style: { color: theme.palette.secondary.contrastText },
          }}
        />
        <h2>Content</h2>
        <TextField
          onChange={(e) => {
            onChangeContent(e.target.value);
          }}
          required
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: theme.palette.secondary.contrastText, // Replace with your desired color
              },
              "&:hover fieldset": {
                borderColor: "gray", // Replace with your hover color
              },
              "&.Mui-focused fieldset": {
                borderColor: "yourFocusedColor", // Replace with your focused color
              },
              "& .MuiFormLabel-root.Mui-required": {
                color: theme.palette.secondary.contrastText,
              },
            },
          }}
          id="outlined-required"
          label="Required"
          InputProps={{
            style: {
              color: theme.palette.secondary.contrastText,
              height: "200px",
            },
          }}
        />
        <h2>Picture</h2>
        <TextField
          onChange={(e) => {
            onChangeImage(e.target.value);
          }}
          required
          id="outlined-required"
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: theme.palette.secondary.contrastText, // Replace with your desired color
              },
              "&:hover fieldset": {
                borderColor: "gray", // Replace with your hover color
              },
              "&.Mui-focused fieldset": {
                borderColor: "gray", // Replace with your focused color
              },
            },
          }}
        />
      </Card>
    </div>
  );
}

export default UploadPostPage;
