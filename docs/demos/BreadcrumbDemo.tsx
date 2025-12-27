"use client";

import React from 'react';
import { PeacockBreadcrumb } from '../../src';
import { ComponentPreview } from './ComponentPreview';
import { Home, Settings, User } from 'lucide-react';

export const BreadcrumbDemo = () => {
  return (
    <div className="flex flex-col gap-8 w-full items-center">
      <ComponentPreview
        title="Standard Breadcrumb"
        description="A simple navigation trail with glassmorphic styling."
        code={`<PeacockBreadcrumb
  items={[
    { label: "Home", href: "/" },
    { label: "Components", href: "/components" },
    { label: "Breadcrumb" }
  ]}
/>`}
      >
        <PeacockBreadcrumb
          items={[
            { label: "Home", href: "#" },
            { label: "Components", href: "#" },
            { label: "Breadcrumb" }
          ]}
        />
      </ComponentPreview>

      <ComponentPreview
        title="With Icons"
        description="Breadcrumbs can include icons for better visual hierarchy."
        code={`<PeacockBreadcrumb
  items={[
    { icon: <Home />, href: "/" },
    { icon: <Settings />, label: "Settings", href: "/settings" },
    { icon: <User />, label: "Profile" }
  ]}
/>`}
      >
        <PeacockBreadcrumb
          items={[
            { icon: <Home />, href: "#" },
            { icon: <Settings />, label: "Settings", href: "#" },
            { icon: <User />, label: "Profile" }
          ]}
        />
      </ComponentPreview>
    </div>
  );
};
