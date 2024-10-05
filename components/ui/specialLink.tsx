"use client"
import Link from "next/link";

const SpecialLink = () => {
 
  return (
    <Link
      href="#contact"
      onClick={() => {
        console.log(scrollY)
        return window.scrollTo(0, 3468);
      }}
    >
      <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
        <span>contact</span>
        <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
      </button>
    </Link>
  );
};
export default SpecialLink;
