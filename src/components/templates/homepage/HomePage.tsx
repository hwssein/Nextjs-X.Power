import HomePageHeader from "@/templates/homepage/HomePageHeader";
import HomePageServices from "@/templates/homepage/HomePageServices";

function HomePage() {
  return (
    <>
      <div className="w-full max-w-screen-xl min-h-screen bg-[url(/images/Capa1.png)] bg-center bg-cover absolute top-0 left-1/2 transform -translate-x-1/2 -z-10"></div>

      <HomePageHeader />

      <HomePageServices />
    </>
  );
}

export default HomePage;
