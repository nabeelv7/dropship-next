import { db } from "@/db";
import { visits } from "@/db/schema";

export async function POST(req) {
  try {
    const data = await req.json();

    const {
      ip,
      city,
      country,
      continent,
      latitude,
      longitude,
      referrer,
      browser,
      os,
      timestamp,
    } = data;

    if (!ip || !timestamp) {
      return new Response("Missing required fields", { status: 400 });
    }

    await db.insert(visits).values({
      ip,
      city,
      country,
      continent,
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
      referrer,
      browser,
      os,
      timestamp,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Analytics track error:", error);
    return new Response("Internal server error", { status: 500 });
  }
}
