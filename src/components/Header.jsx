import { useEffect, useState } from "react";
import axios from "axios";

export default function Header() {
  const [visitors, setVistor] = useState(0);
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTime(formattedTime);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const vistorFn = async () => {
      try {
        const res = await axios.get("https://portfolio-backend-8pe7.onrender.com/visit" , {
          withCredentials : true
        });
        const data = res.data.totalVisitors;
        setVistor(data);
      } catch (error) {
        setVistor(null);
      }
    };
    vistorFn();
  }, []);

  return (
    <div className="py-4">
      <div className="flex items-center justify-between text-sm mt-8 text-[#787572]">
        <div style={{ fontFamily: "MyFont2" }} >
          {visitors ? visitors : "..."}
        </div>
        <div className="flex items-center gap-4">
          <span style={{ fontFamily: "MyFont2" }}>{time} GMT+5:30</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364-1.414 1.414M7.05 16.95l-1.414 1.414m0-12.728L7.05 7.05m9.9 9.9 1.414 1.414M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
