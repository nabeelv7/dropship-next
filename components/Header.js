import { auth } from "@/auth";
import Navbar from "@/components/Navbar";
import AuthNavbar from "@/components/AuthNavbar";

export default async function Header() {
  const session = await auth();

  return (
    <header className="shadow-sm">
      {session?.user ? (
        <AuthNavbar
          pfp={session?.user?.image}
          email={session?.user?.email}
          username={session?.user?.name}
        />
      ) : (
        <Navbar />
      )}
    </header>
  );
}
