import HomePageHeader from "@/templates/homepage/HomePageHeader";
import HomePageServices from "@/templates/homepage/HomePageServices";
import HomePageStore from "@/templates/homepage/HomePageStore";
import HomePageBanner1 from "@/templates/homepage/HomePageBanner1";
import HomePageLearning from "@/templates/homepage/HomePageLearning";
import HomePageBlog from "./HomePageBlog";
import HomepageMusic from "./HomepageMusic";

function HomePage() {
  return (
    <>
      <HomePageHeader />
      <HomePageServices />
      <HomePageStore />
      <HomepageMusic />
      <HomePageBanner1 />
      <HomePageLearning />
      <HomePageBlog />
    </>
  );
}

export default HomePage;
