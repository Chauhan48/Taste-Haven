import React from "react";
import { Link } from "react-scroll";

const HeroSection = () => {
  const menuItems = [
    {
      id: 1,
      title: "Home",
      link: "homepage",
    },
    {
      id: 2,
      title: "About Us",
      link: "aboutUs",
    },
    {
      id: 3,
      title: "Services",
      link: "services",
    },
    {
      id: 4,
      title: "Team",
      link: "team",
    },
    {
      id: 5,
      title: "Reservation",
      link: "reservation",
    },
  ];
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <h2 className="navbar-brand text-danger p-2">Taste Haven</h2>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            {menuItems.map((menu) => (
              <li className="nav-item active">
                <Link
                  className="nav-link"
                  to={menu.link}
                  spy={true}
                  smooth={true}
                  duration={200}
                >
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default HeroSection;
