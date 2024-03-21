import Header from "@/components/shared/header/Header";
import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex gap-2 max-w-7xl mx-auto py-2">
      <Navbar />
      <div className="w-full">
        <Header />
        {children}
      </div>
    </main>
  );
};

export default layout;
