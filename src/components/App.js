import './style/App.css';
import {Routes, Route, Navigate} from "react-router-dom";

import UserSelection from "../pages/UserSelection";
import Index from "../pages/Index";
import NewUser from "../pages/NewUser";
import User from "../pages/User";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Index />} />
          <Route exact path="/users" element={<UserSelection />} />
          <Route exact path="/new" element={<NewUser />} />
          <Route exact path="/user/:uuid" element={<User />} />
          <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
    </div>
  );
}

export default App;
