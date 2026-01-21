import ProjectCard from "./Card";
import folify from "../assets/folify.png"
import crypto from "../assets/crypto.png"
import genify from "../assets/genify.png"
import npm from "../assets/npm.png"

const Project = () => {
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
      img :folify,
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
      img : npm,
      githubLink: "https://github.com/amanasthana1111/create-backend-setup",
      deployLink: "https://create-backend-setup-frontend.vercel.app?_vercel_share=JFBNaK5Hl9TQTYMWakHw9fjwtXQhmgyk",
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
      img : genify,
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
      img : crypto,
      githubLink: "https://github.com/amanasthana1111/CryptoTracker-main",
      deployLink: "https://unrivaled-pie-767488.netlify.app/",
    },
  ];

  return (
    <>
      <div className=" text-sm font-['MyFont1'] text-gray-500 mb-3 mt-6">
        Projects I've Built
      </div>
      <div>
        {project.map((ele, index) => (
          <ProjectCard
            key={index}
            projectName={ele.projectName}
            projectSemiDesc={ele.projectSemiDesc}
            projectDesc={ele.projectDesc}
            techStack={ele.techStack}
            githubLink={ele.githubLink}
            deployLink={ele.deployLink}
            imgLink={ele.img}
          ></ProjectCard>
        ))}
      </div>
    </>
  );
};

export default Project;
