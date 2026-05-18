"use client";
import { useEffect, useState } from "react";

interface Song {
  isPlaying: boolean;
  title:     string;
  artist:    string;
  image:     string | null;
  url:       string;
}

export function useSpotify() {
  const [song,    setSong]    = useState<Song | null>(null);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(false);

  useEffect(() => {
    async function fetchSong() {
      try {
        const res  = await fetch("/api/spotify");
        const data = await res.json();
        setSong(data ?? null);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchSong();
    const interval = setInterval(fetchSong, 30_000); // refresh every 30s
    return () => clearInterval(interval);
  }, []);

  return { song, loading, error };
}