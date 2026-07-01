"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";

type Status = "idle" | "loading" | "success" | "error";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit() {
    const value = email.trim().toLowerCase();

    if (!EMAIL_RE.test(value)) {
      setStatus("error");
      setMessage("Geçerli bir e-posta gir.");
      return;
    }

    setStatus("loading");
    setMessage("");

    const { error } = await supabase.from("waitlist").insert({ email: value });

    if (error) {
      if (error.code === "23505") {
        setStatus("success");
        setMessage(
          "Listedesin! 🌿 Sana ayrıca bir mail göndermiyoruz — Pally yayına çıktığı an bu listedeki herkese haber vereceğiz. Yapman gereken bir şey yok.",
        );
        return;
      }
      setStatus("error");
      setMessage("Bir şeyler ters gitti, tekrar dener misin?");
      return;
    }

    setStatus("success");
    setMessage(
      "Listedesin! 🌿 Sana ayrıca bir mail göndermiyoruz — Pally yayına çıktığı an bu listedeki herkese haber vereceğiz. Yapman gereken bir şey yok.",
    );
    setEmail("");
  }

  if (status === "success") {
    return (
      <div className="wl-notice wl-notice--info" role="status">
        {message}
      </div>
    );
  }

  return (
    <div className="wl-form">
      <div className="wl-row">
        <input
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="e-posta adresin"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          className="wl-input"
          disabled={status === "loading"}
        />
        <button
          onClick={handleSubmit}
          className="wl-btn"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Ekleniyor…" : "Beni listeye ekle"}
        </button>
      </div>
      {status === "error" && (
        <p className="wl-notice wl-notice--error" role="alert">
          {message}
        </p>
      )}
    </div>
  );
}
