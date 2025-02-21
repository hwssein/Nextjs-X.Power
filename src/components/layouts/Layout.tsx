import { ChildrenType } from "@/types/types";

import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }: ChildrenType) {
  return (
    <>
      <header className="w-full bg-background rounded-lg bg-dot-slate-800/85 relative flex flex-col items-center justify-center">
        <div className="w-full max-w-screen-xl">
          <Header />
        </div>
      </header>

      <main className="w-full pb-20 bg-background rounded-lg bg-dot-slate-800/85 relative flex flex-col items-center justify-center">
        <div className="w-full max-w-screen-xl">{children}</div>
      </main>

      <footer>
        <Footer />
        {/* <div className="w-full h-[507px] bg-primary absolute bottom-0 left-1/2 transform -translate-x-1/2 -z-10 sm:h-[282px]"></div> */}
      </footer>
    </>
  );
}

export default Layout;
