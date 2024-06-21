import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layouts/Layout";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import ManagerPage from "./pages/ManagerPage";
import RequireLogin from "./components/RequireLogin";
import RegistrationPage from "./pages/RegistrationPage";
import UnauthorizedPage from "./pages/UnauthorizedPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public pages */}
        <Route path="/" element={<LoginPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegistrationPage />} />
        <Route path="unauthorized" element={<UnauthorizedPage />} />

        {/* managert pages */}
        <Route element={<RequireLogin allowedGroups={["manager"]} />}>
          <Route path="manager" element={<ManagerPage />} />
        </Route>

        {/* Invalid path */}
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
