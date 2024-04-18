import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Login, AdminDashboard, City, Chart } from "@/pages";
import { RootLayout, NotFound, MainLayout, AdminLayout } from "@/layouts";
import { MobileChecker } from "@/components";
import { useMediaQuery } from "react-responsive";

const MOBILE_BREAKPOINT = 1023;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      {/* Public Routes */}

      <Route element={<MainLayout />}>
        <Route index element={<Login />} />
      </Route>

      {/* Private Routes */}
      <Route path="admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="city" element={<City />} />
        <Route path="chart" element={<Chart />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default function App() {
  const isMobile = useMediaQuery({ maxWidth: MOBILE_BREAKPOINT });
  return (
    <>
      {isMobile ? (
        <MobileChecker />
      ) : (
        <>
          <RouterProvider router={router} />
        </>
      )}
    </>
  );
}
