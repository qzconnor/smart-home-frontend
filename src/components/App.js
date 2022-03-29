import './style/App.css';
import { Routes, Route } from "react-router-dom";

import UserSelection from "../pages/UserSelection";
import Index from "../pages/Index";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/userselection" element={<UserSelection />} />
      </Routes>
    </div>
  );
}

export default App;
