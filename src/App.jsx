import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Stories from "./pages/Stories";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/stories" element={<Stories />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
