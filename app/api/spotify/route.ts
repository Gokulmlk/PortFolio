import { NextResponse } from "next/server";
import { getNowPlaying } from "@/lib/services/spotify";

export const revalidate = 30; // cache for 30 seconds

export async function GET() {
  try {
    const song = await getNowPlaying();

    if (!song) {
      return NextResponse.json(
        { isPlaying: false, title: null },
        { status: 200 }
      );
    }

    return NextResponse.json(song);
  } catch (error) {
    console.error("[Spotify API]", error);
    return NextResponse.json(
      { error: "Failed to fetch" },
      { status: 500 }
    );
  }
}