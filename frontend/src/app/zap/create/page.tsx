"use client";
import { Button } from "@/app/components/buttons/Button";
import { ZapCreate } from "@/app/components/buttons/ZapCreate";
import { Modle } from "@/app/components/Model";
import { Zapcell } from "@/app/components/ZapCell";
import { BACKEND_URL } from "@/app/config";
import { useAvailableActionsTriggers } from "@/app/hooks";
import axios from "axios";
import { Ellipsis } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiSolidZap } from "react-icons/bi";

export default function () {

  const router = useRouter();
  const { availableActions, availableTriggers } = useAvailableActionsTriggers();
  const [selectedTrigger, setSelectedTrigger] = useState<{
    id: string;
    name: string;
    image: string;
  }>();
  const [modal, setModal] = useState<null | number>(null);
  const [selectedActions, setSelectedActions] = useState<
    {
      index: number;
      availableActionId: string;
      availableActionName: string;
      availableActionImage: string;
    }[]
  >([]);

  return (
    <div className="w-full justify-center flex flex-col ">
      <div className="absolute right-8 top-20 ">
        <Button
          children="Publish"
          type="dark"
          size="normal"
          onClick={async () => {
            if (!selectedTrigger?.id) {
              return;
            }
            try {
              console.log("Selected trigger:", selectedTrigger);
              console.log("Selected actions:", selectedActions);
              console.log("Available actions from API:", availableActions);
              const response = await axios.post(`${BACKEND_URL}/api/v1/zap`, {
                "availableTriggerId": selectedTrigger.id,
                "triggerMetadata": {},
                "actions": selectedActions
                  .filter(a => a.availableActionId)
                  .map(a => {
                    console.log("Mapping action:", a.availableActionId);
                    return {
                      AvailableActionId: a.availableActionId,
                      actionMetadata: {}
                    };
                  })
              }, {
                headers: {
                  Authorization: localStorage.getItem("token"),
                  "Content-Type": "application/json"
                }
              });
              console.log("Response:", response.data);
              router.push("/dashboard");
            } catch (error: any) {
              console.error("Failed to create zap:", error);
              console.error("Error response:", error.response?.data);
              alert("Failed to create zap. Check console for details.");
            }
          }}
        />
      </div>

      <div className=" flex bg-slate-50 justify-center">
        <div className=" h-screen flex-col items-center justify-center pt-12">
          <div className="max-w-sm ">
            <Zapcell
              name={selectedTrigger?.name ? selectedTrigger.name : "Trigger"}
              icon={
                selectedTrigger?.image ? (
                  <img
                    className="w-8 h-8 object-cover rounded"
                    src={selectedTrigger.image}
                    alt={selectedTrigger.name}
                  />
                ) : (
                  <BiSolidZap size={22} />
                )
              }
              index={1}
              icon1={<Ellipsis size={24} />}
              onClick={() => {
                // open modal
                setModal(1);
              }}
            />
          </div>
          <ZapCreate
            onClick={() => {
              setSelectedActions((a) => [
                ...a,
                {
                  index: a.length + 2,
                  availableActionId: "",
                  availableActionName: "",
                  availableActionImage: "",
                },
              ]);
            }}
          />
          <div>
            {selectedActions.map((action, index) => (
              <div key={index}>
                <Zapcell
                  name={action.availableActionName || "Action"}
                  icon={
                    action.availableActionImage ? (
                      <img
                        className="w-8 h-8 object-cover rounded"
                        src={action.availableActionImage}
                        alt={action.availableActionName}
                      />
                    ) : (
                      <BiSolidZap size={22} />
                    )
                  }
                  index={2 + index}
                  icon1={<Ellipsis size={24} />}
                  onClick={() => {
                    setModal(action.index);
                  }}
                />
                <ZapCreate
                  onClick={() => {
                    setSelectedActions((a) => [
                      ...a,
                      {
                        index: a.length + 2,
                        availableActionId: "",
                        availableActionName: "",
                        availableActionImage: "",
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
        {modal && (
          <Modle
            availableItems={modal === 1 ? availableTriggers : availableActions}
            index={modal}
            onSelect={(
              props: null | {
                name: string;
                id: string;
                image: string;
              }
            ) => {
              if (props === null) {
                setModal(null);
                return;
              }

              if (modal === 1) {
                setSelectedTrigger({
                  id: props.id,
                  name: props.name,
                  image: props.image,
                });
              } else {
                setSelectedActions((a) => {
                  let newActions = [...a];
                  newActions[modal - 2] = {
                    index: modal,
                    availableActionId: props.id,
                    availableActionName: props.name,
                    availableActionImage: props.image,
                  };
                  return newActions;
                });
              }

              setModal(null);
            }}
          />
        )}
      </div>
    </div>
  );
}
