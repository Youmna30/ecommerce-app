import React from "react";
import SignUpWelcome from "../../_components/SignUp/SignUpWelcome";
import SignupForm from "@/app/_components/SignUp/SignupForm";

const page = () => {
  return (
    <div className="container mx-auto max-w-7xl p-4 my-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <SignUpWelcome />
        <SignupForm />
      </div>
    </div>
  );
};

export default page;
