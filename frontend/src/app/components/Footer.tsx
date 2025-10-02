import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { SiYoutubemusic } from "react-icons/si";
import Image from "next/image";
import logo from "../../../public/zapier-2.svg";

export const Footer = () => {
  return (
    <div className="px-20 py-16 ">
      <div className="flex justify-between ">
        <div className="flex items-center gap-2 text-gray-500">
          <div>Follow us</div>
          <div className="flex gap-2">
            <span>
              <FaFacebook size={28} />
            </span>
            <span>
              <FaGithub size={28} />
            </span>
            <span>
              <AiFillTwitterCircle size={28} />
            </span>
            <span>
              <SiYoutubemusic size={28} />
            </span>
          </div>
        </div>
        <div className="gap-8 flex">
          <span>Pricing</span>
          <span>Help</span>
          <span>Developer</span>
          <span>Jobs</span>
          <span>Partners Program</span>
        </div>
      </div>
      <div className="flex justify-between pt-10">
        <div className="flex justify-center items-center">
          <Image src={logo} alt="Zapier Logo" width={100} height={44} />
        </div>
        <div className="flex gap-4 text-gray-500">
          <span>© 2025 Zapier Inc.</span>
          <span>Manage cookies</span>
          <span>Legal</span>
          <span>Privacy</span>
        </div>
      </div>
    </div>
  );
};
