import { FaCloudsmith } from "react-icons/fa";
import { HiOutlinePaperAirplane } from "react-icons/hi";
import { AiOutlineTrophy } from "react-icons/ai";
import BackToTop from "../components/BackToTop";

const Footer = () => {
  return (
    <>
      <section className="bg-gray-100 py-20 px-5">
        <div className="max-w-screen-lg mx-auto flex flex-row flex-wrap">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex w-full justify-end text-black text-opacity-80 hover:text-opacity-100 mb-5 text-sm"
          >
            <BackToTop />
          </button>
          <div className="flex flex-col">
            <div className="flex font-semibold tracking-tight text-lg items-center">
              <FaCloudsmith className="text-indigo-500" />
              Brandon Maczynski
            </div>
            <div className="flex text-sm">Frontend Developer</div>
          </div>
          <div className="flex w-full justify-between mt-5">
            <div className="flex flex-col">
              <div className="flex font-semibold tracking-tight text-lg">
                Work
              </div>
              <div className="text-sm flex flex-col">
                <a
                  href="/reddit-browser"
                  target="_blank"
                  className="text-black text-opacity-80 hover:text-opacity-100"
                >
                  Reddit Browser
                </a>
                <a
                  href="/blackjack"
                  target="_blank"
                  className="text-black text-opacity-80 hover:text-opacity-100"
                >
                  Blackjack
                </a>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex font-semibold tracking-tight text-lg">
                Socials
              </div>
              <div className="text-sm flex flex-col">
                <a
                  href="https://github.com/Goastio"
                  rel="noreferrer"
                  target="_blank"
                  className="text-black text-opacity-80 hover:text-opacity-100"
                >
                  Github
                </a>
                <a
                  href="https://www.linkedin.com/in/brandon-maczynski-40428022a/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-black text-opacity-80 hover:text-opacity-100"
                >
                  LinkedIn
                </a>
                <a
                  href="https://twitter.com/DevelopWebsites"
                  rel="noreferrer"
                  target="_blank"
                  className="text-black text-opacity-80 hover:text-opacity-100"
                >
                  Twitter
                </a>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex font-semibold tracking-tight text-lg">
                Information
              </div>
              <div className="text-sm">
                <a
                  href="mailto:bmaczynski11@yahoo.com"
                  className="flex text-black text-opacity-80 hover:text-opacity-100 gap-1 items-center"
                >
                  <HiOutlinePaperAirplane /> bmaczynski11@yahoo.com
                </a>
                <div className="flex text-black text-opacity-80 hover:text-opacity-100 gap-1 items-center">
                  <AiOutlineTrophy /> Resume
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
