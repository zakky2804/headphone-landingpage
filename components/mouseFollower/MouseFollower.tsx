"use client";

import dynamic from "next/dynamic";

const MouseFollower = dynamic(
  () => import("react-mouse-follower").then((mod) => mod.MouseFollower),
  { ssr: false },
);

const Mouse = () => {
  return <MouseFollower />;
};

export default Mouse;
