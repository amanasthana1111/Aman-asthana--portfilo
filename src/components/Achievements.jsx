import { motion } from "motion/react";
import { DragMe } from "./DragMe";
import {
  FaTrophy,
  FaMedal,
  FaAward,
  FaCode,
  FaFileAlt,
  FaStar,
} from "react-icons/fa";

const Achievements = () => {
const achievements = [
  {
    name: "METI Top 5%",
    desc: "Ranked B among 5,231 participants in the IT Contest for Internships in Japan for AI & Tech conducted by METI, Japan (2025).",
    icon: FaMedal,
    link: "https://drive.google.com/file/d/1aVhomBYU6RFHinMDOTLZcKENqCx9CL-O/view"
  },
  {
    name: "Pratibimb Winner",
    desc: "1st Place – DRON-Pratibimb Hackathon 2023.",
    icon: FaTrophy,
    link: "https://www.linkedin.com/posts/amanasthanacse_dronpratibimb-techmantra-dronacharyainstitutes-activity-7063123900720721920-yw9K"
  },
  {
    name: "Microsoft 3rd",
    desc: "3rd Place – Microsoft Ideathon 2024.",
    icon: FaAward,
    link: "https://drive.google.com/file/d/1grU71U2SrjoCOaMFgez9b4wgY8NrxRbH/view"
  },
  {
    name: "LeetCode 250+",
    desc: "Solved 250+ Data Structures and Algorithms problems on LeetCode.",
    icon: FaCode,
    link: "https://leetcode.com/"
  },
  {
    name: "Blockchain Research",
    desc: "Published research on blockchain-based certificate verification.",
    icon: FaFileAlt,
    link: "https://drive.google.com/file/d/1hKzIXkqkfkpI4zwa89iMg1d3pGCd7BM_/view"
  },
  {
    name: "DRON Finalist",
    desc: "Finalist – DRON Hackathon 2024.",
    icon: FaStar,
    link: "https://drive.google.com/file/d/1j_VwCa20NfOyUh35n4ycPVZ8f4AOsutC/view"
  }
];
  return (
    <>
      <div className="text-sm font-['MyFont1'] text-gray-500 mt-8 flex justify-between">
        <div> Achievements</div>
        <div>
          <DragMe word ={"click me!"} />
        </div>
      </div>

      <div className="flex flex-wrap gap-2.5 mt-4 cursor-pointer">
        {achievements.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center gap-2 px-3 py-2 rounded-md
               border border-white/10 bg-[#131311]
               text-sm text-gray-200 hover:border-white/30"
          >
            <skill.icon className="w-4 h-4 text-orange-400 shrink-0" />
            <a href={skill.link}><span className="hover:text-orange-400">{skill.name}</span></a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Achievements;
