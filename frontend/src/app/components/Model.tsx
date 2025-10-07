import { Cross, X } from "lucide-react";

export const Modle = ({
  index,
  onSelect,
  availableItems,
}: {
  index: number;
  onSelect: (
    props: null | {
      name: string;
      id: string;
        image: string;
    }
  ) => void;
  availableItems: { id: string; name: string; image: string }[];
}) => {
  return (
    <div className="fixed flex top-0 right-0 left-0 justify-center items-center w-full z-50 h-full">
      <div
        className="absolute inset-0 bg-slate-100 opacity-75"
        onClick={() => onSelect(null)}
      ></div>
      <div className="relative p-4 w-full max-w-xl max-h-full z-10">
        <div className="relative bg-white rounded-lg shadow">
          <div className="">
            <div className="border-b border-gray-400 flex flex-row justify-between items-center p-4">
              <div className="text-md font-bold">
                {index === 1 ? "Trigger" : "Action"}
              </div>
              <button
                className="cursor-pointer hover:bg-gray-200 p-1 rounded-4xl"
                onClick={() => {
                  onSelect(null);
                }}
              >
                <X />
              </button>
            </div>
            <div className="p-4 ">
              {availableItems?.map(({ id, name, image }) => {

                return (
                  <div onClick={() => {
                    onSelect({ id, name, image });
                  }} key={id} className="flex border border-gray-300 p-2 gap-2 items-center m-4 cursor-pointer rounded-sm hover:bg-gray-100">
                    <img className="h-8 w-10 rounded-sm" src={image} width={30} alt={name} /> <div className="p-2 text-md font-medium">{name}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
