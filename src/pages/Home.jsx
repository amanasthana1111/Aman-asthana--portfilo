import Connect from "../components/Connect";
import Credit from "../components/Credit";
import Footer from "../components/Footer";
import Github from "../components/Github";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Project from "../components/Project";
import Skills from "../components/Skills";
import Song from "../components/Song";

const Home = () => {
  return (
    <div className="w-full bg-[#0f0f0f] min-h-screen">
      <div className="max-w-2xl mx-auto px-6">
        <Header />
        <Hero />
        <Skills />
        <Project />

        <Github />
        <Connect />
        <Footer />
        <Song />
        <Credit/>
      </div>
    </div>
  );
};

export default Home;
