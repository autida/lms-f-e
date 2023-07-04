import "./App.css";
import Layout from "./components/Layout";
import AuthLayout from "./components/dashboard/AuthLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      {/* public routes */}

      {/* protected routes */}
      <Route path="/dashboard" replace element={<AuthLayout />} />
      {/* catch all */}
    </Routes>
  );
}

export default App;
