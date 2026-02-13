"use client";

import { useState, useEffect } from "react";

const locations = [
  { city: "Brooklyn", region: "NY" },
  { city: "Maine", region: "ME" },
];

export default function LocationToggle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % locations.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-8 flex items-center justify-center gap-3 text-sm text-muted">
      {locations.map((loc, i) => (
        <span key={loc.city} className="flex items-center gap-1.5">
          {i > 0 && <span className="mx-1 text-border">/</span>}
          <span
            className={`inline-block h-2 w-2 rounded-full transition-colors duration-700 ${
              i === index ? "bg-accent" : "bg-border"
            }`}
          />
          <span
            className={`transition-colors duration-700 ${
              i === index ? "text-foreground" : "text-muted"
            }`}
          >
            {loc.city}, {loc.region}
          </span>
        </span>
      ))}
    </div>
  );
}
