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
        <SiHtml5 className="text-black text-opacity-50" />
        <SiCss3 className="text-black text-opacity-50" />
        <SiJavascript className="text-black text-opacity-50" />
        <SiReact className="text-black text-opacity-50" />
        <SiTailwindcss className="text-black text-opacity-50" />
        <SiNodedotjs className="text-black text-opacity-50" />
        <SiExpress className="text-black text-opacity-50" />
        <SiMongodb className="text-black text-opacity-50" />
      </div>
    </SectionWrapper>
  );
};

export default Skills;
