import * as React from "react";
import Card from "@mui/material/Card";
import Button from "./Button";
import Input from "./Input";
export default function Login() {
  return (
    <Card className="absolute flex flex-col gap-[10px] rounded-[20px] py-[15px] w-[20%] bg-[#1E1F24] border-[1px] top-[40%] left-[40%] items-center login-card">
      <div className="flex flex-col relative gap-[20px] items-center ">
        <h1 className="text-[#FFFFFF]">LOGIN</h1>
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
      </div>
      <Button title="Submit" />
    </Card>
  );
}
