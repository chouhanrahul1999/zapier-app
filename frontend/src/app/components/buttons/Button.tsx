import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  size: "small" | "medium" | "large" | "normal";
  type: "primary" | "secondary" | "dark";
  icon?: ReactNode;
}

export const Button = ({
  children,
  onClick,
  size,
  type,
  icon,
}: ButtonProps) => {
  const sizeClass =
    size === "large"
      ? "px-auto py-2 text-md font-medium rounded-md "
      : size === "medium"
      ? "px-14 py-2 text-md font-medium rounded-4xl "
      : size === "normal"
      ? "px-4 py-2 text-md rounded-sm"
      : "px-4 py-2 text-md w-fit rounded-4xl";
  const typeClass =
    type === "primary"
      ? "bg-orange-600 text-white hover:shadow-md hover:bg-orange-700"
      : type === "dark"
      ? "bg-purple-700 text-white hover:shadow-md hover:bg-purple-800"
      : "bg-white text-gray-900 border border-gray-800";
  return (
    <div
      className={`items-center  inline-flex cursor-pointer justify-center gap-2 ${sizeClass} ${typeClass}`}
      onClick={onClick}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </div>
  );
};
