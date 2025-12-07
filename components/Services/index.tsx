import Image from "next/image";
import { servicesData } from "@/assets/data";
import Animation from "@/components/Animation";
import UpdateFollower from "@/components/mouseFollower/UpdateFollower";
import ServicesCard from "./ServiceCard";

const Services = () => {
  return (
    <section className="bg-gray-100 pt-16 pb-20">
      <div className="wrapper ">
        <Animation
          tag="h2"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-varela-round font-bold text-center mb-12"
        >
          Services
        </Animation>

        <div className="grid grid-cols-1 gap-y-6 md:grid-cols-3 text-center md:gap-x-6 lg:gap-x-6 xl:gap-x-10 place-items-center xl:px-14">
          {servicesData.map((data) => (
            <UpdateFollower
              key={data.id}
              mouseOptions={{
                zIndex: 999,
                backgroundColor: "transparent",
                followSpeed: 0.5,
                rotate: 720,
                scale: 6,
                backgroundElement: (
                  <div className="">
                    <Image
                      src={data.image}
                      width={61}
                      height={69}
                      alt={data.title}
                      className="aspect-61/69 w-[200px]"
                    />
                  </div>
                ),
              }}
            >
              <ServicesCard data={data} />
            </UpdateFollower>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
