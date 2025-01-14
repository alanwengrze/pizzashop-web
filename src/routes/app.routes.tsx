import { Dashboard } from "@/pages/app/dashboard";
import { Route, Routes } from "react-router";
import { AppLayout } from "@/pages/_layouts/app";
import { Orders } from "@/pages/app/orders/orders";

export function AppRoutes(){
  return(
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
      </Route>
    </Routes>
  )
}