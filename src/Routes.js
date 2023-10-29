import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./paginas/inicio";
import SobreMim from "./paginas/Sobre mim";
import Menu from "./componentes/Menu";
import Rodape from "./componentes/Rodape";
import Post from "paginas/Post";
import PaginaPadrao from "componentes/PaginaPadrao";
import NaoEncontrada from "componentes/NaoEncontrada";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobremim" element={<SobreMim />} />
          <Route path="posts/:id" element={<Post />} />
          
        </Route>

        <Route path="*" element={<NaoEncontrada />} />
        
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
