import { Plus } from "lucide-react";
import { HiOutlineArrowLongDown } from "react-icons/hi2";
import { PiLineVerticalThin } from "react-icons/pi";

export const ZapCreate = ({onClick}: {
    onClick: () => void
}) => {
  return (
    <div className="flex justify-center items-center pt-2">
      <div className="flex-col items-center gap-2 text-gray-600">
        <div className="">
          <PiLineVerticalThin size={24} strokeWidth={0.5} />
        </div>
        <div className="hover:bg-gray-200 cursor-pointer" onClick={onClick}>
          <Plus size={24} strokeWidth={2.5} />
        </div>
        <div className="">
          <HiOutlineArrowLongDown size={24} strokeWidth={0.8}/>
        </div>
      </div>
    </div>
  );
};
