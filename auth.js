import NextAuth from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "./db";

const config = {
  providers: [],
  adapter: DrizzleAdapter(db),
};

export const { handlers, signIn, signOut, auth } = NextAuth(config);
