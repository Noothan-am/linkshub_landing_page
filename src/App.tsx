import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import DarkModeWeb from "./pages/DarkModeWeb";
import { useEffect } from "react";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DarkModeWeb />} />
    </Routes>
  );
}
export default App;
