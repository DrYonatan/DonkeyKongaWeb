import HomePage from "../views/HomePage";
import DownloadPage from "../views/DownloadPage";
import ForumPage from "../views/ForumsPage";
import LoginPage from "../views/LoginPage";
import AboutPage from "../views/AboutPage";
import SignUpPage from "../views/SignUpPage";

interface Page {
  pageName: string;
  path: string;
  element: JSX.Element;
  shown: boolean;
}

export const pages: Page[] = [
  { pageName: "Home", path: "", element: <HomePage />, shown: true },
  {
    pageName: "Download",
    path: "/download",
    element: <DownloadPage />,
    shown: true,
  },
  { pageName: "Forums", path: "/forums", element: <ForumPage />, shown: true },
  { pageName: "Login", path: "/login", element: <LoginPage />, shown: true },
  { pageName: "About", path: "/about", element: <AboutPage />, shown: true },
  { pageName: "SignUp", path: "/signup", element: <SignUpPage />, shown: false },

];
