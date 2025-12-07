import type { Metadata } from "next";
import Banner from "@/components/Banner";
import Blogs from "@/components/Blogs";
import Services from "@/components/Services";

export const metadata: Metadata = { title: "Home" };

export default function Home() {
  return (
    <>
      <Services />
      <Banner />
      <Blogs />
    </>
  );
}
