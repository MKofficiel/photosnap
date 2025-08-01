import { Outlet } from "react-router";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

import PageWrapper from "../components/PageWrapper";

const AppLayout = () => {
  return (
    <>
      <PageWrapper>
        <NavBar />

        <main>
          <Outlet />
        </main>

        <Footer />
      </PageWrapper>
    </>
  );
};

export default AppLayout;
