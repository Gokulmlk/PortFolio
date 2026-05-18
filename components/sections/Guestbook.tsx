"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sampleMessages } from "@/lib/data";
import { Send } from "lucide-react";

type Message = { name: string; avatar: string; message: string; time: string };
const AVATARS = ["🙂","😎","🧑‍💻","👨‍🎨","🤓","😊","🧑","👩‍💻"];

export default function Guestbook() {
  const [messages, setMessages] = useState<Message[]>(sampleMessages);
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const submit = () => {
    if (!name.trim() || !msg.trim()) { setError("Please fill in both fields."); return; }
    const avatar = AVATARS[Math.floor(Math.random() * AVATARS.length)];
    setMessages(prev => [{ name: name.trim(), avatar, message: msg.trim(), time: "Just now" }, ...prev]);
    setName(""); setMsg(""); setError("");
  };

  return (
    <section id="contact" style={{ padding: "80px 0" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
      >
        <h2 style={{
          fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 900,
          letterSpacing: "-0.04em", marginBottom: 8, color: "var(--text)",
        }}>
          Guestbook
        </h2>
        <p style={{ fontSize: 14, color: "var(--muted)", marginBottom: 36 }}>
          Leave a message — say hi, share feedback, or just drop a note! 👋
        </p>

        {/* Form */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 12 }}
          viewport={{ once: true }}
          style={{
            background: "var(--card)", border: "1px solid var(--border)",
            borderRadius: 16, padding: "24px 24px 20px",
            marginBottom: 24,
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
            <input
              value={name} onChange={e => setName(e.target.value)}
              placeholder="Your name" maxLength={60}
            />
            <input
              value={""} style={{ display: "none" }} readOnly // honeypot
            />
          </div>
          <textarea
            value={msg} onChange={e => setMsg(e.target.value)}
            placeholder="Leave a message…" rows={3}
            style={{ resize: "none", marginBottom: 4 }}
          />
          {error && (
            <p style={{ fontSize: 11, color: "#f87171", marginBottom: 8 }}>{error}</p>
          )}
          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 12 }}>
            <button onClick={submit} style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              background: "var(--accent)", color: "#fff",
              border: "none", borderRadius: 10, padding: "10px 22px",
              fontSize: 13, fontWeight: 700, cursor: "pointer",
              transition: "opacity 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.opacity = "0.88"}
              onMouseLeave={e => e.currentTarget.style.opacity = "1"}
            >
              Post Message <Send size={13} />
            </button>
          </div>
        </motion.div>

        {/* Messages */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <AnimatePresence initial={false}>
            {messages.map((m, i) => (
              <motion.div
                key={`${m.name}-${i}`}
                layout
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  background: "var(--card)", border: "1px solid var(--border)",
                  borderRadius: 12, padding: "16px 20px",
                  display: "flex", gap: 14, alignItems: "flex-start",
                }}
              >
                <span style={{ fontSize: 26, flexShrink: 0 }}>{m.avatar}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5, gap: 8 }}>
                    <span style={{ fontSize: 13, fontWeight: 800, color: "var(--text)" }}>
                      {m.name}
                    </span>
                    <span style={{ fontSize: 11, color: "var(--faint)", flexShrink: 0 }}>{m.time}</span>
                  </div>
                  <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6 }}>{m.message}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
