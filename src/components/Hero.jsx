const Hero = () => {
  return (
    <section className="w-full text-white mt-5 mb-9">
      <div className="font-['MyFont2']">
        <a target="_blank" href="https://drive.google.com/file/d/1qrfo8rwNNcxULqe1kkMp57t8RakHSFfa/view?usp=sharing"><h1 className="text-xl">Aman Asthana</h1></a>

        <p className="text-base mt-2 text-[#787572]">Software Engineer</p>

        <p className=" text-[15px] max-w-3xl  leading-relaxed text-gray-300 mt-4">
          I build{" "}
          <span className="text-orange-400">full-stack applications.</span>{" "}
          Passionate about creating projects that make a{" "}
          <span className="text-orange-400"> real-world impact.</span> I focus on
          clean code and user experience.
        </p>

        <p className="text-gray-400 mt-4 leading-relaxed">
          Previously worked on{" "}
          <span
            className="inline-flex items-center gap-2 px-3 py-1 mx-1 rounded-md 
                   bg-[#161616] border border-white/10 text-gray-200 text-sm 
                   align-middle"
          >
            <a target="_blank" href="https://pre-well-frontend.vercel.app/">
              <span   className="leading-none cursor-pointer text-red-600">
                Folify
              </span>
            </a>
          </span>{" "}
          modern web platforms , contributing to AI-driven and user-centric
          products.
        </p>

        <p className="text-base text-gray-400 mt-4">
          Most days I work with{" "}
          <span className="text-white font-semibold">Next.js</span>,{" "}
          <span className="text-white font-semibold">Express.js</span>, and{" "}
          <span className="text-white font-semibold">TypeScript</span>, building
          systems that are fast, reliable, and visually polished.
        </p>

        <p className="text-base text-gray-400 mt-4">
          Open to{" "}
          <span className="font-semibold">collaborations, internships</span>,
          engineering challenges.
        </p>
      </div>
    </section>
  );
};

export default Hero;
