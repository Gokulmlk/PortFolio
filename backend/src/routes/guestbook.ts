import { Router } from "express";
import { prisma } from "../lib/prisma.js";

const router = Router();

const AVATARS = ["🙂", "😎", "🧑‍💻", "👨‍🎨", "🤓", "😊", "🧑", "👩‍💻"];

function formatTime(date: Date): string {
  const diffMs = Date.now() - date.getTime();
  const mins = Math.floor(diffMs / 60000);
  if (mins < 1) return "Just now";
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d ago`;
  const weeks = Math.floor(days / 7);
  return `${weeks}w ago`;
}

router.get("/", async (_req, res) => {
  try {
    const rows = await prisma.guestbookMessage.findMany({
      orderBy: { createdAt: "desc" },
      take: 50,
    });

    res.json(
      rows.map((row: any) => ({
        id: row.id,
        name: row.name,
        avatar: row.avatar,
        message: row.message,
        time: formatTime(row.createdAt),
        createdAt: row.createdAt,
      }))
    );
  } catch (err) {
    console.error("Guestbook GET error:", err);
    res.status(500).json({ error: "Failed to fetch messages" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, message, website } = req.body as {
      name?: string;
      message?: string;
      website?: string;
    };

    if (website) {
      res.status(400).json({ error: "Invalid submission" });
      return;
    }

    const trimmedName = name?.trim() ?? "";
    const trimmedMessage = message?.trim() ?? "";

    if (!trimmedName || !trimmedMessage) {
      res.status(400).json({ error: "Name and message are required" });
      return;
    }

    if (trimmedName.length > 60 || trimmedMessage.length > 500) {
      res.status(400).json({ error: "Message too long" });
      return;
    }

    const avatar =
      AVATARS[Math.floor(Math.random() * AVATARS.length)] ?? "🙂";

    const row = await prisma.guestbookMessage.create({
      data: {
        name: trimmedName,
        avatar,
        message: trimmedMessage,
      },
    });

    res.status(201).json({
      id: row.id,
      name: row.name,
      avatar: row.avatar,
      message: row.message,
      time: "Just now",
      createdAt: row.createdAt,
    });
  } catch (err) {
    console.error("Guestbook POST error:", err);
    res.status(500).json({ error: "Failed to post message" });
  }
});

export default router;
