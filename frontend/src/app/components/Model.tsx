import { X } from "lucide-react";
import { useState } from "react";
import { metadata } from "../layout";
import { InputBox } from "./input/InputBox";
import { Button } from "./buttons/Button";

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
      image?: string;
      metadata: any;
    }
  ) => void;
  availableItems: { id: string; name: string; image: string }[];
}) => {
  const [step, setStep] = useState(0);
  const [selectedAction, setSelectedAction] = useState<{
    id: string;
    name: string;
    image: string;
  }>();
  const isTrigger = index === 1;
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
              {step === 1 && selectedAction?.id === "email" && (
                <EmailSelector
                  setMetadata={(metadata) => {
                    onSelect({
                      ...selectedAction,
                      metadata,
                    });
                  }}
                />
              )}

              {step === 1 && selectedAction?.id === "send-sol" && (
                <SolanaSelector
                  setMetadata={(metadata) => {
                    onSelect({
                      ...selectedAction,
                      metadata,
                    });
                  }}
                />
              )}

              {step === 0 && <div>
                 {availableItems?.map(({ id, name, image }) => {
                return (
                  <div
                    onClick={() => {
                      if (isTrigger) {
                        onSelect({ id, name, image, metadata: {} });
                      } else {
                        setStep(s => s + 1);
                        setSelectedAction({
                          id,
                          name,
                          image
                        });
                      }
                      
                    }}
                    key={id}
                    className="flex border border-gray-300 p-2 gap-2 items-center m-4 cursor-pointer rounded-sm hover:bg-gray-100"
                  >
                    <img
                      className="h-8 w-10 rounded-sm"
                      src={image}
                      width={30}
                      alt={name}
                    />{" "}
                    <div className="p-2 text-md font-medium">{name}</div>
                  </div>
                );
              })}</div>}
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const EmailSelector = ({
  setMetadata,
}: {
  setMetadata: (params: any) => void;
}) => {
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");

  return (
    <div className="pt-2">
      <InputBox
        lable="To"
        type="text"
        placeholder="To"
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputBox
        lable="Body"
        type="text"
        placeholder="Body"
        onChange={(e) => setBody(e.target.value)}
      />
      <div>
        <Button
          type="primary"
          size="small"
          children="Submit"
          onClick={() => {
            setMetadata({ email, body });
          }}
        />
      </div>
    </div>
  );
};

const SolanaSelector = ({
  setMetadata,
}: {
  setMetadata: (params: any) => void;
}) => {
  const [amount, setAmount] = useState("");
  const [address, setAddress] = useState("");

  return (
    <div className="pt-2">
      <InputBox
        lable="To"
        type="text"
        placeholder="To"
        onChange={(e) => setAmount(e.target.value)}
      />
      <InputBox
        lable="Body"
        type="text"
        placeholder="Body"
        onChange={(e) => setAddress(e.target.value)}
      />
      <div>
        <Button
          type="primary"
          size="small"
          children="Submit"
          onClick={() => {
            setMetadata({ amount, address });
          }}
        />
      </div>
    </div>
  );
};
