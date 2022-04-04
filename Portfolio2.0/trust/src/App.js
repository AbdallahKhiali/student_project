import { BrowserRouter, Routes, Route } from "react-router-dom";
import Application from "./components/Application";
import AddPost from "./components/Application-components/AddPost";
import MyOffers from "./components/Application-components/MyOffers";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Signup from "./components/Signup";

import "./styles/index.css"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact  element={<Landing/>} />
          <Route path="/signup" exact  element={<Signup/>} />
          <Route path="/login" exact  element={<Login/>} />
          <Route path="/application" exact  element={<Application/> } />
          <Route path="/application/myposts" element={<MyOffers/> } />
          <Route path="/post/add" element={<AddPost/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
