"use client";

import React from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Navbar } from "flowbite-react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { motion } from "framer-motion";

const Components = () => {
  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100,
  };
  return (
    <div>
      <Navbar fluid rounded className="pb-6  bg-[#036148] ">
        <Navbar.Brand>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            id="logo"
            className="ml-4 mr-2 text-white text-2xl"
          >
            <path d="M.7 17.1c-.1 0-.2 0-.2-.1-.2-.1-.2-.3-.2-.4V7.4c0-.2.1-.3.2-.4.2-.1.3-.1.5 0l8 4.6c.2.1.2.3.2.4s0 .3-.2.4L1 17c-.1.1-.2.1-.3.1zm.5-8.9v7.6L7.8 12 1.2 8.2z"></path>
            <path d="M13.2 18.7c-3.3 0-6.1-2.4-6.6-5.6 0-.2.1-.4.2-.5l1-.6-.9-.5c-.2-.1-.3-.3-.2-.5.5-3.2 3.3-5.7 6.6-5.7 3.7 0 6.7 3 6.7 6.7-.1 3.7-3.1 6.7-6.8 6.7zm-5.5-5.5c.6 2.6 2.8 4.5 5.5 4.5 3.1 0 5.7-2.6 5.7-5.7s-2.6-5.7-5.7-5.7c-2.7 0-5 1.9-5.5 4.5l1.3.8c.2.1.3.3.3.4 0 .2-.1.3-.2.4l-1.4.8z"></path>
            <path d="M13.2 22.6c-4.6 0-8.7-3.1-10.1-7.4-.1-.2 0-.5.2-.6L7.8 12 3.3 9.4c-.2-.1-.2-.3-.2-.5 1.4-4.5 5.4-7.4 10.1-7.4C19 1.4 23.8 6.2 23.8 12S19 22.6 13.2 22.6zm-9-7.4c1.3 3.8 5 6.4 9 6.4 5.3 0 9.6-4.3 9.6-9.6s-4.3-9.6-9.6-9.6c-4.1 0-7.7 2.5-9 6.4L9 11.6c.2.1.2.3.2.4 0 .2-.1.3-.2.4l-4.8 2.8z"></path>
          </svg>
          <motion.span
            className="self-center  font-semibold dark:text-white text-cyan-50  text-4xl cursor-pointer"
            animate={{
              y: [-20, 0],
              opacity: [0, 1],
              type: "spring",
              scale: 1,
            }}
          >
            DETOX.
          </motion.span>
        </Navbar.Brand>
        <div className="flex md:order-2 md:w-fit md:h-fit ">
          <Button className="m-4  md:pl-8  md:pr-8 md:pt-4 md:pb-4 bg-transparent border-2 border-gray-50  invisible md:visible">
            <motion.p
              className="text-[16px] md:pl-4 mx-4 md:pr-4 "
              transition={spring}
              animate={{ scale: 1.2, type: "spring" }}
            >
              Get started
              <motion.span></motion.span>
            </motion.p>
          </Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link active href="#" className=" ">
            <p className="p-4 text-lg text-white">Product</p>
          </Navbar.Link>
          <Navbar.Link href="#" className="">
            <p className="p-4 text-lg text-white">Resources</p>
          </Navbar.Link>
          <Navbar.Link href="#" className="">
            <p className="p-4 text-lg text-white">Pricing</p>
          </Navbar.Link>
          <Navbar.Link href="#" className="p-4">
            <p className="p-4 text-lg text-white">About Us </p>
          </Navbar.Link>
          <Navbar.Link href="#" className="p-4">
            <p className="p-4 text-lg text-white">Blog</p>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Components;
