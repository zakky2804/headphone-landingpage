"use client";

import type { MotionProps } from "framer-motion";
import { motion } from "framer-motion";

type Tag =
  | "div"
  | "section"
  | "header"
  | "footer"
  | "main"
  | "nav"
  | "h2"
  | "h1"
  | "p"
  | "button";

interface AnimationProps extends MotionProps {
  tag: Tag;
  className?: React.HTMLAttributes<HTMLDivElement>["className"];
  children: React.ReactNode;
}

const Animation = ({ tag, className, children, ...motionProps }: AnimationProps) => {
  const Component = motion[tag] as React.ElementType;
  return <Component className={className} {...motionProps} >{children}</Component>;
};

export default Animation;
