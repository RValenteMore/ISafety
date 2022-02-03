import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import HamburgerMenu from "./frontEnd/Components/Dashboard/Hamburger Mneu/HamburgerMenu";
import AddUser from "./frontEnd/Components/Dashboard/Outlets/adduser";

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
          <Route path="/dashboard/definicoes" element={<Definicoes/>}>
            <Route path="/dashboard/definicoes/adduser" element={<AddUser/>}/>
          </Route>
          <Route path="/dashboard/loja/:id" element={<Loja/>}/>
        </Route>
        <Route path="/ExelToJson" element={<ExcelToJson/>}/>
        <Route path="/burger" element={<HamburgerMenu pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />}/>
        
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
