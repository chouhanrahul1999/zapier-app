"use client";
import { Plus } from "lucide-react";
import { Button } from "../components/buttons/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL, HOOKS_URL } from "../config";
import { LinkButton } from "../components/buttons/LinkButton";
import  { useRouter } from "next/navigation";

interface Zap {
  id: string;
  triggerId: string;
  userId: number;
  action: {
    id: string;
    zapId: string;
    actionId: string;
    sortingId: number;
    type?: {
      id: string;
      name: string;
      image: string;
    };
  }[];
  trigger: {
    id: string;
    zapId: string;
    triggerid: string;
    type: {
      id: string;
      name: string;
      image: string
    };
  };
}



const useZaps = () => {
  const [loading, setLoading] = useState(true);
  const [zaps, setZaps] = useState<Zap[]>([]);
  

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/zap`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log("Full response:", res.data);
        console.log("Zaps:", res.data.zaps);
        if (res.data.zaps && res.data.zaps.length > 0) {
          console.log("First zap actions:", res.data.zaps[0].action);
        }
        setZaps(res.data.zaps || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching zaps:", error);
        setLoading(false);
      });
  }, []);

  return {
    loading,
    zaps,
  };
};

export default function () {
  const { loading, zaps } = useZaps();
  const router = useRouter();
  
  return (
    <div className="flex flex-col justify-center p-8">
      <div className="flex justify-between">
        <div className="flex justify-center pr-8">
          <div className="text-2xl font-bold"> My Zaps</div>
        </div>
        <Button
          size="normal"
          type="dark"
          children={"Create"}
          onClick={() => {
            router.push("/zap/create");
          }}
          icon={<Plus size={20} />}
        /> 
      </div>
      {loading ? "loading..." : <ZapTable zaps={zaps} />}
    </div>
  );
}

const ZapTable = ({ zaps }: { zaps: Zap[] }) => {
    const router = useRouter();
  return (
    <div>
      <div className="flex justify-between border-gray-300 font-semibold text-sm py-4 border-b ">
        <div className="">Name</div>
        <div className="">Id</div>
        <div className="">Created at</div>
        <div className="">Webhook URL</div>
        <div className="pr-4">Go</div>
      </div>
      {zaps.map(z => (
        <div key={z.id} className="flex justify-between items-center border-b border-gray-300 py-4">
          <div className="flex gap-2 items-center">
            {z.trigger?.type?.image ? (
              <img src={z.trigger.type.image} alt={z.trigger.type.name} className="w-8 h-8 object-cover rounded" />
            ) : (
              <span>No trigger</span>
            )}
            {z.action?.map((x, index) => (
              x.type?.image ? (
                <img key={x.id || index} src={x.type.image} alt={x.type.name} className="w-8 h-8 object-cover rounded " />
              ) : (
                <span key={x.id || index}>{x.actionId}</span>
              )
            ))}
          </div>
          <div className="">{z.id}</div>
          <div className="pr-20">Nov 13 2023</div>
          <div className="pr-20">{`${HOOKS_URL}/hooks/catch/${z.id}`}</div>
          <div className="">
            <LinkButton childern="Go" onClick={() => {
                 router.push("/zap/" + z.id)
            }}/>
          </div>
        </div>
      ))}
    </div>
  );
};