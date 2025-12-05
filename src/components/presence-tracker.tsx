"use client";

import { useEffect, useRef } from "react";

function generateSessionId(): string {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;
}

export function PresenceTracker() {
  const sessionIdRef = useRef<string | null>(null);

  useEffect(() => {
    // Get or create session ID
    let sessionId = sessionStorage.getItem("presence_session_id");
    if (!sessionId) {
      sessionId = generateSessionId();
      sessionStorage.setItem("presence_session_id", sessionId);
    }
    sessionIdRef.current = sessionId;

    // Send heartbeat
    const sendHeartbeat = async () => {
      try {
        const res = await fetch("/api/presence", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sessionId: sessionIdRef.current }),
        });
        console.log("👁️ Presence heartbeat:", res.ok ? "✅" : "❌", sessionIdRef.current);
      } catch (err) {
        console.log("👁️ Presence heartbeat failed:", err);
      }
    };

    // Initial heartbeat
    sendHeartbeat();

    // Heartbeat every 30 seconds
    const interval = setInterval(sendHeartbeat, 30000);

    // Send heartbeat on visibility change (when user comes back to tab)
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        sendHeartbeat();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearInterval(interval);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return null;
}
