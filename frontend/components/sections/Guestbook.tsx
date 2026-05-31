"use client";
import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send } from "lucide-react";
import { apiUrl } from "@/lib/api";

type Message = {
  id?: string;
  name: string;
  avatar: string;
  message: string;
  time: string;
};

export default function Guestbook() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const loadMessages = useCallback(async () => {
    try {
      const res = await fetch(apiUrl("/api/guestbook"));
      if (!res.ok) throw new Error("fetch failed");
      const data: Message[] = await res.json();
      setMessages(data);
    } catch {
      setError("Could not load messages. Is the API running?");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadMessages();
  }, [loadMessages]);

  const submit = async () => {
    if (!name.trim() || !msg.trim()) {
      setError("Please fill in both fields.");
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      const res = await fetch(apiUrl("/api/guestbook"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          message: msg.trim(),
          website: "",
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Failed to post");
      }

      const created: Message = await res.json();
      setMessages((prev) => [created, ...prev]);
      setName("");
      setMsg("");
    } catch (e) {
      setError(
        e instanceof Error ? e.message : "Failed to post message."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" style={{ padding: "80px 0" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
      >
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            marginBottom: 8,
            color: "var(--text)",
          }}
        >
          Guestbook
        </h2>
        <p style={{ fontSize: 14, color: "var(--muted)", marginBottom: 36 }}>
          Leave a message — say hi, share feedback, or just drop a note! 👋
        </p>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 12 }}
          viewport={{ once: true }}
          style={{
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: 16,
            padding: "24px 24px 20px",
            marginBottom: 24,
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12,
              marginBottom: 12,
            }}
          >
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              maxLength={60}
              disabled={submitting}
            />
            <input
              value=""
              style={{ display: "none" }}
              readOnly
              tabIndex={-1}
              autoComplete="off"
              name="website"
            />
          </div>
          <textarea
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            placeholder="Leave a message…"
            rows={3}
            style={{ resize: "none", marginBottom: 4 }}
            maxLength={500}
            disabled={submitting}
          />
          {error && (
            <p style={{ fontSize: 11, color: "#f87171", marginBottom: 8 }}>
              {error}
            </p>
          )}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: 12,
            }}
          >
            <button
              onClick={submit}
              disabled={submitting}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background: "var(--accent)",
                color: "#fff",
                border: "none",
                borderRadius: 10,
                padding: "10px 22px",
                fontSize: 13,
                fontWeight: 700,
                cursor: submitting ? "not-allowed" : "pointer",
                opacity: submitting ? 0.7 : 1,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => {
                if (!submitting) e.currentTarget.style.opacity = "0.88";
              }}
              onMouseLeave={(e) => {
                if (!submitting) e.currentTarget.style.opacity = "1";
              }}
            >
              Post Message <Send size={13} />
            </button>
          </div>
        </motion.div>

        {loading ? (
          <p style={{ fontSize: 13, color: "var(--muted)" }}>Loading messages…</p>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <AnimatePresence initial={false}>
              {messages.map((m) => (
                <motion.div
                  key={m.id ?? `${m.name}-${m.time}`}
                  layout
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: 12,
                    padding: "16px 20px",
                    display: "flex",
                    gap: 14,
                    alignItems: "flex-start",
                  }}
                >
                  <span style={{ fontSize: 26, flexShrink: 0 }}>{m.avatar}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: 5,
                        gap: 8,
                      }}
                    >
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 800,
                          color: "var(--text)",
                        }}
                      >
                        {m.name}
                      </span>
                      <span
                        style={{
                          fontSize: 11,
                          color: "var(--faint)",
                          flexShrink: 0,
                        }}
                      >
                        {m.time}
                      </span>
                    </div>
                    <p
                      style={{
                        fontSize: 13,
                        color: "var(--muted)",
                        lineHeight: 1.6,
                      }}
                    >
                      {m.message}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {!loading && messages.length === 0 && !error && (
              <p style={{ fontSize: 13, color: "var(--muted)" }}>
                No messages yet — be the first!
              </p>
            )}
          </div>
        )}
      </motion.div>
    </section>
  );
}
