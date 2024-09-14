import { Box, BoxProps } from '@chakra-ui/react';
import { motion, MotionProps, Transition } from 'framer-motion';

// Define the MotionBoxProps type that includes the transition prop
type MotionBoxProps = BoxProps & MotionProps & {
  transition?: Transition;
};

// Create the MotionBox component with the correct prop types
export const MotionBox: React.ComponentType<MotionBoxProps> = motion(Box);

