"use client";

import React from 'react';
import { PeacockCarousel } from '../../src';
import { ComponentPreview } from './ComponentPreview';

export const CarouselDemo = () => {
  const items = [
    {
      id: 1,
      title: "Neon City",
      content: <p className="text-white/80">Explore the cybernetic depths of the future.</p>,
      image: "https://images.unsplash.com/photo-1545155452-5a987d603a1e?q=80&w=2671&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Abstract Art",
      content: <p className="text-white/80">Fluid forms and vibrant colors.</p>,
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Deep Space",
      content: <p className="text-white/80">The final frontier awaits.</p>,
      image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2622&auto=format&fit=crop"
    }
  ];

  return (
    <div className="w-full">
      <ComponentPreview
        title="3D Carousel"
        description="A physics-based, 3D parallax slider with touch support."
        code={`<PeacockCarousel items={items} />`}
      >
        <div className="w-full max-w-3xl mx-auto">
          <PeacockCarousel items={items} />
        </div>
      </ComponentPreview>
    </div>
  );
};
