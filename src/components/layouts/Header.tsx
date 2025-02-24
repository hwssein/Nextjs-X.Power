import Navbar from "@/elements/Navbar";
import ResponsiveNavbar from "@/elements/ResponsiveNavbar";

function Header() {
  return (
    <div className="w-full flex items-center justify-start my-1 p-1">
      <div className="hidden md:block w-full">
        <Navbar />
      </div>

      <div className="md:hidden w-full">
        <ResponsiveNavbar />
      </div>
    </div>
  );
}

export default Header;
