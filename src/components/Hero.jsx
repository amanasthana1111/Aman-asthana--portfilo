const Hero = () => {
  return (
    <section className="w-full text-white mt-4 mb-4">
      <div className="font-['MyFont2']">
        <h1 className="text-2xl">Aman Asthana</h1>

        <p className="text-base mt-2 text-[#787572]">
          Full-Stack Software Engineer
        </p>

        <p className="text-[15px] max-w-3xl leading-relaxed text-gray-400 mt-4">
          I build{" "}
          <span className="text-orange-500">full-stack web applications</span>{" "}
          that solve real-world problems. Passionate about crafting{" "}
          <span className="text-orange-500">clean, efficient code</span> and
          delivering exceptional user experiences.
        </p>

        <p className="text-gray-400 mt-4 leading-relaxed">
          Previously contributed to modern web platforms like{" "}
          <span
            className="inline-flex items-center gap-2 px-2 py-0.5 mx-1 rounded-md 
                   bg-[#161616] border border-white/10 text-gray-200 text-sm 
                   align-middle"
          >
            <a target="_blank" href="https://pre-well-frontend.vercel.app/">
              <span className="leading-none cursor-pointer text-red-700">
                Folify
              </span>
            </a>
          </span>
          , an AI-driven project focused on user-centric design and
          functionality.
        </p>

        <p className="text-base text-gray-400 mt-4">
          Currently, I work extensively with{" "}
          <span className="text-orange-500 ">Next.js</span>,{" "}
          <span className="text-orange-500 ">Express.js</span>, and{" "}
          <span className="text-orange-500 ">TypeScript</span>, building systems
          that are fast, reliable, and visually polished.
        </p>

        <p className="mt-4 text-base text-gray-400">
          Open to <span className="text-orange-500">collaborations</span>,{" "}
          <span className="text-orange-500">internships</span>, and innovative
          engineering challenges.{" "}
          <a
            href="https://drive.google.com/file/d/1B4XhycOsGdZrH-14lvd4Lm2SHp10RJNw/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:underline"
          >
            View Resume
          </a>
        </p>
      </div>
    </section>
  );
};

export default Hero;
