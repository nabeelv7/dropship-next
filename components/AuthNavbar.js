import Link from "next/link";
import { signOut } from "next-auth/react";

export default function AuthNavbar({ pfp, email, username }) {
  return (
    <div className="navbar bg-base-100 max-w-screen-lg mx-auto">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          daisUI
        </Link>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src={pfp} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="flex flex-col p-3 max-w-sm dropdown-content bg-base-100 rounded-md z-1 mt-3 shadow"
          >
            <li>
              <p className="font-extrabold">{username}</p>
            </li>
            <li>
              <p>{email}</p>
            </li>
            <li className="space-y-1">
              <div className="divider"></div>
              <Link href="/admin" className="btn btn-info btn-wide">
                Admin
              </Link>
              <button onClick={signOut} className="btn btn-error btn-wide">
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
