import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./frontEnd/Components/Dashboard/dashboard";
import Loja from "./frontEnd/Components/Loja/loja";
import ExcelToJson from "./backEnd/components/ExcelToJSON";
import DashboardMockup from "./frontEnd/Components/Dashboard/dashboardMockup"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashBoard />}/>
        <Route path="/mockup" element={<DashboardMockup/>}/>
        <Route path="/loja/:id" element={<Loja />}/>
        <Route path="/ExelToJson" element={<ExcelToJson/>}/>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
