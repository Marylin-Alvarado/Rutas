import './App.css';
import MapView from './components/MapView';
import MapView2 from './components/MapView2';
import Plan from './components/PlanEmergencia';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import NodoLista from './components/NodoLista';






export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/map" element={<MapView />} />
        <Route path="/map2" element={<MapView2 />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/nodos" element={<NodoLista />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}


