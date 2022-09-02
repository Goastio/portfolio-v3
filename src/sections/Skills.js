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
    <SectionWrapper
      title="Skills"
      description="Welcome to my portfolio. I am a passionate frontend developer who loves learning new technologies. I specialize in creating streamlined React applications, and styling them with Tailwind CSS."
    >
      <div className="flex flex-row w-full text-8xl justify-between sm:justify-center gap-5">
        <SiHtml5 className="p-5 bg-gray-200 rounded-md hover:text-gray-400 transition duration-100" />
        <SiCss3 className="p-5 bg-gray-200 rounded-md hover:text-gray-400 transition duration-100 " />
        <SiJavascript className="p-5 bg-gray-200 rounded-md hover:text-gray-400 transition duration-100 " />
        <SiReact className="p-5 bg-gray-200 rounded-md hover:text-gray-400 transition duration-100" />
      </div>
      <div className="flex flex-row w-full text-8xl justify-between sm:justify-center gap-5 mt-5">
        <SiTailwindcss className="p-5 bg-gray-200 rounded-md hover:text-gray-400 transition duration-100" />
        <SiNodedotjs className="p-5 bg-gray-200 rounded-md hover:text-gray-400 transition duration-100" />
        <SiExpress className="p-5 bg-gray-200 rounded-md hover:text-gray-400 transition duration-100" />
        <SiMongodb className="p-5 bg-gray-200 rounded-md hover:text-gray-400 transition duration-100" />
      </div>
    </SectionWrapper>
  );
};

export default Skills;
