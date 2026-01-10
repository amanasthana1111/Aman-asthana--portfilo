import axios from "axios";
import React, { useEffect, useState } from "react";

const Github = () => {
  const [contributions, setContributions] = useState(null);

  useEffect(() => {
    const githubCont = async () => {
     try {
         const { data } = await axios.get(
        "https://github-contributions-api.jogruber.de/v4/amanasthana1111?y=last"
      );
      setContributions(data?.total?.lastYear);
     } catch (error) {
        setContributions(null)
     }
    };
    githubCont();
  }, []);
  return (
    <>
      <div className="text-sm font-['MyFont1'] text-gray-500 mt-12 mb-3">
        GitHub Activity
      </div>
      <div
        className=" font-[Myfont2] w-full rounded-xl border border-dashed
 border-white/10 bg-[#131311] p-5 hover:border-white/20 transition-colors mb-3"
      >
        <img src="https://ghchart.rshah.org/22c55e/amanasthana1111" />
        <div className="flex justify-between">
          <h3 className="mt-2 text-sm font-['MyFont1'] text-gray-500">
            Total: {contributions} contributions
          </h3>
          <div className="flex items-center gap-1">
            <h3 className="text-sm font-['MyFont1'] text-gray-500">Less</h3>
            <div className="flex gap-1 sm:gap-0.5">
              <div className=" w-3 h-3 sm:w-2.5 sm:h-2.5 rounded-sm bg-[#161b22]"></div>
              <div className=" w-3 h-3 sm:w-2.5 sm:h-2.5 rounded-sm bg-[#0e4429]"></div>
              <div className=" w-3 h-3 sm:w-2.5 sm:h-2.5 rounded-sm bg-[#006d32]"></div>
              <div className=" w-3 h-3 sm:w-2.5 sm:h-2.5 rounded-sm bg-[#26a641]"></div>
              <div className=" w-3 h-3 sm:w-2.5 sm:h-2.5 rounded-sm bg-[#39d353]"></div>
            </div>
            <h3 className="text-sm font-['MyFont1'] text-gray-500">More</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Github;
