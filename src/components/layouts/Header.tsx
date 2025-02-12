import Navbar from "../elements/Navbar";
import ResponsiveNavbar from "../elements/ResponsiveNavbar";

function Header() {
  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-start gap-4 bg-[url(/images/Capa1.png)] bg-cover bg-center">
        <div className="hidden md:block md:w-full">
          <Navbar />
        </div>
        <div className="w-full block md:hidden">
          <ResponsiveNavbar />
        </div>

        <div></div>
        <div></div>
      </div>
    </>
  );
}

export default Header;
