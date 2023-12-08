import {
  createBrowserRouter,
  useLocation,
  useOutlet,
  RouterProvider,
} from "react-router-dom";
// import MainLayout from "./layouts/MainLayout";
import Home from "./components/Home";
import About from "./components/About";
// import Skills from "./components/Skills";
// import Technology from "./components/expnology";
import Contact from "./components/Contact";
import { createRef } from "react";
// import AuthLayout from "./layouts/AuthLayout";

// import MyBookings from "../Components/Events/MyBookings";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

const routes = [
  { path: "/", name: "Home", element: <Home />, nodeRef: createRef() },
  { path: "/about", name: "About", element: <About />, nodeRef: createRef() },
  {
    path: "/edu",
    name: "Education",
    element: <Education />,
    nodeRef: createRef(),
  },
  {
    path: "/skills",
    name: "Skills",
    element: <Skills />,
    nodeRef: createRef(),
  },
  {
    path: "/projects",
    name: "Projects",
    element: <Projects />,
    nodeRef: createRef(),
  },
  {
    path: "/contact",
    name: "Contact",
    element: <Contact />,
    nodeRef: createRef(),
  },
];
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: routes.map((route) => ({
      index: route.path === "/",
      path: route.path === "/" ? undefined : route.path,
      element: route.element,
    })),
  },
]);

function Main() {
  const location = useLocation();
  const currentOutlet = useOutlet();
  const { nodeRef } =
    routes.find((route) => route.path === location.pathname) ?? {};
  return (
    <div className="relative">
      <SwitchTransition>
        <CSSTransition
          key={location.pathname}
          nodeRef={nodeRef}
          timeout={300}
          classNames="page"
          unmountOnExit
        >
          {() => (
            <>
              <Header />
              <main className="mt-28 ">
                <div ref={nodeRef} className="page">
                  {currentOutlet}
                </div>
              </main>
              <Footer />
            </>
          )}
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}

export default function ROUTES() {
  return (
    // <Routes>
    //   <Route path="/" element={<MainLayout />}>
    //     <Route exact path="/" element={<Home />} />
    //     <Route exact path="/about" element={<About />} />
    //     <Route exact path="/edu" element={<Skills />} />
    //     <Route exact path="/skills" element={<Technology />} />
    //     <Route exact path="/contact" element={<Contact />} />
    //   </Route>

    //   <Route path="*" element={<Navigate to="/" replace />} />
    // </Routes>
    <RouterProvider router={router} />
  );
}
