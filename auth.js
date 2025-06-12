import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "./db";

const config = {
  providers: [GitHub],
  adapter: DrizzleAdapter(db),
};

export const { handlers, signIn, signOut, auth } = NextAuth(config);
