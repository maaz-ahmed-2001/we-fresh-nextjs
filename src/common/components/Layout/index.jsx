import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const index = ({ children }) => {
  return (
    <div className="overflow-hidden relative w-screen h-full" >
      <Header />
      <main className="min-h-screen" >{children}</main>
      <Footer />
    </div>
  );
};

export default index;
