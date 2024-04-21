import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Screens/dashboard/DashBoard";
import ProtectedRoutes from "./Utils/ProtectedRoutes";

function App() {
  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
