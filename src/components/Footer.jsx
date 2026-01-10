import React, { useEffect, useState } from "react";

const Footer = () => {
    const [date , setDate] = useState(null)
  const dates = () => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
    setDate(formattedDate)

  };
  useEffect(()=>{
    dates()
  },[])
  return (
    <>
      <div className="flex items-center justify-between border-t border-white px-4 py-4 mt-10">
        <div className="text-sm text-gray-600">{date}</div>

        <h3 className="text-sm font-['MyFont1'] text-gray-500">
          Asia/Calcutta
        </h3>
      </div>
    </>
  );
};

export default Footer;
