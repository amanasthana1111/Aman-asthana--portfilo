import { lazy, Suspense } from "react";
import { motion } from "motion/react";

import Connect from "../components/Connect";
import Credit from "../components/Credit";
import Footer from "../components/Footer";
import Github from "../components/Github";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Project from "../components/Project";
import Skills from "../components/Skills";

const Song = lazy(() => import("../components/Song"));

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Home = () => {
  return (
    <div className="w-full bg-[#000000] min-h-screen">
      <div className="max-w-2xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" animate="visible">
          <Header />
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" animate="visible">
          <Hero />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Skills />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Project />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Github />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Connect />
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
          <Footer />
        </motion.div>

        <Suspense
          fallback={
            <p className="text-gray-500 text-sm mt-6">Loading music...</p>
          }
        >
          <Song />
        </Suspense>

        <Credit />
      </div>
    </div>
  );
};

export default Home;
