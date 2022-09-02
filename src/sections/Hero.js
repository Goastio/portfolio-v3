const Hero = () => {
  return (
    <section className="bg-gray-100 py-40 px-5">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-7xl font-medium tracking-tight mb-5">
          Frontend developer
        </h2>
        <p>
          Welcome to my portfolio. I am a passionate frontend developer who
          loves learning new technologies. I specialize in creating streamlined
          React applications, and styling them with Tailwind CSS.
        </p>

        <button className="mt-5 py-2.5 px-5 border-2 text-blue-500 border-blue-500 text-sm transition hover:bg-blue-500 hover:text-white">
          Contact me
        </button>
      </div>
    </section>
  );
};

export default Hero;
