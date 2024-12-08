const HeroBackground = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="text-center z-10 text-white">
        <h1 className="text-6xl font-bold mb-4">Ayush Yadav</h1>
        <p className="text-xl text-gray-400 mb-4">Front-End Engineer</p>
        <div className="flex justify-center gap-4">
          <a
            href="mailto:ayushhuns@gmail.com"
            className="text-blue-400 hover:text-blue-300"
          >
            ayushhuns@gmail.com
          </a>        
        </div>
      </div>
      <div className="absolute right-20 top-1/2 w-32 h-32 rounded-full bg-purple-700 opacity-75 blur-lg animate-pulse" />
    </section>
  );
};
export default HeroBackground;
