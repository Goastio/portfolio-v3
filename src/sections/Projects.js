import SectionWrapper from "../wrappers/SectionWrapper";
import redditapp from "../images/redditapp.png";
import blackjack from "../images/blackjack.png";

const Projects = () => {
  return (
    <SectionWrapper
      title="Projects"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
    vel non. Facilis deserunt necessitatibus magnam debitis ipsam iste
    dolor cum placeat."
      gray="true"
    >
      <div className="flex flex-col lg:flex-row mt-10 gap-5">
        <div className="shadow-lg bg-white rounded-md p-5 flex flex-col lg:flex-row w-full gap-5 items-center">
          <div className="w-28 h-28 bg-gray-200 border border-gray-300 rounded-full flex shrink-0">
            <img src={redditapp} alt="" className="flex rounded-full" />
          </div>
          <div>
            <h4 className="text-xl font-medium">Project name</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
              vel non. Facilis deserunt necessitatibus magnam debitis ipsam iste
              dolor cum placeat.
            </p>
            <button
              onClick={() => {
                window.open("brandonmaczynski.com/reddit-app", "_blank");
              }}
              className="mt-5 py-2.5 px-5 border-2 text-indigo-500 rounded-md border-indigo-500 text-sm transition hover:bg-indigo-500 hover:text-white"
            >
              View project
            </button>
          </div>
        </div>

        <div className="shadow-lg bg-white rounded-md p-5 flex flex-col lg:flex-row w-full gap-5 items-center">
          <div className="w-28 h-28 bg-gray-200 border border-gray-300 rounded-full flex shrink-0">
            <img src={blackjack} alt="" className="flex rounded-full" />
          </div>
          <div>
            <h4 className="text-xl font-medium">Project name</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
              vel non. Facilis deserunt necessitatibus magnam debitis ipsam iste
              dolor cum placeat.
            </p>
            <button
              onClick={() => {
                window.open("brandonmaczynski.com/blackjack", "_blank");
              }}
              className="mt-5 py-2.5 px-5 border-2 text-indigo-500 rounded-md border-indigo-500 text-sm transition hover:bg-indigo-500 hover:text-white"
            >
              View project
            </button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
