import { BrowserRouter, Route, Routes } from "react-router";
// import Home from "./pages/Home";
// import Stories from "./pages/Stories";
// import Features from "./pages/Features";
// import Pricing from "./pages/Pricing";
// import AppLayout from "./ui/AppLayout";
import ScrollToTop from "./components/ScrollToTop";
import { lazy, Suspense } from "react";
import { MoonLoader } from "react-spinners";
import Spinner from "./components/Spinner";
const Home = lazy(() => import("./pages/Home"));
const Features = lazy(() => import("./pages/Features"));
const Pricing = lazy(() => import("./pages/Pricing"));
const AppLayout = lazy(() => import("./ui/AppLayout"));
const Stories = lazy(() => import("./pages/Stories"));

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route element={<AppLayout />}>
            <Route path="/stories" element={<Stories />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
