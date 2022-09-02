const SectionWrapper = (props) => {
  return (
    <section
      id={props.id}
      className={props.gray ? "bg-gray-100 py-20 px-5" : "bg-white py-20 px-5"}
    >
      <div className="max-w-screen-lg mx-auto">
        <h3 className="md:text-6xl text-5xl font-medium tracking-tight mb-5">
          {props.title}
        </h3>
        <p>{props.description}</p>
        <div className="mt-10">{props.children}</div>
      </div>
    </section>
  );
};

export default SectionWrapper;
