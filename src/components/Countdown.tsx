import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const EVENT_DATE = new Date("2026-06-06T18:00:00-03:00");

function getTimeLeft() {
  const diff = EVENT_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export function Countdown() {
  const [time, setTime] = useState(getTimeLeft);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const items = [
    { label: "dias", value: time.days },
    { label: "horas", value: time.hours },
    { label: "min", value: time.minutes },
    { label: "seg", value: time.seconds },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: mounted ? 1 : 0, y: 0 }}
      transition={{ duration: 0.7, delay: 0.6 }}
      className="inline-flex items-center gap-2 rounded-2xl border border-background/25 bg-background/10 p-2 backdrop-blur-md sm:gap-3 sm:p-3"
      aria-label="Contagem regressiva para o evento"
    >
      {items.map((item, i) => (
        <div key={item.label} className="flex items-center">
          <div className="flex min-w-[58px] flex-col items-center px-2 sm:min-w-[72px] sm:px-3">
            <span className="font-display text-2xl leading-none text-background tabular-nums sm:text-4xl">
              {String(item.value).padStart(2, "0")}
            </span>
            <span className="mt-1.5 text-[10px] uppercase tracking-[0.18em] text-background/70 sm:text-xs">
              {item.label}
            </span>
          </div>
          {i < items.length - 1 && (
            <span className="text-background/30 sm:text-lg" aria-hidden>
              ·
            </span>
          )}
        </div>
      ))}
    </motion.div>
  );
}
