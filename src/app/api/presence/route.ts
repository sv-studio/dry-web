import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";

// Initialize Redis with KV_ prefixed env vars from Vercel
const redis = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
});

const PRESENCE_TTL_SECONDS = 60;

// POST: Register/update presence (heartbeat)
export async function POST(request: NextRequest) {
  try {
    const { sessionId } = await request.json();

    if (!sessionId) {
      return NextResponse.json({ error: "sessionId required" }, { status: 400 });
    }

    // Set session with TTL (auto-expires)
    await redis.set(`presence:${sessionId}`, "1", { ex: PRESENCE_TTL_SECONDS });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Presence POST error:", error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}

// GET: Return count of online users
export async function GET() {
  try {
    const keys = await redis.keys("presence:*");

    return NextResponse.json({
      online: keys.length,
    });
  } catch (error) {
    console.error("Presence GET error:", error);
    return NextResponse.json({ online: 0 });
  }
}
