import SectionWrapper from "../wrappers/SectionWrapper";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiExpress,
  SiNodedotjs,
  SiMongodb,
  SiGithub,
} from "react-icons/si";

const Skills = () => {
  return (
    <SectionWrapper id="skills" title="Skills">
      <div className="grid grid-cols-3 sm:flex sm:flex-row w-full text-3xl justify-between gap-5 py-20">
        <div className="flex text-lg font-light gap-0.5 tracking-tight items-center text-black text-opacity-50">
          <SiHtml5 className=" hover:text-[#E54C27] transition duration-100" />
          HTML5
        </div>
        <div className="flex text-lg font-light gap-0.5 tracking-tight items-center text-black text-opacity-50">
          <SiCss3 className="text-black text-opacity-50 hover:text-[#3F8EC6] transition duration-100" />
          CSS3
        </div>
        <div className="flex text-lg font-light gap-0.5 tracking-tight items-center text-black text-opacity-50">
          <SiJavascript className="text-black text-opacity-50 hover:text-[#EFDB4E] transition duration-100" />
          Javascript
        </div>

        <div className="flex text-lg font-light gap-0.5 tracking-tight items-center text-black text-opacity-50">
          <SiReact className="text-black text-opacity-50 hover:text-[#61DAFB] transition duration-100" />
          ReactJS
        </div>
        <div className="flex text-lg font-light gap-0.5 tracking-tight items-center text-black text-opacity-50">
          <SiTailwindcss className="text-black text-opacity-50 hover:text-[#2198BD] transition duration-100" />
          TailwindCSS
        </div>
        <div className="flex text-lg font-light gap-0.5 tracking-tight items-center text-black text-opacity-50">
          <SiNodedotjs className="text-black text-opacity-50 hover:text-[#82CD29] transition duration-100" />
          Node
        </div>
        <div className="flex text-lg font-light gap-0.5 tracking-tight items-center text-black text-opacity-50">
          <SiExpress className="text-black text-opacity-50 hover:text-black transition duration-100" />
          Express
        </div>
        <div className="flex text-lg font-light gap-0.5 tracking-tight items-center text-black text-opacity-50">
          <SiMongodb className="text-black text-opacity-50 hover:text-[#50A942] transition duration-100" />
          MongoDB
        </div>
        <div className="flex text-lg font-light gap-0.5 tracking-tight items-center text-black text-opacity-50">
          <SiGithub className="text-black text-opacity-50 hover:text-black transition duration-100" />
          Github
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Skills;
