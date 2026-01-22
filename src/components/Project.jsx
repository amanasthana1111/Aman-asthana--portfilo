import ProjectCard from "./Card";
import folify from "../assets/folify.png";
import crypto from "../assets/crypto.png";
import genify from "../assets/genify.png";
import npm from "../assets/npm.png";
import brain from "../assets/brain.png";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const Project = () => {
  const [projectShow, setProjectShow] = useState(false);
  const project = [
    {
      projectName: "Folify ",
      projectDesc:
        "A full-stack AI platform for ATS resume analysis, interview preparation, and portfolio generation.",
      projectSemiDesc: [
        "Implemented JWT-based auth with cookies",
        "Redis-powered rate limiting",
        "free vs paid plan management",
        "strict input validation using Zod",
        "and reliable API error handling.",
      ],
      techStack: [
        "Express",
        "MongoDB (Mongoose)",
        "Redis",
        "JWT",
        "Cookies",
        "Google Gemini AI",
        "Cloudinary",
        "Zod",
        "Multer",
        "bcrypt",
      ],
      img: folify,
      githubLink: "https://github.com/amanasthana1111/PreWell--Backend",
      deployLink: "https://pre-well-frontend.vercel.app/",
    },
    {
      projectName: "create-backend-setup",
      projectDesc:
        "An interactive CLI tool that scaffolds a production-ready Node.js backend with modern tooling and best practices.",
      projectSemiDesc: [
        "Instant backend setup with Express and TypeScript",
        "Schema validation using Zod",
        "ORM support with Prisma or Mongoose",
        "Authentication setup with bcrypt and JSON Web Tokens",
        "Preconfigured CORS, dotenv, and cookie-parser",
        "Clean, scalable folder structure for real-world projects",
      ],
      techStack: [
        "Node.js",
        "Express.js",
        "TypeScript",
        "Zod",
        "Prisma",
        "Mongoose",
        "bcrypt",
        "jsonwebtoken",
        "dotenv",
        "cors",
      ],
      img: npm,
      githubLink: "https://github.com/amanasthana1111/create-backend-setup",
      deployLink:
        "https://create-backend-setup-frontend.vercel.app?_vercel_share=JFBNaK5Hl9TQTYMWakHw9fjwtXQhmgyk",
    },
    {
      projectName: "second-brain",
      projectDesc:
        "A personal knowledge hub that lets users collect, organize, and securely share content from multiple sources like YouTube, tweets, documents, and links, all in one centralized system.",
      projectSemiDesc: [
        "JWT-based user authentication with protected routes",
        "Content creation with strict validation using Zod",
        "Tag-based organization for efficient content management",
        "Secure shareable links with revoke access functionality",
        "Role-based access control and secure content deletion",
        "Scalable backend architecture with future AI embedding search support",
      ],
      techStack: [
        "Node.js",
        "Express.js",
        "TypeScript",
        "MongoDB",
        "Mongoose",
        "Zod",
        "JWT",
        "dotenv",
        "ESLint",
        "Prettier",
      ],
      img: brain,
      githubLink: "https://github.com/amanasthana1111/second-brain",
      deployLink: "https://github.com/amanasthana1111/second-brain",
    },

    {
      projectName: "Genify",
      projectDesc:
        "A prompt-driven AI tool that generates starter website code HTML, CSS, JavaScript  ",
      projectSemiDesc: [
        "Built scalable architecture using React Router",
        "Designed a responsive UI with Tailwind CSS",
        "Enabled ZIP downloads for generated templates",
        "Created modular and reusable components for fast iteration",
      ],
      techStack: [
        "React",
        "React Router",
        "Tailwind CSS",
        "Express",
        "Google Gemini AI API",
      ],
      img: genify,
      githubLink: "https://github.com/amanasthana1111/GENIFY--Backend",
      deployLink: "https://regal-smakager-739bd9.netlify.app/",
    },
    {
      projectName: "Crypto Price Tracker",
      projectDesc:
        "A real-time cryptocurrency tracking web app showing live prices, percentage changes, charts, and market trends.",
      projectSemiDesc: [
        "Integrated CoinGecko API with optimized caching for sub-500ms responses",
        "advanced filtering & sorting",
        "interactive Chart.js visualizations",
        "and a crypto news section.",
      ],
      techStack: [
        "React.js",
        "JavaScript",
        "Chart.js",
        "CoinGecko API",
        "HTML5",
        "CSS3",
      ],
      img: crypto,
      githubLink: "https://github.com/amanasthana1111/CryptoTracker-main",
      deployLink: "https://unrivaled-pie-767488.netlify.app/",
    },
  ];

  const visibleProjects = projectShow ? project : project.slice(0, 3);

  return (
    <>
      <div className="text-sm font-['MyFont1'] text-gray-500 mb-3 mt-6">
        Projects I've Built
      </div>

      {/* Animated Container */}
      <motion.div layout className="space-y-6">
        <AnimatePresence>
          {visibleProjects.map((ele, index) => (
            <motion.div
              key={ele.projectName}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <ProjectCard
                projectName={ele.projectName}
                projectSemiDesc={ele.projectSemiDesc}
                projectDesc={ele.projectDesc}
                techStack={ele.techStack}
                githubLink={ele.githubLink}
                deployLink={ele.deployLink}
                imgLink={ele.img}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Toggle Button */}
      <div className="flex justify-center mt-6">
        <motion.div
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors cursor-pointer"
          onClick={() => setProjectShow((prev) => !prev)}
        >
          {projectShow ? "Show less" : "Show more"}
        </motion.div>
      </div>
    </>
  );
};

export default Project;
