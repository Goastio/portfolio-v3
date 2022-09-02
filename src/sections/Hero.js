const Hero = () => {
  const scrollTo = () => {
    const element = document.getElementById("contact");

    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  };

  return (
    <section className="bg-gray-100 py-40 px-5">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="flex flex-wrap text-6xl md:text-7xl font-medium tracking-tight mb-5">
          Professional Frontend&nbsp;
          <span className="text-indigo-500">Developer</span>
        </h2>
        <p>
          Welcome to my portfolio. I am a passionate frontend developer who
          loves learning new technologies. I specialize in creating streamlined
          React applications, and styling them with Tailwind CSS.
        </p>

        <button
          onClick={scrollTo}
          className="mt-5 py-2.5 px-5 border-2 text-indigo-500 rounded-md border-indigo-500 text-sm transition hover:bg-indigo-500 hover:text-white"
        >
          Contact me
        </button>
      </div>
    </section>
  );
};

export default Hero;
