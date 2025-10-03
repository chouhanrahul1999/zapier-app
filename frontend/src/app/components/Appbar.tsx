"use client";
import { useRouter } from "next/navigation";
import { LinkButton } from "./buttons/LinkButton";
import { Button } from "./buttons/Button";
import Image from "next/image";
import logo from "../../../public/zapier-2.svg"

export const Appbar = () => {
  const router = useRouter();

  return (
    <div className="flex border-b border-gray-300 justify-between py-3 px-8">
      <div className="flex justify-center items-center"><Image src={logo} alt="Zapier Logo" width={100} height={44} /></div>
      <div className="flex gap-1">
        <LinkButton
          childern="Contact Sale"
          onClick={() => router.push("/")}
        />
        <LinkButton
          childern="Sign in"
          onClick={() => router.push("/signin")}
        />
        <Button
          children="Sign up"
          size="small"
          type="primary"
          onClick={() => {
            router.push("/signup");
          }}
        />
      </div>
    </div>
  );
};
