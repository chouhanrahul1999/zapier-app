export const InputBox = ({
    type,
  lable,
  placeholder,
  onChange,
}: {
  lable: string;
  placeholder: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) => {
  return <div className="flex-col flex">
    <label className="text-md font-medium pl-0.5">* {lable}</label>
    <input type={type} placeholder={placeholder} onChange={onChange} className="border border-gray-500 rounded-sm py-2 px-3 mt-1 "/>
  </div>;
};
