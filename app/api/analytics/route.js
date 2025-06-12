import { db } from "@/db";
import { visits } from "@/db/schema";
import { desc } from "drizzle-orm";

export const dynamic = "force-dynamic"; // disable caching if using app router

export async function GET() {
  const data = await db.select().from(visits).orderBy(desc(visits.timestamp));
  return Response.json(data);
}
