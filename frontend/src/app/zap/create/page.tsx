"use client";
import { ZapCreate } from "@/app/components/buttons/ZapCreate";
import { Zapcell } from "@/app/components/ZapCell";
import { Ellipsis } from "lucide-react";
import { useState } from "react";
import { BiSolidZap } from "react-icons/bi";

export default function () {
  const [selectedTrigger, setSelectedTrigger] = useState("");
  const [selectedActions, setSelectedActions] = useState<
    {
      availableActionId: string;
      availableActionName: string;
    }[]
  >([]);

  return (
    <div className=" flex bg-slate-50 justify-center">
      <div className=" h-screen flex-col items-center justify-center pt-12">
        <div className="max-w-sm ">
          <Zapcell
            name={selectedTrigger ? selectedTrigger : "Trigger"}
            icon={<BiSolidZap size={22} />}
            index={1}
            icon1={<Ellipsis size={24} />}
          />
        </div>
        <ZapCreate
          onClick={() => {
            setSelectedActions((a) => [
              ...a,
              {
                availableActionId: "",
                availableActionName: "",
              },
            ]);
          }}
        />
        <div>
          {selectedActions.map((action, index) => (
            <div key={index}>
              <Zapcell
                name={action.availableActionName || "Action"}
                icon={<BiSolidZap size={22} />}
                index={2 + index}
                icon1={<Ellipsis size={24} />}
              />
              <ZapCreate
                onClick={() => {
                  setSelectedActions((a) => [
                    ...a,
                    {
                      availableActionId: "",
                      availableActionName: "",
                    },
                  ]);
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <div>
        <div></div>
      </div>
    </div>
  );
}
