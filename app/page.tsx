import Login from "@/components/login/Login";
import { AiOutlineMenu, AiOutlinePlus } from "react-icons/ai";
import {
  BsFillLightningChargeFill,
  BsStars,
  BsFillLockFill,
} from "react-icons/bs";
import { FaCircleInfo } from "react-icons/fa6";
import { BiSolidLockAlt } from "react-icons/bi";

export default function Home() {
  return (
    <div className="min-h-screen">
      <nav className="p-2 flex justify-between items-center border-b-[1px] md:hidden">
        <AiOutlineMenu size={20} />
        <div>New Chat</div>
        <AiOutlinePlus size={24} className="" />
      </nav>
      <div className="mt-3 p-1 flex bg-[#202123] w-full rounded-lg">
        <div className="flex items-center justify-center gap-x-1 bg-[#40414f] w-1/2 py-3 rounded-lg">
          <BsFillLightningChargeFill color="green" />
          <div className="text-sm">GPT-3.5</div>
          <FaCircleInfo color="gray" />
        </div>
        <div className="flex items-center justify-center gap-x-1  w-1/2 py-3 rounded-lg">
          <BsStars className="text-[#8e8ea0] hover:text-[#9a5fe5]" />
          <div className="text-sm text-[#8e8ea0] hover:text-white">GPT-4</div>
          <BiSolidLockAlt color="gray" />
        </div>
      </div>
      <div className="">
        <div className="grid grid-cols-1 gap-y-2 ">
          <div className="border border-[#414250] rounded-lg p-2">
            <div>
              <h2 className="text-xs font-semibold text-[#c5c5d2]">
                Recommend a dish
              </h2>
              <p className="text-xs text-[#c5c5d2] opacity-50 truncate">
                to impress a date who&apos;s a picky eater
              </p>
            </div>
            <div></div>
          </div>
          <div className="border border-[#414250] rounded-lg p-2">
            <div>
              <h2 className="text-xs font-semibold text-[#c5c5d2]">
                Make a content strategy
              </h2>
              <p className="text-xs text-[#c5c5d2] opacity-50 truncate">
                for a newsletter featuring free local weekend events
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
