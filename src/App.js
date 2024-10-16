import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/profile" element={<Profile />} />
          <Route path="/product/:id" element={<ProductDetails />} /> */}
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
