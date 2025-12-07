import Image from "next/image";
import BannerImage from "@/assets/headphone4.png";
import Animation from "./Animation";
import UpdateFollower from "./mouseFollower/UpdateFollower";

const Banner = () => {
  return (
    <section className="bg-white pt-24 pb-10">
      <div className="wrapper ">
        {/* Banner image & content */}
        <div className="flex flex-wrap items-center justify-center gap-x-28 mb-20 text-center sm:text-left">
          {/* Image */}
          <Animation
            tag="div"
            initial={{ rotate: -90, opacity: 0, x: -100 }}
            whileInView={{ rotate: 0, opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src={BannerImage}
              width={400}
              height={450}
              alt=""
              className="aspect-400/450 w-72 sm:w-[400px]"
            />
          </Animation>

          <div className="space-y-4 max-w-[424px]">
            <Animation
              tag="h2"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-varela-round font-bold text-2xl sm:text-4xl"
            >
              The Latest Headphones With The Latest Technology
            </Animation>
            <Animation
              tag="p"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis
              incidunt!
            </Animation>

            <UpdateFollower
              mouseOptions={{
                backgroundColor: "white",
                zIndex: 999,
                followSpeed: 0.5,
                mixBlendMode: "difference",
                scale: 4,
              }}
            >
              <Animation
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                tag="button"
                className="px-6 py-3 border-2 border-[#e33343] rounded font-varela-round hover:text-amber-100 hover:bg-[#e33343] duration-200"
              >
                Shop Now
              </Animation>
            </UpdateFollower>
          </div>
        </div>

        {/* Banner text */}
        <Animation
          tag="div"
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full bg-linear-to-t from-primary to-primary/70 rounded-4xl py-10"
        >
          <p className="max-w-[700px] font-varela-round text-4xl text-white font-bold text-center mx-auto">
            Headphones With Good Quality And Affordable Price
          </p>
        </Animation>
      </div>
    </section>
  );
};

export default Banner;
