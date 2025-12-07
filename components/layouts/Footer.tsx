import { Instagram } from "lucide-react";
import Image from "next/image";
import PaymentImage from "@/assets/credit-cards.webp";
import Animation from "@/components/Animation";
import FacebookIcon from "@/ui/icons/FacebookIcon";
import GoogleIcon from "@/ui/icons/GoogleIcon";
import MapIcon from "@/ui/icons/MapIcon";
import PhoneIcon from "@/ui/icons/PhoneIcon";
import TelegramIcon from "@/ui/icons/TelegramIcon";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="wrapper">
        {/* Company profile and links */}
        <div className="flex flex-col gap-y-6 sm:flex-row lg:gap-x-6 xl:gap-x-24 border-b-2 border-white pt-12 pb-8">
          {/* Company profile */}
          <Animation
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            tag="div"
            className="max-w-[277.33px] space-y-6"
          >
            <h2 className="font-varela-round text-3xl uppercase font-bold">
              Playing
            </h2>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ea
              ratione quidem libero, praesentium ab atque? Quidem maxime,
              numquam dolores
            </p>
            <div className="">
              <p className=" mb-2 flex items-center">
                <PhoneIcon /> +1 (123) 456-7890
              </p>
              <p className=" flex items-center">
                <MapIcon /> Noida, Uttar Pradesh
              </p>
            </div>
          </Animation>

          {/* Quick Links */}
          <Animation
            tag="div"
            className="pl-2"
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="font-varela-round text-3xl font-bold mb-6">
              Quick Links
            </h2>
            <div className="flex items-center lg:gap-x-8 xl:gap-x-20 font-varela-round">
              <ul className="flex flex-col gap-y-2">
                <li className="">Home</li>
                <li className="">About</li>
                <li className="">Contact Us</li>
                <li className="text-nowrap">Privacy Policy</li>
              </ul>
              <ul className="flex flex-col gap-y-2">
                <li className="">Home</li>
                <li className="">About</li>
                <li className="">Contact Us</li>
                <li className="text-nowrap">Privacy Policy</li>
              </ul>
            </div>
          </Animation>

          {/* Follow Us */}
          <Animation
            tag="div"
            className=""
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="font-varela-round text-3xl font-bold mb-6">
              Follow Us
            </h2>
            <div className="flex items-center gap-x-2 mb-6">
              <FacebookIcon />
              <Instagram />
              <TelegramIcon />
              <GoogleIcon />
            </div>
            <p className="mb-2"> Payment Methods</p>
            <Image
              src={PaymentImage}
              width={341}
              height={37}
              alt=""
              className="aspect-341/37 lg:w-52 xl:w-[288px]"
            />
          </Animation>
        </div>

        {/* copy right */}
        <p className="text-center text-white py-8 font-semibold">
          © 2025. Design inspired by The Coding Journey
        </p>
      </div>
    </footer>
  );
};

export default Footer;
