import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const USERNAME = "amanasthana1111";

const Github = () => {
  const scrollRef = useRef(null);

  const [heatmap, setHeatmap] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchGithub = async () => {
      try {
        const res = await axios.get(
          `https://gitleet.tech/api/github?username=${USERNAME}`
        );

        const calendar =
          res?.data?.data?.user?.contributionsCollection?.contributionCalendar;

        if (!calendar) {
          setHeatmap([]);
          setTotal(0);
          return;
        }

        setTotal(calendar.totalContributions);

        // Flatten weeks into single array
        const days = calendar.weeks.flatMap((week) =>
          week.contributionDays
        );

        setHeatmap(days);
      } catch (error) {
        console.error("GitHub API Error:", error);
        setHeatmap([]);
        setTotal(0);
      }
    };

    fetchGithub();
  }, []);

  // Auto scroll to latest
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
    }
  }, [heatmap]);

  // Dynamic month labels
  const monthLabels = [];
  let lastMonth = -1;

  heatmap.forEach((day, index) => {
    const date = new Date(day.date);
    const month = date.getMonth();
    const dayOfMonth = date.getDate();

    if (month !== lastMonth && dayOfMonth <= 7) {
      monthLabels.push({
        month,
        index,
      });
      lastMonth = month;
    }
  });

const getColor = (count) => {
  if (count === 0) return "bg-[#161b22]";      // no activity
  if (count <= 2) return "bg-[#0e4429]";      // 1–2
  if (count <= 5) return "bg-[#006d32]";      // 3–5
  return "bg-[#2ea043]";                      // 6+
};

  return (
    <div className="mt-12">
      <div className="text-sm text-gray-500 mb-4 font-['MyFont1']">
        GitHub Activity
      </div>

      <div className="w-full rounded-xl border border-[#30363d]
      bg-[#131311] px-3 py-3 overflow-hidden">

        {/* Month Labels */}
        <div className="relative ml-8 mb-4 h-5 font-['MyFont1'] overflow-hidden">
  {monthLabels.map((item, i) => (
    <span
      key={i}
      className="absolute text-[10px] sm:text-xs text-gray-500 whitespace-nowrap"
      style={{
        left: `calc(${(item.index / heatmap.length) * 100}% - 12px)`,
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

          {/* Scrollable Grid */}
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
                {heatmap.map((day, index) => (
                  <div
                    key={index}
                    title={`${day.date} - ${day.contributionCount} contributions`}
                    className={`w-3 h-3 rounded-sm ${getColor(
                      day.contributionCount
                    )}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between mt-2 text-sm text-gray-400">
          <span>Total: {total} contributions</span>

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

      {/* Thin Black Scrollbar */}
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

export default Github;
