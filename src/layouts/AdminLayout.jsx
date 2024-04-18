import React from "react";
import { Sidebar } from "@/components";
import { Outlet } from "react-router-dom";
import { block } from "million/react";

const AdminLayout = () => {
  return (
    <>
      <main>
        <div className="z-[1000] fixed top-0">
          <Sidebar />
        </div>
        <div>
          <Outlet />
        </div>
      </main>
    </>
  );
};

const AdminLayoutBlock = block(AdminLayout);

export default AdminLayoutBlock;
