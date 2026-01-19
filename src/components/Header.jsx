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
        const res = await axios.get("https://aman-asthana-backend.onrender.com/api/visit" ,{
          withCredentials : true
        });
        const data = res.data.total.toLocaleString();
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
          {visitors ? `${visitors} visitors ` : "..."}
        </div>
        <div className="flex items-center gap-4">
          <span style={{ fontFamily: "MyFont2" }}>{time} GMT+5:30</span>
        </div>
      </div>
    </div>
  );
}
