import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const LandingPage = () => {
  return (
    <>
      <div className="text-6xl text-blue-500">hello motherfucker</div>
      <Link href="/sign-in">
        
        <Button>sign-in</Button>
      </Link>
      <Link href="/sign-up">
        
        <Button>sign-up</Button>
      </Link>
    </>
  );
};

export default LandingPage;
