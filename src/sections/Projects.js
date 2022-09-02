import SectionWrapper from "../wrappers/SectionWrapper";
import redditapp from "../images/redditapp.png";
import blackjack from "../images/blackjack.png";

const Projects = () => {
  return (
    <SectionWrapper
      id="projects"
      title="Projects"
      description="Listed below are the projects I am currently working on that are functional, or have been completed."
      gray="true"
    >
      <div className="flex flex-col lg:flex-row mt-10 gap-5">
        <div className="shadow-lg bg-white rounded-md p-5 flex flex-col lg:flex-row w-full gap-5 items-center">
          <div className="w-32 h-32 bg-gray-200 border border-gray-300 rounded-full flex shrink-0">
            <img src={redditapp} alt="" className="flex rounded-full" />
          </div>
          <div>
            <h4 className="text-xl font-medium">Browser for Reddit</h4>
            <p>
              An app I created that uses Reddit's API to display current
              information on any subreddit.
            </p>
            <div className="flex gap-2.5">
              <button
                onClick={() => {
                  window.open("/reddit-app", "_blank");
                }}
                className="mt-5 py-2.5 px-5 border-2 text-indigo-500 rounded-md border-indigo-500 text-sm transition hover:bg-indigo-500 hover:text-white"
              >
                View project
              </button>
              <button
                onClick={() => {
                  window.open(
                    "https://github.com/Goastio/reddit-browser",
                    "_blank"
                  );
                }}
                className="mt-5 py-2.5 px-5 border-2 text-indigo-500 rounded-md border-indigo-500 text-sm transition hover:bg-indigo-500 hover:text-white"
              >
                Source
              </button>
            </div>
          </div>
        </div>

        <div className="shadow-lg bg-white rounded-md p-5 flex flex-col lg:flex-row w-full gap-5 items-center">
          <div className="w-32 h-32 bg-gray-200 border border-gray-300 rounded-full flex shrink-0">
            <img src={blackjack} alt="" className="flex rounded-full" />
          </div>
          <div>
            <h4 className="text-xl font-medium">Blackjack</h4>
            <p>
              Programmed from the ground up without the use of APIs. One of my
              first projects.
            </p>
            <div className="flex gap-2.5">
              <button
                onClick={() => {
                  window.open("/blackjack", "_blank");
                }}
                className="mt-5 py-2.5 px-5 border-2 text-indigo-500 rounded-md border-indigo-500 text-sm transition hover:bg-indigo-500 hover:text-white"
              >
                View project
              </button>
              <button
                onClick={() => {
                  window.open(
                    "https://github.com/Goastio/blackjack-react",
                    "_blank"
                  );
                }}
                className="mt-5 py-2.5 px-5 border-2 text-indigo-500 rounded-md border-indigo-500 text-sm transition hover:bg-indigo-500 hover:text-white"
              >
                Source
              </button>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
