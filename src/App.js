import './App.css';
import Login from './components/Login';
import "bootstrap/dist/css/bootstrap.min.css";
import CrearUsuario from './components/CrearUsuario';
import CrearUsuario1 from './components/CrearUsuario1';
import Gestion from './components/Gestion';
import Navbar from './components/Navbar';
import Olvidada from './components/Olvidada';
import Recogida from './components/Recogida';

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/CrearUsuario" element={<CrearUsuario />} />
          <Route path="/CrearUsuario1" element={<CrearUsuario1 />} />
          <Route path="/clave" element={<Olvidada />} />
          <Route path="/gestion" element={<Gestion/>} />
          <Route path="/recogida" element={<Recogida/>} />
          {/* <Login/>
          <CrearUsuario/>
          <CrearUsuario1/>
          <Olvidada/> */}
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
