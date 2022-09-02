const Contact = () => {
  return (
    <section className="bg-white py-20">
      <div className="flex max-w-screen-lg mx-auto w-full gap-20 items-center">
        <div>
          <h3 className="text-6xl font-medium tracking-tight mb-5">Contact</h3>
          <p>Get in touch.</p>
        </div>
        <form className="w-full bg-gray-200 rounded-md p-10">
          <div className="flex gap-5 mb-5">
            <input
              type="text"
              className="w-full border px-5 py-2 text-lg rounded-md hover:cursor-pointer focus:cursor-text"
              placeholder="Name"
            />
            <input
              type="text"
              className="w-full border px-5 py-2 text-lg rounded-md hover:cursor-pointer focus:cursor-text"
              placeholder="Email"
            />
          </div>
          <textarea
            type="text"
            className="w-full border px-5 py-2 text-lg rounded-md resize-none hover:cursor-pointer focus:cursor-text"
            placeholder="Message"
          />
          <button
            type="onSubmit"
            className="bg-white mt-5 py-2.5 px-5 border-2 text-indigo-500 border-indigo-500 text-sm transition rounded-md hover:bg-indigo-500 hover:text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
