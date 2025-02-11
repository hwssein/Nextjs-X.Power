import { ChildrenType } from "@/types/types";

import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }: ChildrenType) {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>{children}</main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Layout;
