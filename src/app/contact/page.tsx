import { Meteors } from "@/components/ui/meteors";

export default function Contact() {
  return (
    <>
      <div className="pt-36 bg-gray-800 text-white flex flex-col justify-center h-screen items-center">
        <h1 className=" text-xl md:text-6xl font-sans font-bold">Contact Us</h1>
        <p className="text-center pt-6 font-semibold text-xl px-28 py-10">
          We are here to help with any questions about our courses, programs, or
          events. Reach out and let us know how we can assist you in your
          musical journey.
        </p>
        <input
          name="email"
          placeholder="Enter your email..."
          className="bg-gray-900 rounded-lg p-5 text-center w-auto mb-4 "
        />
        <textarea
          placeholder="Enter the text..."
          className="bg-gray-900 rounded-lg w-80 text-center pt-3 mb-4 "
        />
        <button className="p-3 w-40 bg-blue-500 rounded-lg hover:bg-blue-900">
          Submit
        </button>
        <Meteors number={50} />
      </div>
    </>
  );
}
