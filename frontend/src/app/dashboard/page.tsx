"use client"
import { Plus } from "lucide-react";
import { Button } from "../components/buttons/Button";


export default function() {
    return (
        <div>
            Dashboard Page
            <Button size="normal" type="dark" children={"Create"} onClick={() => {

            }}
            icon={<Plus size={20} />} />
        </div>
    )
}