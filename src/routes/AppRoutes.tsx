import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginView } from "../views/login/LoginView";
import { RegisterView } from "../views/register/RegisterView";
import { DashBoardView } from "../views/dashboard/DashboardView";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginView />} />
        <Route path="/informations" element={<RegisterView />} />
        <Route path="/dashboard" element={<DashBoardView />} />
      </Routes>
    </BrowserRouter>
  );
}
