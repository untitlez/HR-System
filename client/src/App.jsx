import { HashRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages";
import AdminHome from "./pages/admin";
import EmployeePage from "./pages/employee";

export default function App() {
  return (
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminHome />} />
          <Route path="/employee" element={<EmployeePage />} />
        </Routes>
      </HashRouter>
  );
}
