import React from "react";
import Sidebar from "@/components/shared/Sidebar"
import Mobilenav from "@/components/shared/Mobilenav";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
     
      <main className="root">
                <Sidebar></Sidebar>
                <Mobilenav></Mobilenav>

        <div className="root-container">
          <div className="wrapper">
          {children}

          </div>
        </div>

         
      </main>
     
  );
};

export default layout;
