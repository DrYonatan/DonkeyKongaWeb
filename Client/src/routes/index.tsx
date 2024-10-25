import HomePage from "../views/HomePage";
import DownloadPage from "../views/DownloadPage";
import ForumPage from "../views/ForumsPage";
import LoginPage from "../views/LoginPage";
import AboutPage from "../views/AboutPage";
import SignUpPage from "../views/SignUpPage";
import ProfilePage from "../views/ProfilePage";
import UploadPostPage from "../views/UploadPostPage";

interface Page {
  pageName: string;
  path: string;
  element: JSX.Element;
  shown: boolean;
  hasSideBar: boolean;
}

export const pages: Page[] = [
  {
    pageName: "Home",
    path: "",
    element: <HomePage />,
    shown: true,
    hasSideBar: false,
  },
  {
    pageName: "Download",
    path: "/download",
    element: <DownloadPage />,
    shown: true,
    hasSideBar: false,
  },
  {
    pageName: "Forums",
    path: "/forums",
    element: <ForumPage />,
    shown: true,
    hasSideBar: true,
  },
  {
    pageName: "Login",
    path: "/login",
    element: <LoginPage />,
    shown: true,
    hasSideBar: false,
  },
  {
    pageName: "About",
    path: "/about",
    element: <AboutPage />,
    shown: true,
    hasSideBar: false,
  },
  {
    pageName: "SignUp",
    path: "/signup",
    element: <SignUpPage />,
    shown: false,
    hasSideBar: false,
  },
  {
    pageName: "Profile",
    path: "/profile",
    element: <ProfilePage />,
    shown: false,
    hasSideBar: false,
  },
  {
    pageName: "UploadPost",
    path: "/forums/upload",
    element: <UploadPostPage />,
    shown: false,
    hasSideBar: true,
  },
];
