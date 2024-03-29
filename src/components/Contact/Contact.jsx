import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { MdMail, MdMailOutline } from "react-icons/md";
import { useContact } from "./useContact";

export const Contact = () => {
  useContact();
  return (
    <section
      id="contact-in-view"
      className="h-screen w-screen flex justify-center items-center absolute top-400 p-4"
    >
      <div
        id="contact-form-cont"
        className="relative contact-form-cont flex flex-col justify-center items-center border border-white rounded-md py-4 md:px-40 px-6 h-auto w-full max-w-5xl"
      >
        <h2 className=" text-white text-3xl">Contact</h2>
        <form
          action="https://formsubmit.co/nikdanelia@gmail.com"
          method="POST"
          className="flex flex-col gap-5 w-full"
        >
          <div className="flex flex-col gap-1">
            <label className="text-white">Email</label>
            <input
              name="email"
              type="text"
              required
              placeholder="kitty@meow.com"
              className="bg-transparent border rounded-md px-2 py-2 text-white"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-white">Name</label>
            <input
              name="name"
              type="text"
              required
              placeholder="Megatron"
              className="bg-transparent border rounded-md px-2 py-2 text-white"
            />
          </div>
          <div>
            <label className="text-white">Text</label>
            <textarea
              name="text"
              required
              placeholder="Here is our message..."
              className="w-full mt-1 bg-transparent border rounded-md text-white p-2 min-h-24"
            ></textarea>
          </div>
          <input type="hidden" name="_captcha" value="false" />

          <button
            type="submit"
            className="p-2 w-full hover:bg-white hover:text-black transition-all text-white bg-transparent border rounded-md text-xl"
          >
            Send
          </button>
        </form>
        <div className="flex items-center w-full justify-around mt-4">
          <a
            href="https://www.linkedin.com/in/nickdanelia/"
            className="hover:text-orange-300 transition-all text-white"
            target="blank"
          >
            <CiLinkedin className=" w-8 h-8" />
          </a>
          <a
            href="https://github.com/Badonix"
            className="hover:text-orange-300 transition-all text-white"
            target="blank"
          >
            <FaGithub className=" w-8 h-8" />
          </a>
          <a
            href="https://www.instagram.com/nickdanee/"
            className="hover:text-orange-300 transition-all text-white"
            target="blank"
          >
            <FaInstagram className=" w-8 h-8" />
          </a>
        </div>
        <div className="mt-5 w-full flex items-center gap-3">
          <MdMailOutline className="text-white w-8 h-8" />
          <p className="italic text-gray-300">nikdanelia@gmail.com</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
