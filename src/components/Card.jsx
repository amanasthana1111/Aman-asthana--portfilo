import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
const ProjectCard = ({
  projectName,
  projectDesc,
  projectSemiDesc,
  techStack,
  githubLink,
  deployLink,
  imgLink,
}) => {
  const [open, setOpen] = useState(false);
  const techColorMap = {
    express: "#000000",
    "mongodb (mongoose)": "#47A248",
    redis: "#DC382D",
    jwt: "#000000",
    cookies: "#F59E0B",
    bcrypt: "white",
    multer: "#6B7280",
    zod: "#3B82F6",
    cloudinary: "#3448C5",
    "google gemini ai": "#4285F4",
    "google gemini ai api": "#4285F4",
    react: "#61DAFB",
    "react.js": "#61DAFB",
    "react router": "#CA4245",
    "tailwind css": "#06B6D4",
    javascript: "#F7DF1E",
    html5: "#E34F26",
    css3: "#1572B6",
    "chart.js": "#FF6384",
    "coingecko api": "#8DC647",
  };

  return (
    <div
      className=" font-[Myfont2] w-full rounded-xl border border-dashed
 border-white/10 bg-[#131311] p-5 hover:border-white/20 transition-colors mb-3"
    >
      <h3 className="text-base text-white">{projectName}</h3>

      {/* Description */}
      <p className="mt-2 text-sm text-gray-400 leading-relaxed max-w-3xl">
        {projectDesc}
      </p>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="details"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 1, ease: "easeInOut" },
              opacity: { duration: 0.4 },
            }}
            className="overflow-hidden"
          >
            <ul className="mt-4 mb-5 space-y-2 text-sm text-gray-400 list-disc list-inside">
              {projectSemiDesc.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="my-4 w-full"
            >
              <img
                src={imgLink}
                alt={projectName}
                loading="lazy"
                className="w-full h-auto rounded-lg object-cover"
              />
            </motion.div>

            <div>
              {techStack.map((ele, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-2 px-3 py-1 mx-1 my-2 rounded-md border border-white/10 text-[#f97316] text-sm"
                >
                  {ele}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-2 flex items-center justify-between text-[11px]">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors"
        >
          <span className="cursor-pointer">
            {open ? "Show less " : "Know More "}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19 9-7 7-7-7"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19 9-7 7-7-7"
              />
            )}
          </svg>
        </button>

        <div className="flex items-center gap-6">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.23 1.84 1.23 1.07 1.84 2.8 1.31 3.48 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.93.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12Z" />
            </svg>
            <span>Repo</span>
          </a>

          <a
            href={deployLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-orange-400 hover:text-orange-300 transition-colors"
          >
            <span>Visit</span>
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
                d="M7 17L17 7M7 7h10v10"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
