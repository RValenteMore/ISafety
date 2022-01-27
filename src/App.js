import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./frontEnd/Components/Dashboard/dashboard";
import Todas from "./frontEnd/Components/Dashboard/Outlets/todas"
import Continentes from "./frontEnd/Components/Dashboard/Outlets/continentes"
import BomDia from "./frontEnd/Components/Dashboard/Outlets/bomdia"
import Entrepostos from "./frontEnd/Components/Dashboard/Outlets/entrepostos"
import Historico from "./frontEnd/Components/Dashboard/Outlets/historico"
import Definicoes from "./frontEnd/Components/Dashboard/Outlets/definicoes"
import Login from "./frontEnd/Components/Login/login";

import Loja from "./frontEnd/Components/Dashboard/Outlets/loja";
import ExcelToJson from "./backEnd/components/ExcelToJSON";
import DashboardMockup from "./frontEnd/Components/Dashboard/dashboardMockup"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/dashboard/" element={<DashboardMockup />}>
          <Route path="/dashboard/" element={<Todas/>}/>
          <Route path="/dashboard/continentes" element={<Continentes/>}/>
          <Route path="/dashboard/bomdia" element={<BomDia/>}/>
          <Route path="/dashboard/entrepostos" element={<Entrepostos/>}/>
          <Route path="/dashboard/historico" element={<Historico/>}/>
          <Route path="/dashboard/definicoes" element={<Definicoes/>}/>
          <Route path="/dashboard/loja/:id" element={<Loja/>}/>
        </Route>
        <Route path="/antigo" element={<DashBoard />}/>
        <Route path="/ExelToJson" element={<ExcelToJson/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
