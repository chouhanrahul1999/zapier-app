"use client";
import { Plus } from "lucide-react";
import { Button } from "../components/buttons/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { LinkButton } from "../components/buttons/LinkButton";
import Router, { useRouter } from "next/navigation";

interface Zap {
  id: string;
  triggerId: string;
  userId: number;
  actions: {
    id: string;
    zapId: string;
    actionId: string;
    sortingOrder: number;
    type: {
      id: string;
      name: string;
    };
  }[];
  trigger: {
    id: string;
    zapId: string;
    triggerid: string;
    type: {
      id: string;
      name: string;
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
        <div className="">Last Edit</div>
        <div className="">Running</div>
        <div className="pr-4">Go</div>
      </div>
      {zaps.map(z => (
        <div key={z.id} className="flex justify-between items-center border-b border-gray-300 py-4">
          <div className="">
            {z.trigger?.type?.name || "No trigger"} {" "}
            {z.actions?.map((x, index) => (
              <span key={x.id || index}>{x.type?.name || "Unknown"} </span>
            )) || " "}
          </div>
          <div className="">{z.id}</div>
          <div className="pr-20">Nov 13 2023</div>
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