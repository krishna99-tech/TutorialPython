import React from 'react';
import { HeroUIProvider } from '@heroui/react';

export default function Root({ children }) {
  return (
    <HeroUIProvider>
      {children}
    </HeroUIProvider>
  );
}
