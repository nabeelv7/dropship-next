import { auth } from "@/auth";
import { redirect } from "next/navigation";
import ClientWrapperDashboard from "@/components/ClientWrapperDashboard";

export default async function Admin() {
  const session = await auth();
  // Redirect if not signed in
  if (!session?.user) {
    redirect("/api/auth/signin");
  }

  // if email is not nabeelsadiq.dev@gmail.com, then show access denied
  if (session.user.email !== "nabeelsadiq.dev@gmail.com") {
    return (
      <div className="flex flex-col justify-center items-center py-50 px-3">
        <article className="flex flex-col items-center justify-center gap-4 max-w-md mx-auto border-6 border-error px-6 py-12 text-center rounded-md bg-error/35">
          <h1 className="text-3xl font-extrabold text-error uppercase">
            🤪 Access Denied
          </h1>
          <p>You donot have permission to access this page</p>
        </article>
      </div>
    );
  }

  return <ClientWrapperDashboard />;
}
