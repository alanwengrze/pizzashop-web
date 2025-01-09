import { BrowserRouter } from "react-router";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes(){
  return(
    <BrowserRouter>
      <AppRoutes />
      <AuthRoutes />
    </BrowserRouter>
  )
}