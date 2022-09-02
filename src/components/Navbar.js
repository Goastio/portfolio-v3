const Navbar = () => {
  return (
    <section className="p-5 w-full bg-white">
      <div className="max-w-screen-lg mx-auto flex w-full justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight">Brandon</h2>
        <div className="flex gap-2.5">
          <a href="/">Home</a>
          <a href="/">Skills</a>
          <a href="/">Projects</a>
          <a href="/">Contact</a>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
 