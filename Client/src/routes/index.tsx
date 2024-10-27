import HomePage from "../views/HomePage";
import DownloadPage from "../views/DownloadPage";
import ForumPage from "../views/ForumsPage";
import LoginPage from "../views/LoginPage";
import AboutPage from "../views/AboutPage";
import SignUpPage from "../views/SignUpPage";
import ProfilePage from "../views/ProfilePage";
import UploadPostPage from "../views/UploadPostPage";
import PostCommentsPage from "../views/PostCommentsPage";

interface Page {
  pageName: string;
  path: string;
  element: JSX.Element;
  shown: boolean;
}

export const pages: Page[] = [
  {
    pageName: "Home",
    path: "",
    element: <HomePage />,
    shown: true,
  },
  {
    pageName: "Download",
    path: "/download",
    element: <DownloadPage />,
    shown: true,
  },
  {
    pageName: "Forums",
    path: "/forums",
    element: <ForumPage />,
    shown: true,
  },
  {
    pageName: "Login",
    path: "/login",
    element: <LoginPage />,
    shown: true,
  },
  {
    pageName: "About",
    path: "/about",
    element: <AboutPage />,
    shown: true,
  },
  {
    pageName: "SignUp",
    path: "/signup",
    element: <SignUpPage />,
    shown: false,
  },
  {
    pageName: "Profile",
    path: "/profile",
    element: <ProfilePage />,
    shown: false,
  },
  {
    pageName: "UploadPost",
    path: "/forums/upload",
    element: <UploadPostPage />,
    shown: false,
  },
  {
    pageName: "PostComments",
    path: "/forums/postcomments/:postId",
    element: <PostCommentsPage />,
    shown: false,
  },
];
