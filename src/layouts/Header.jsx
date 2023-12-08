import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const links = [
  {
    route: "/",
    name: "Home",
    icon: "uil-estate",
  },
  {
    route: "/about",
    name: "About",
    icon: "uil-user",
  },
  {
    route: "/edu",
    name: "Education",
    icon: "uil-file-alt",
  },
  {
    route: "/skills",
    name: "Skills",
    icon: "uil-briefcase-alt",
  },
  {
    route: "/projects",
    name: "Projects",
    icon: "uil-briefcase-alt",
  },
  {
    route: "/contact",
    name: "Contact",
    icon: "uil-message",
  },
];

const Header = () => {
  const selectedTheme = localStorage.getItem("selected-theme");
  const selectedIcon = localStorage.getItem("selected-icon");
  const location = useLocation();
  const currentPath = location.pathname;
  console.log(currentPath);

  const themeButton = useRef(null);
  const darkTheme = "dark";
  const iconTheme = "uil-sun";

  const getCurrentTheme = () =>
    document.body.parentElement.classList.contains(darkTheme)
      ? "dark"
      : "light";
  const getCurrentIcon = () =>
    themeButton.current.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

  useEffect(() => {
    if (selectedTheme) {
      document.body.parentElement.classList[
        selectedTheme === "dark" ? "add" : "remove"
      ](darkTheme);
      themeButton.current.classList[
        selectedIcon === "uil-moon" ? "add" : "remove"
      ](iconTheme);
    }
  }, []);

  const handleThemeClick = () => {
    document.body.parentElement.classList.toggle(darkTheme);
    themeButton.current.classList.toggle(iconTheme);
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
  };
  return (
    <header
      className="w-full fixed top-0 bg-white dark:bg-black dark:text-white"
      id="header"
    >
      <nav className="flex justify-between items-center py-5 px-8 max-w-screen-xl mx-auto">
        <ul className="flex justify-center space-x-6 mr-4 w-full">
          {links.map((link, i) => (
            <li
              className={`hover:text-first-color ${
                link.route == currentPath && "text-purple-600 "
              }`}
              key={i}
            >
              <Link to={link.route} className="">
                <i className={`mr-1.5  uil ${link.icon}`}></i>
                {link.name}
              </Link>
            </li>
          ))}

          <li className="hover:text-first-color cursor-pointer ">
            <i
              ref={themeButton}
              className="uil uil-moon change-theme"
              onClick={handleThemeClick}
            ></i>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
