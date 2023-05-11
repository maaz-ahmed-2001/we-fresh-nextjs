import React from "react";
// Components
import Footer from "./Footer";
import Header from "./Header";
import { Prompt } from "next/font/google";

type LayotProps = {
  children: React.ReactNode
}

const index = ({ children }: LayotProps) => {
  return (
    <div className='overflow-hidden relative w-screen h-full' >
      <Header />
      <main className="min-h-screen" >{children}</main>
      <Footer />
    </div>
  );
};

export default index;
