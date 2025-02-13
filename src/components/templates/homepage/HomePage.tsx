import HomePageHeader from "./HomePageHeader";

function HomePage() {
  return (
    <>
      <div
        className="w-full max-w-screen-xl min-h-screen absolute top-0 left-1/2 transform -translate-x-1/2 -z-10"
        style={{
          backgroundImage:
            "url(/images/Capa1.png), url(/images/Ellipse130.png)",
          backgroundPosition: "center, top",
          backgroundSize: "cover, cover",
          backgroundRepeat: "no-repeat, no-repeat",
        }}
      ></div>

      <HomePageHeader />
    </>
  );
}

export default HomePage;
