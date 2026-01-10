import Header from "./Header";
import Hero from "./Hero";

const Home = () => {
  return (
    <div className="w-full bg-[#0f0f0f] min-h-screen">
      
      {/* centered container */}
      <div className="max-w-2xl mx-auto px-6">
        <Header />
        <Hero />
      </div>

    </div>
  );
};

export default Home;
