"use client";

import type { ComponentProps } from "react";
import { UpdateFollower as ReactUpdateFollower } from "react-mouse-follower";

type ReactUpdateFollowerProps = ComponentProps<typeof ReactUpdateFollower>;
type MouseOptions = ReactUpdateFollowerProps["mouseOptions"];

interface UpdateFollowerProps {
  children: React.ReactNode;
  mouseOptions?: MouseOptions;
}

const UpdateFollower = ({ children, mouseOptions }: UpdateFollowerProps) => {
  return (
    <ReactUpdateFollower mouseOptions={mouseOptions}>
      {children}
    </ReactUpdateFollower>
  );
};

export default UpdateFollower;
