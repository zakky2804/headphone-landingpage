"use client";

import { motion } from "framer-motion";
import type { ComponentPropsWithoutRef } from "react";

type Tag =
  | "div"
  | "section"
  | "header"
  | "footer"
  | "main"
  | "nav"
  | "h2"
  | "p"
  | "button";
interface AnimationProps extends ComponentPropsWithoutRef<typeof motion.div> {
  tag: Tag;
  children: React.ReactNode;
}

const Animation = ({ tag, children, ...motionProps }: AnimationProps) => {
  const Component = motion[tag || "div"] as typeof motion.div;
  return <Component {...motionProps}>{children}</Component>;
};

export default Animation;
