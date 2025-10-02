"use client";

import { Shield } from "lucide";
import { Button } from "./buttons/Button";
import { Eye, List, ShieldCheck } from "lucide-react";

export const Hero = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center ">
        <div className="text-5xl font-bold text-center pt-10 max-w-xl leading-12">
          Automate as fast as you can type.
        </div>
        <div className="text-xl font-medium text-center pt-4 max-w-3xl leading-7">
          AI gives you automation superpower, and Zapier puts them to work.
          Paring AI and Zapier helps you turn ideas into workflows and bots that
          work for you.
        </div>
        <div className="flex gap-4 pt-8">
          <Button
            size="medium"
            childern="Get started free"
            type="primary"
            onClick={() => {}}
          />
          <Button
            size="medium"
            childern="Contact Sale"
            type="secondery"
            onClick={() => {}}
          />
        </div>
        <div className="flex gap-8 pt-8 text-gray-500 text-sm font-medium">
            <div className="flex gap-1 px-4 bg-gray-100 py-1.5 border border-gray-300 rounded-sm">
                <span><ShieldCheck size={18} /></span>
                <span>Secure</span>
            </div>
            <div className="flex gap-1 px-4 bg-gray-100 py-1.5 border border-gray-300 rounded-sm">
                <span><Eye size={18}/></span>
                <span>Observable</span>
            </div>
            <div className="flex gap-1 px-4 bg-gray-100 py-1.5 border border-gray-300 rounded-sm">
                <span><List size={18}/></span>
                <span>Compliant</span>
            </div>
          
        </div>
      </div>
    </div>
  );
};
