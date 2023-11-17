'use client';
import { createResponsiveSystem } from 'react-responsive-system';
const breakpoints = {
    // --name them whatever you want--
    sm: 600, // 0 - 600px -> "sm" (phones)
    md: 1200, // 601 - 1200 -> "md" (tablets)
    lg: Infinity, // 1201+ -> "lg" (laptops/desktops)
    // --have as many as you'd like--
  };

const { ScreenClassProvider, useResponsiveValue } = createResponsiveSystem({
  breakpoints,
});

export { ScreenClassProvider, useResponsiveValue };