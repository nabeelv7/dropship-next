"use client";
import ButtonFacebook from "./ButtonFacebook";

export default function Navbar() {
  return (
    <nav
      className="navbar bg-base-100 max-w-screen-lg mx-auto"
      aria-label="Main navigation"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            aria-haspopup="true"
            aria-expanded="false"
            aria-label="Main menu"
            id="main-menu-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            className="menu menu-md dropdown-content bg-base-100 rounded-box z-10 mt-3 w-60 p-2 shadow"
            role="menu"
            aria-labelledby="main-menu-button"
            id="main-menu"
          >
            <li>
              <a href="#products" role="menuitem">
                Products
              </a>
            </li>
            <li>
              <a href="#testimonials" role="menuitem">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#faq" role="menuitem">
                FAQ
              </a>
            </li>
            <div className="divider" role="separator"></div>
            <li>
              <ButtonFacebook />
            </li>
          </ul>
        </div>
        <a
          href="/"
          className="font-bold text-xl"
          aria-label={`Go to homepage for our store`}
        >
          ThandaBox
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
        </ul>
      </div>

      <div className="md:flex hidden navbar-end">
        <ButtonFacebook />
      </div>
    </nav>
  );
}
