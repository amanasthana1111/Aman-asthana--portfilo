import Header from "./Header";

const Home = () => {
  return (
    <div className="w-full bg-[#0f0f0f] min-h-screen">
      {/* empty | content | empty */}
      <div className="grid grid-cols-[1fr_1.8fr_1fr]">
        <div />

        <div className="mt-2">
          <Header />
        </div>

        <div />
      </div>
    </div>
  );
};

export default Home;
