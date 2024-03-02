import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaTwitter, FaGithub, FaDiscord } from "react-icons/fa6";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="p-4 text-center justify-center text-textPurple bg-[#ecf0f3] border-t-4 border-textDark">
      <div className="container mx-auto px-8 md:px-2 py-8">
        <div className="flex flex-wrap">

        <div className="w-full md:w-1/4 md:text-start sm:text-center">
            <h5 className="uppercase mb-6  sm:text-2xl text-5xl text-textDark font-extrabold">Logo</h5>
            <ul className="mb-4">
              <li className="mt-2  mb-4 tracking-tight">
                
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Fugit, minus maiores? Ullam facere sit quasi nesciunt eum
                  omnis officia reprehenderit.
                
              </li>
              <li className="mt-2 mb-2 tracking-tight">
                
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus ullam quaerat expedita?
                
              </li>
            </ul>
          </div>
          
          <div className="w-full md:w-1/4 text-center">
            <h5 className="uppercase mb-6 font-bold">Links</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <Link
                  href="#"
                  className="hover:p-2 hover:border-none hover:bg-textPurple text-textPurple hover:text-white"
                >
                  Terms
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  href="#"
                  className="hover:p-2 hover:border-none hover:bg-textPurple text-textPurple hover:text-white"
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="w-full md:w-1/4 text-center">
            <h5 className="uppercase mb-6 font-bold">Social</h5>
            <div className="flex items-center justify-center gap-2 mx-auto py-0 mb-6">
              <div className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duartion-300">
                <FaLinkedinIn />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-110 ease-in duartion-300">
                <FaGithub />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-110 ease-in duartion-300">
                <AiOutlineMail />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-110 ease-in duartion-300">
                <BsFillPersonLinesFill />
              </div>
            </div>
            {/* <ul className="mb-4">
                            <li className="mt-2">
                                <Link href="#" className="hover:p-2 hover:border-none hover:bg-black text-textPurple hover:text-white">Facebook</Link>
                            </li>
                            <li className="mt-2">
                                <Link href="#" className="hover:p-2 hover:border-none hover:bg-black text-textPurple hover:text-white">Linkedin</Link>
                            </li>
                            <li className="mt-2">
                                <Link href="#" className="hover:p-2 hover:border-none hover:bg-black text-textPurple hover:text-white">Twitter</Link>
                            </li>
                        </ul> */}
          </div>
          <div className="w-full md:w-1/4 text-center">
            <h5 className="uppercase mb-6 font-bold">Company</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <Link
                  href="#"
                  className="hover:p-2 hover:border-none hover:bg-textPurple text-textPurple hover:text-white"
                >
                  Official Blog
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  href="#"
                  className="hover:p-2 hover:border-none hover:bg-textPurple text-textPurple hover:text-white"
                >
                  About Us
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  href="#"
                  className="hover:p-2 hover:border-none hover:bg-textPurple text-textPurple hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-sm p-2 mt-10">Copyright Company© 2023 </p>
      </div>
    </footer>
  );
};

export default Footer;
