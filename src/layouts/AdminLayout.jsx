import React from "react";
import { Outlet } from "react-router-dom";
import { block } from "million/react";

const AdminLayout = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};

const AdminLayoutBlock = block(AdminLayout);

export default AdminLayoutBlock;
