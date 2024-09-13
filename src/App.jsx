
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Page1 from "./pages/page1";
import Page2 from "./pages/Page2";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Page1/>} />
        <Route path="/Page2" element={<Page2 />} />
      </Routes>
    </Router>
  );
}

export default App;
