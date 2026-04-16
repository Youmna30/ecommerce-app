import LoginForm from "@/app/_components/Login/LoginForm";
import LoginWelcom from "@/app/_components/Login/LoginWelcom";
import React from "react";

const page = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <LoginWelcom />
        <LoginForm />
      </div>
    </div>
  );
};

export default page;
