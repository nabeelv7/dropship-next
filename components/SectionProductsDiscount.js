"use client";
import { useEffect, useState } from "react";

export default function SectionProductsDiscount() {
  const [timeLeft, setTimeLeft] = useState(null); // Start as null to prevent hydration mismatch

  useEffect(() => {
    const updateTime = () => setTimeLeft(getTimeUntilNextTarget());

    updateTime(); // Set initial value on mount
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  function getTimeUntilNextTarget() {
    const now = new Date();
    const currentDay = now.getDate();
    let nextTargetDay;

    if (currentDay < 10) {
      nextTargetDay = 10;
    } else if (currentDay < 20) {
      nextTargetDay = 20;
    } else if (currentDay < 30) {
      nextTargetDay = 30;
    } else {
      // Move to the 10th of next month
      nextTargetDay = 10;
      now.setMonth(now.getMonth() + 1);
    }

    const target = new Date(
      now.getFullYear(),
      now.getMonth(),
      nextTargetDay,
      0,
      0,
      0
    );

    const diff = target.getTime() - Date.now();

    const seconds = Math.floor((diff / 1000) % 60);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    return { days, hours, minutes, seconds };
  }

  if (!timeLeft) return null; // Skip initial render on server

  return (
    <div className="discount">
      <div className="bg-yellow-500/50 threed md:p-5 p-3 space-y-4 flex flex-col justify-center items-center text-center">
        <h1 className="uppercase font-extrabold text-xl">
          Save 43% - Summer Blowout Sale
        </h1>
        <p className="text-balance">
          Catch the heat with sizzling <span className="font-bold">deals</span>!
          Shop your favorites before they're gone.
        </p>

        <div className="flex gap-2 font-bold">
          {["days", "hours", "minutes", "seconds"].map((unit) => (
            <div key={unit} className="rounded-none px-3 py-1 bg-yellow-500">
              <div className="text-2xl">
                {String(timeLeft[unit]).padStart(2, "0")}
              </div>
              <div className="text-sm lowercase">{unit}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
