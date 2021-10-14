import React, { FunctionComponent } from "react";
import { forwardRef, Stack } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

export const MotionStack = motion(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    );
    return <Stack ref={ref} {...chakraProps} />;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }) as FunctionComponent<any>
);
