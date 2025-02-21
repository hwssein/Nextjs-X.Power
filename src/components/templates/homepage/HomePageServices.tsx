import ServicesCard from "@/components/modules/ServicesCard";
import { servicesData } from "@/constants/homePageData";

function HomePageServices() {
  return (
    <>
      <section
        className="w-full flex flex-col items-center justify-start gap-2 mt-10 md:mt-14"
        id="services"
      >
        <h2 className="w-full text-center text-primary font-semibold">
          خدمات ما
        </h2>

        <h3 className="w-full text-center font-bold text-lg ">
          ما در ایکس پاور چه خدماتی ارائه میکنیم؟
        </h3>

        <div className="w-full p-3 flex flex-wrap items-center justify-center gap-3 mt-4">
          {servicesData.map((item, index) => (
            <ServicesCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              url={item.url}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default HomePageServices;
