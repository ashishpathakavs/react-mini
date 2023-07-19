import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import AppForContext from "./views/AppForContext";
import AppForPerformance from "./views/AppForPerformance";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="max-w-[70%] mx-auto mt-10">
        <Routes>
          <Route path="/mini-apps/context" element={<AppForContext />} />
          <Route
            path="/mini-apps/performance"
            element={<AppForPerformance />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
