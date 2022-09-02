const Navbar = () => {
  return (
    <section className="p-5 w-full bg-white">
      <div className="max-w-screen-lg mx-auto flex w-full justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight">Brandon</h2>
        <div className="flex gap-2.5">
          <a
            className="link link-underline link-underline-black text-black"
            href="/"
          >
            Home
          </a>
          <a
            className="link link-underline link-underline-black text-black"
            href="/"
          >
            Skills
          </a>
          <a
            className="link link-underline link-underline-black text-black"
            href="/"
          >
            Projects
          </a>
          <a
            className="link link-underline link-underline-black text-black"
            href="/"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
