import { ReactNode } from "react";

export const LinkButton = ({
  childern,
  onClick,
}: {
  childern: ReactNode;
  onClick: () => void;
}) => {
  return (
    <div
      className="px-4 text-gray-900 py-1 hover:bg-gray-100 cursor-pointer font-normal text-base flex justify-center items-center"
      onClick={onClick}
    >
      {childern}
    </div>
  );
};
