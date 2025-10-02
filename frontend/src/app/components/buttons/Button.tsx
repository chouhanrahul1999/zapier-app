

import { ReactNode } from "react";


interface ButtonProps {
  childern: ReactNode;
  onClick: () => void;
  size: "small" | "medium" | "large";
  type: "primary" | "secondery";
}

export const Button = ({ childern, onClick, size, type }: ButtonProps) => {
  const sizeClass =
    size === "large" 
    ? "px-auto py-2 text-md font-medium rounded-md "
    : size === "medium"
      ? "px-14 py-2 text-md font-medium rounded-4xl " 
      : "px-4 py-2 text-md rounded-4xl";
  const typeClass =
    type === "primary"
      ? "bg-orange-600 text-white hover:shadow-md hover:bg-orange-700"
      : "bg-white text-gray-900 border border-gray-800";
  return (
    <div
      className={`items-center  flex cursor-pointer justify-center ${sizeClass} ${typeClass}`}
      onClick={onClick}
    >
      {childern}
    </div>
  );
};
