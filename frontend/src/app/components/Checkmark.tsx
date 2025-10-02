import { CheckCheck, CheckCircle, CircleCheckIcon } from "lucide-react";

export const CheckmarkFeatures = ({ label }: { label: string }) => {
 return <div className="flex gap-1 items-center">
    <div className="">
      <Checkmark />
    </div>
    {label}
  </div>;
};

const Checkmark = () => {
  return (
    <div>
      <CircleCheckIcon size={20} color="green" />
    </div>
  );
};
