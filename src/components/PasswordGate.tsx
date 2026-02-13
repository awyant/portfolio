"use client";

import { useState, useEffect } from "react";
import RunnerGame from "./RunnerGame";

const SITE_PASSWORD = process.env.NEXT_PUBLIC_SITE_PASSWORD ?? "";

export default function PasswordGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = sessionStorage.getItem("portfolio-auth");
    if (stored === "true") {
      setAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === SITE_PASSWORD) {
      sessionStorage.setItem("portfolio-auth", "true");
      setAuthenticated(true);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  if (loading) {
    return null;
  }

  if (authenticated) {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6">
      <div className="mx-auto w-full max-w-lg text-center">
        <h1 className="mb-2 text-3xl font-bold tracking-tight">
          Learn more about Abby Wyant
        </h1>
        <p className="mb-8 text-muted">
          This portfolio is password protected. Play a game while you think of
          it.
        </p>

        <RunnerGame />

        <form onSubmit={handleSubmit} className="mt-8 flex gap-3 justify-center">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className={`rounded-full border bg-transparent px-5 py-3 text-sm outline-none transition-colors focus:border-accent ${
              error ? "border-red-500" : "border-border"
            }`}
            autoFocus
          />
          <button
            type="submit"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            Enter
          </button>
        </form>
        {error && (
          <p className="mt-3 text-sm text-red-500">
            Incorrect password. Try again.
          </p>
        )}
      </div>
    </div>
  );
}
