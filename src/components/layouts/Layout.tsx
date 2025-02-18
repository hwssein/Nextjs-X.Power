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
        <div className="w-full h-[507px] bg-primary absolute bottom-0 left-1/2 transform -translate-x-1/2 -z-10 sm:h-[282px]"></div>
      </footer>
    </>
  );
}

export default Layout;
