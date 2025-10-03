"use client";
import axios from "axios";
import { useState } from "react";
import { Button } from "../components/buttons/Button";
import { CheckmarkFeatures } from "../components/Checkmark";
import { InputBox } from "../components/input/InputBox";
import { BACKEND_URL } from "../config";
import { useRouter } from "next/navigation";

export default function () {
  const router = useRouter();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex justify-between items-center p-16">
      <div className="max-w-lg flex flex-col justify-between p-4 gap-8">
        <div className="font-bold text-4xl pt-12 leading-14 ">
          AI Automation starts and scales with Zapier
        </div>
        <div className="font-medium text-md">
          Connect the apps you use every day to automate your work and be more
          productive.
        </div>
        <div className="flex-col flex gap-4">
          <CheckmarkFeatures label={"Easy setup, no coding"} />
          <CheckmarkFeatures
            label={"Build AI-powered workflows in minutes, not weeks"}
          />
          <CheckmarkFeatures
            label={"14-day trial of all premium features and apps"}
          />
        </div>
      </div>
      <div className="border border-gray-300 rounded-sm min-w-lg min-h-auto flex flex-col px-8 py-8 gap-4">
        <InputBox
          lable="Email"
          type="text"
          placeholder="rahul@gmail.com"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <InputBox
          lable="Password"
          type="password"
          placeholder="raman@123"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <InputBox
          lable="Full Name"
          type="text"
          placeholder="Jhon Doa"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <div className="pt-2">
          <span>By signing up, you agree to Zapier's </span>
          <a href="/terms" className="text-blue-600 hover:underline">
            terms of service
          </a>
          <span> and </span>
          <br />
          <a href="/privacy" className="text-blue-600 hover:underline">
            privacy policy
          </a>
          <span>.</span>
        </div>
        <Button
          children="Get started for free"
          size="large"
          type="primary"
          onClick={async () => {
            try {
              const res = await axios.post(
                `${BACKEND_URL}/api/v1/user/signup`,
                {
                  username,
                  password,
                  name,
                }
              );
              router.push("/signin");
            } catch (error) {
              console.error("Signup failed:", error);
            }
          }}
        />
        <div className="pt-2 flex justify-center items-center">
          <span>Already have an account? </span>
          <a href="/signin" className="pl-1 text-blue-600 hover:underline">
            Log in
          </a>
        </div>
      </div>
    </div>
  );
}
