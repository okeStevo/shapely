"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [forms, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setForm({
      ...forms,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    // emailjs
    //   .sendForm('service_8fuih9t', 'template_j87woe5', form.current, {
    //     publicKey: 'AcloH00nnjbGwP7uO',
    //   })
    //   .then(
    //     () => {
    //       setLoading(false);
    //       alert("Thank you. I will get back to you as soon as possible.");

    //       setForm({
    //         name: "",
    //         email: "",
    //         message: "",
    //       });
    //     },
    //     (error) => {
    //       setLoading(false);
    //       console.error(error);
    //       alert("Ahh, something went wrong. Please try again.");
    //       return
    //     }
    //   );
  };

  return (
    <div id="#contact"
      className={`xl:mt-12 flex xl:flex-col w-[100%] lg:w-[40%] mx-auto m-0.5 flex-col gap-10 overflow-hidden`}
    >
      <p className="font-bold text-center text-3xl">Get in touch with us</p>
      <motion.div className="flex-[0.75] bg-black p-8 rounded-2xl">
        <form
          //   ref={form}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={forms.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={forms.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={forms.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"></motion.div>
    </div>
  );
};
export default Contact;
