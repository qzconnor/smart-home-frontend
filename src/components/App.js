import './style/App.css';
import {Routes, Route, Navigate} from "react-router-dom";

import UserSelection from "../pages/UserSelection";
import Index from "../pages/Index";
import NewUser from "../pages/NewUser";
import User from "../pages/User";
import { CookiesProvider } from "react-cookie";

import {FaExpand, FaRetweet} from 'react-icons/fa';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import Edit from "../pages/Edit";
import Settings from "../pages/Settings";


function App() {
    const handle = useFullScreenHandle();

  return (
      <FullScreen handle={handle}>
          <CookiesProvider>
              <div className="app">
                  <div className="utilitys">
                      <div><FaRetweet onClick={refreshPage}/></div>
                      <div><FaExpand onClick={handle.active ? handle.exit : handle.enter}/></div>
                  </div>
                      <Routes>
                          <Route path="/" element={<Index />} />
                          <Route exact path="/users" element={<UserSelection />} />
                          <Route exact path="/new" element={<NewUser />} />
                          <Route exact path="/user/:uuid" element={<User />} />
                          <Route exact path="/edit/:uuid" element={<Edit />} />
                          <Route exact path="/settings/:uuid" element={<Settings />} />
                          <Route path="*" element={<Navigate to="/"/>} />
                      </Routes>

              </div>
          </CookiesProvider>
      </FullScreen>

  );
    function refreshPage() {
        window.location.reload(false);
    }
}

export default App;
