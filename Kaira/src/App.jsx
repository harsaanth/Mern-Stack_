import Section1 from "./Components/Section1.jsx";
import Section2 from "./Components/Section2.jsx";
import Section5 from "./Components/Section5.jsx";
import Section3 from "./Components/Section3.jsx";
import Section7 from "./Components/Section7.jsx";

import Searchicon from "./Components/Searchicon.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Components/Main.jsx";
import Home from "./Components/Home.jsx";
import Footer from "./Components/Footer.jsx";
// import Blog from "./Components/Blog.jsx";
// import Section4 from "./Components/Blog.jsx"
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Main2 from "./Components/Main2.jsx";

const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/shop",
          element: <Section2 />,
        },
        {
          path: "/blog",
          element: <Section7 />,
        },
        {
          path: "/contact",
          element: <Footer />,  
        },
        {
          path: "/home",
          element: <Section1/>,
        },
        {
          path: "/pages",
          element: <Section3 />,
        },
        // {
        //   path: "/search",
        //   element: ,
        // },
      ],
    },
  ],
);
  
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
};
export default App;
