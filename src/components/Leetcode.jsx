import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const USERNAME = "amanasthana1212";

const LeetCode = () => {
    const scrollRef = useRef(null);

  const [heatmap, setHeatmap] = useState({});
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchLeetCode = async () => {
      try {
        const res = await axios.get(
          `https://gitleet.tech/api/leetcode?username=${USERNAME}`
        );

        const calendarString =
          res?.data?.data?.matchedUser?.submissionCalendar;

        if (!calendarString) {
          setHeatmap({});
          setTotal(0);
          return;
        }

        const parsed = JSON.parse(calendarString);
        setHeatmap(parsed);

        const totalSubmissions = Object.values(parsed).reduce(
          (acc, val) => acc + val,
          0
        );

        setTotal(totalSubmissions);
      } catch (error) {
        console.error("API Error:", error);
        setHeatmap({});
        setTotal(0);
      }
    };

    fetchLeetCode();
  }, []);
useEffect(() => {
  if (scrollRef.current) {
    scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
  }
}, [heatmap]);

  const generateDays = () => {
    const days = [];
    const today = new Date();

    for (let i = 364; i >= 0; i--) {
      const date = new Date(
        Date.UTC(
          today.getUTCFullYear(),
          today.getUTCMonth(),
          today.getUTCDate() - i
        )
      );

      const timestamp = Math.floor(date.getTime() / 1000);

      days.push({
        date: date.toISOString().split("T")[0],
        count: heatmap?.[timestamp] ?? 0,
        month: date.getUTCMonth(),
        day: date.getUTCDate(),
      });
    }

    return days;
  };

  const days = generateDays();

  const monthLabels = [];
  let lastMonth = -1;

  days.forEach((day, index) => {
    if (day.month !== lastMonth && day.day <= 7) {
      monthLabels.push({
        month: day.month,
        index,
      });
      lastMonth = day.month;
    }
  });

  const getColor = (count) => {
    if (count === 0) return "bg-[#161b22]";
    if (count < 3) return "bg-[#0e4429]";
    if (count < 6) return "bg-[#006d32]";
    if (count < 10) return "bg-[#26a641]";
    return "bg-[#2ea043]";
  };

  return (
    <div className="mt-12">
      <div className="text-sm text-gray-500 mb-4 font-['MyFont1'] ">
        LeetCode Activity
      </div>

      {/* CARD */}
      <div className="w-full rounded-xl border border-[#30363d]
      bg-[#131311] px-3 py-3 overflow-hidden">

        {/* Month Labels */}
        <div className="relative ml-10 mb-3 h-4 font-['MyFont1']">
          {monthLabels.map((item, i) => (
            <span
              key={i}
              className="absolute text-xs text-gray-500"
              style={{
                left: `${(item.index / days.length) * 100}%`,
              }}
            >
              {new Date(2025, item.month).toLocaleString("default", {
                month: "short",
              })}
            </span>
          ))}
        </div>

        <div className="flex">
          {/* Week Labels */}
          <div className="flex flex-col justify-between text-xs text-gray-500 mr-3 h-23.75 font-['MyFont1']">
            <span>Mon</span>
            <span>Wed</span>
            <span>Fri</span>
          </div>

          {/* Scroll Wrapper */}
          <div className="flex-1 overflow-hidden">
  <div
    ref={scrollRef}
    className="overflow-x-auto custom-scroll pb-2"
  >
    <div
      className="grid gap-0.5"
      style={{
        gridAutoFlow: "column",
        gridTemplateRows: "repeat(7, 12px)",
        width: "max-content",
      }}
    >
      {days.map((day, index) => (
        <div
          key={index}
          title={`${day.date} - ${day.count} submissions`}
          className={`w-3 h-3 rounded-sm ${getColor(day.count)}`}
        />
      ))}
    </div>
  </div>
</div>

        </div>

        {/* Footer */}
        <div className="flex justify-between mt-2 text-sm text-gray-400">
          <span>Total: {total} submissions</span>

          <div className="flex items-center gap-1">
            <span>Less</span>
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-sm bg-[#161b22]" />
              <div className="w-3 h-3 rounded-sm bg-[#0e4429]" />
              <div className="w-3 h-3 rounded-sm bg-[#006d32]" />
              <div className="w-3 h-3 rounded-sm bg-[#26a641]" />
              <div className="w-3 h-3 rounded-sm bg-[#2ea043]" />
            </div>
            <span>More</span>
          </div>
        </div>
      </div>

      {/* Thin Scrollbar */}
      <style>
        {`
        .custom-scroll::-webkit-scrollbar {
          height: 4px;
        }

        .custom-scroll::-webkit-scrollbar-track {
          background: transparent;
        }

        .custom-scroll::-webkit-scrollbar-thumb {
          background: #000000;
          border-radius: 10px;
        }

        .custom-scroll::-webkit-scrollbar-thumb:hover {
          background: #111111;
        }

        .custom-scroll {
          scrollbar-width: thin;
          scrollbar-color: #000000 transparent;
        }
        `}
      </style>
    </div>
  );
};

export default LeetCode;
