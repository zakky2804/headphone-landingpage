import Image from "next/image";
import type { ServiceData } from "@/types";
import Animation from "../Animation";

const ServicesCard = ({ data }: { data: ServiceData }) => {
  return (
    <Animation
      tag="div"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: data.delay }}
      className="p-4 bg-white rounded-xl shadow max-w-[282px]"
    >
      <Image
        src={data.image}
        width={100}
        height={100}
        alt={data.title}
        className="mx-auto"
      />

      <h3 className="text-lg font-varela-round font-semibold text-gray-900 mb-2">
        {data.title}
      </h3>
      <p className="text-sm text-gray-700"> {data.paragraf} </p>
    </Animation>
  );
};

export default ServicesCard;
