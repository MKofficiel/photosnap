import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Stories from "./pages/Stories";
import Features from "./pages/Features";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/features" element={<Features />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
