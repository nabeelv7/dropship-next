"use client";

import { signIn } from "next-auth/react";

export default function ButtonSignIn() {
  return <button onClick={() => signIn("github")}>Continue with GitHub</button>;
}
