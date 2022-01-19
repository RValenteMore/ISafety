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

import Loja from "./frontEnd/Components/Loja/loja";
import ExcelToJson from "./backEnd/components/ExcelToJSON";
import DashboardMockup from "./frontEnd/Components/Dashboard/dashboardMockup"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardMockup />}>
          <Route path="/" element={<Todas/>}/>
          <Route path="/continentes" element={<Continentes/>}/>
          <Route path="/bomdia" element={<BomDia/>}/>
          <Route path="/entrepostos" element={<Entrepostos/>}/>
          <Route path="/historico" element={<Historico/>}/>
          <Route path="/definicoes" element={<Definicoes/>}/>
        </Route>
        <Route path="/antigo" element={<DashBoard />}/>
        <Route path="/loja/:id" element={<Loja />}/>
        <Route path="/ExelToJson" element={<ExcelToJson/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
