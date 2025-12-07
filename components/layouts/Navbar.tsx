import { Headphones } from "lucide-react";
import Link from "next/link";
import { navbarData } from "@/assets/data";
import Animation from "../Animation";
import UpdateFollower from "../mouseFollower/UpdateFollower";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <div className="bg-brand-dark text-brand-dark-foreground py-6 lg:py-8  ">
      <Animation
        tag="nav"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="flex items-center justify-between wrapper pt-1 relative"
      >
        <p className="font-bold text-xl font-varela-round">
          PLAYING /{" "}
          <span className="text-brand-dark-foreground/70 font-normal">
            MARKET
          </span>
        </p>

        <div className="hidden md:flex items-center gap-x-20 pr-4 text-sm">
          <div className="flex items-center gap-x-10 font-varela-round">
            {navbarData.map(({ id, name, link }) => (
              <UpdateFollower
                key={id}
                mouseOptions={{
                  backgroundColor: "white",
                  zIndex: 999,
                  followSpeed: 1.5,
                  scale: 5,
                  mixBlendMode: "difference",
                }}
              >
                <Link href={link} prefetch={false} className="">
                  {name}
                </Link>
              </UpdateFollower>
            ))}
          </div>

          <UpdateFollower
            mouseOptions={{
              backgroundColor: "white",
              zIndex: 999,
              followSpeed: 1.5,
              scale: 5,
              mixBlendMode: "difference",
            }}
          >
            <Headphones size={24} strokeWidth={2} />
          </UpdateFollower>
        </div>

        <MobileMenu>
          <div className="flex flex-col gap-y-8 py-10 items-center justify-center font-medium">
            {navbarData.map(({ id, name, link }) => (
              <Link key={id} href={link} prefetch={false} className="">
                {name}
              </Link>
            ))}
          </div>
        </MobileMenu>
      </Animation>
    </div>
  );
};

export default Navbar;
