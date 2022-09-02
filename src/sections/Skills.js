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
} from "react-icons/si";

const Skills = () => {
  return (
    <SectionWrapper title="Skills">
      <div className="grid grid-cols-4 place-items-center sm:flex sm:flex-row w-full text-4xl sm:text-5xl justify-between sm:justify-center gap-5 py-20">
        <SiHtml5 className="text-black text-opacity-50 hover:text-[#E54C27] transition duration-100" />
        <SiCss3 className="text-black text-opacity-50 hover:text-[#3F8EC6] transition duration-100" />
        <SiJavascript className="text-black text-opacity-50 hover:text-[#EFDB4E] transition duration-100" />
        <SiReact className="text-black text-opacity-50 hover:text-[#61DAFB] transition duration-100" />
        <SiTailwindcss className="text-black text-opacity-50 hover:text-[#2198BD] transition duration-100" />
        <SiNodedotjs className="text-black text-opacity-50 hover:text-[#82CD29] transition duration-100" />
        <SiExpress className="text-black text-opacity-50 hover:text-black transition duration-100" />
        <SiMongodb className="text-black text-opacity-50 hover:text-[#50A942] transition duration-100" />
      </div>
    </SectionWrapper>
  );
};

export default Skills;
