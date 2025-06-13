import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

function Navbar() {
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [token, setToken] = useState(true);

  const navbarLinks = [
    {
      label: "HOME",
      path: "/",
    },
    {
      label: "ALL DOCTORS",
      path: "/doctors",
    },
    {
      label: "ABOUT",
      path: "/about",
    },
    {
      label: "CONTACT",
      path: "/contact",
    },
  ];

  return (
    <div className="relative flex s justify-between items-center py-4 mb-5 text-sm border-b border-b-gray-400 ">
      <img
        src={assets.logo}
        onClick={() => navigate("/")}
        className="w-44"
        alt="logo_img"
      />
      <ul className="hidden md:flex justify-between items-center md:gap-2 lg:gap-5 font-medium">
        {navbarLinks.map((link) => (
          <NavLink to={link.path} key={link.label}>
            <li className="py-1">{link.label}</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-3 cursor-pointer group relative">
            <img
              src={assets.profile_pic}
              className="size-10 rounded-full object-cover"
              alt="profile-img"
            />
            <img
              src={assets.dropdown_icon}
              className="w-2.5"
              alt="drop-down-icon"
            />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate("my-profile")}
                  className="hover:text-black"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("my-appointments")}
                  className="hover:text-black"
                >
                  My Appointment
                </p>
                <p onClick={() => setToken(false)} className="hover:text-black">
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary text-white rounded-full px-8 py-3 font-base hidden md:block"
          >
            Create account
          </button>
        )}

        <button onClick={() => setOpenDrawer((prev) => !prev)}>
          <img
            src={assets.menu_icon}
            className="w-6 mr-3 md:hidden"
            alt="menu-icon"
          />
        </button>
      </div>

      {/* sidebar */}
      {openDrawer && (
        <div className="w-full h-screen md:hidden bg-white absolute top-0 right-0 py-6 transition">
          <div className="flex justify-between items-center">
            <img src={assets.logo} className="w-38" alt="logo_img" />
            <button
              onClick={() => setOpenDrawer((prev) => !prev)}
              className="w-8"
            >
              <img src={assets.cross_icon} alt="cross_btn" />
            </button>
          </div>
          <div className="flex flex-col items-center gap-5 text-lg font-medium mt-12">
            {navbarLinks.map((link) => (
              <NavLink to={link.path} key={link.label}>
                <button
                  className="px-4 py-2 rounded-sm"
                  onClick={() => setOpenDrawer((prev) => !prev)}
                >
                  {link.label}
                </button>
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
