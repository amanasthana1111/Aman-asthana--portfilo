import { motion } from "motion/react";
import { DragMe } from "./DragMe";
const Skills = () => {
  const skills = [
    {
      name: "Tailwind CSS",
      logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.simpleicons.org/javascript/F7DF1E",
    },
    {
      name: "TypeScript",
      logo: "https://cdn.simpleicons.org/typescript/3178C6",
    },
    {
      name: "TanStack Query",
      logo: "https://cdn.simpleicons.org/reactquery/FF4154",
    },
    { name: "React", logo: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs/FFFFFF" },
    { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs/339933" },
    { name: "Express.js", logo: "https://cdn.simpleicons.org/express/FFFFFF" },
    { name: "MongoDB", logo: "https://cdn.simpleicons.org/mongodb/47A248" },
    { name: "Prisma", logo: "https://cdn.simpleicons.org/prisma/2D3748" },
    {
      name: "PostgreSQL",
      logo: "https://cdn.simpleicons.org/postgresql/4169E1",
    },
    //   { name: "NeonDB", logo: "https://cdn.simpleicons.org/neon/00E599" },
    { name: "NextAuth", logo: "https://cdn.simpleicons.org/auth0/EB5424" },
    { name: "Zod", logo: "https://cdn.simpleicons.org/zod/3B82F6" },
    {
      name: "Zustand",
      logo: "https://hexmos.com/freedevtools/svg_icons/zustand/zustand-original.svg",
    },
    { name: "Redis", logo: "https://cdn.simpleicons.org/redis/DC382D" },
    //   { name: "Docker", logo: "https://cdn.simpleicons.org/docker/2496ED" },
    //   { name: "CI/CD", logo: "https://cdn.simpleicons.org/githubactions/2088FF" },
    //   { name: "Turborepo", logo: "https://cdn.simpleicons.org/turborepo/FFFFFF" },
    { name: "Postman", logo: "https://cdn.simpleicons.org/postman/FF6C37" },
    { name: "Git", logo: "https://cdn.simpleicons.org/git/F05032" },
    {
      name: "DSA",
      logo: "https://cdn-icons-png.flaticon.com/512/1042/1042009.png",
    },
    {
      name: "OOPS",
      logo: "https://cdn-icons-png.flaticon.com/512/17638/17638351.png",
    },
    {
      name: "DBMS",
      logo: "https://cdn-icons-png.flaticon.com/512/14702/14702591.png",
    },
    {
      name: "Operating Systems",
      logo: "https://cdn-icons-png.flaticon.com/512/7655/7655685.png",
    },
    {
      name: "Computer Networks",
      logo: "https://cdn-icons-png.flaticon.com/512/2103/2103658.png",
    },
    {
      name: "Basic System Design",
      logo: "https://cdn-icons-png.flaticon.com/512/5979/5979577.png",
    },
  ];

  return (
    <>
      <div className="text-sm font-['MyFont1'] text-gray-500 mt-8 flex justify-between">
        <div> Skills & Tools</div>
        <div>
          <DragMe />
        </div>
      </div>

      <div className="flex flex-wrap gap-2.5 mt-4 cursor-grab">
        {skills.map((skill) => (
          <motion.div
            drag
            dragConstraints={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }}
            dragElastic={0.3}
            key={skill.name}
            className="flex items-center gap-2 px-3 py-2 rounded-md
                   border border-white/10 bg-[#131311]
                   text-sm text-gray-200 hover:border-white/30"
          >
            <img src={skill.logo} alt={skill.name} className="w-4 h-4" />
            <span className=" hover:text-orange-400  ">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Skills;
