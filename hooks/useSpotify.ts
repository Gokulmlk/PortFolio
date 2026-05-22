"use client";

import { useEffect, useState } from "react";

interface Song {
  isPlaying: boolean;
  title: string;
  artist: string;
  image: string | null;
  url: string;
}

export function useSpotify() {
  const [song, setSong] = useState<Song | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchSong() {
      try {
        const res = await fetch("/api/spotify/playback");

        const data = await res.json();

        if (!data?.title) {
          setSong(null);
          return;
        }

        setSong({
          isPlaying: data.isPlaying,
          title: data.title,
          artist: data.artist,
          image: data.image,
          url: data.url,
        });
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchSong();

    const interval = setInterval(fetchSong, 30000);

    return () => clearInterval(interval);
  }, []);

  return { song, loading, error };
}