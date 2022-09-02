import { FaCloudsmith } from "react-icons/fa";

const Navbar = () => {
  const navLinks = [
    {
      name: "Skills",
      link: "/skills",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <section className="p-5 w-full bg-white">
      <div className="max-w-screen-lg mx-auto flex w-full justify-between items-center">
        <div className="flex text-lg items-center">
          <FaCloudsmith className="text-indigo-500" />
          <div className="font-bold tracking-tight">Brandon Maczynski</div>
        </div>
        <div className="flex gap-2.5">
          {navLinks.map((link, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  const element = document.getElementById(
                    link.name.toLowerCase()
                  );
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "nearest",
                  });
                }}
                className="flex"
              >
                {link.name}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
