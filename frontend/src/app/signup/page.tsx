"use client";
import { Button } from "../components/buttons/Button";
import { CheckmarkFeatures } from "../components/Checkmark";
import { InputBox } from "../components/input/InputBox";

export default function () {
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
      <div className="border border-gray-300 rounded-sm min-w-lg min-h-auto flex flex-col px-6 py-8 gap-4">
        <InputBox lable="Email" type="text" placeholder="rahul@gmail.com" />
        <InputBox
          lable="Password"
          type="password"
          placeholder="raman@123"
        />
        <InputBox lable="Full Name" type="text" placeholder="Jhon Doa" />
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
          childern="Get started for free"
          size="large"
          type="primary"
          onClick={() => {}}
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
