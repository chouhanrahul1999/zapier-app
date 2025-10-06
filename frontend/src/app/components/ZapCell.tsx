import { ReactNode } from "react";

interface ZapCell {
  name: string;
  index: number;
  icon: ReactNode;  
  icon1: ReactNode;  

}

export const Zapcell = ({ name, index, icon, icon1 }: ZapCell) => {
  return (
    <div>
      <div className="border bg-white border-gray-300 w-sm rounded-sm p-2 flex gap-3 font-bold text-lg  items-center">
        {icon && <span className=" border text-gray-900 border-gray-300  p-2 rounded-sm">{icon}</span>}
        {index}.
        {name && <span className="flex-shrink-0 pr-12">{name}</span>}
        {icon1 && <span className=" cursor-pointer text-gray-800 pl-34 rounded-sm ">{icon1}</span>}
      </div>
    </div>
  );
};
