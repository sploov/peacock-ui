import React from 'react';
import {
  PeacockHoverCard,
  PeacockHoverCardContent,
  PeacockHoverCardTrigger,
  PeacockButton,
  PeacockAvatar,
  PeacockAvatarImage,
  PeacockAvatarFallback,
} from '../../src';
import { CalendarDays } from 'lucide-react';
import { ComponentPreview } from './ComponentPreview';

export const HoverCardDemo = () => {
  return (
    <ComponentPreview>
      <PeacockHoverCard>
        <PeacockHoverCardTrigger asChild>
          <PeacockButton variant="link">@nextjs</PeacockButton>
        </PeacockHoverCardTrigger>
        <PeacockHoverCardContent className="w-80">
          <div className="flex justify-between space-x-4">
            <PeacockAvatar>
              <PeacockAvatarImage src="https://github.com/vercel.png" />
              <PeacockAvatarFallback>VC</PeacockAvatarFallback>
            </PeacockAvatar>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold text-white">@nextjs</h4>
              <p className="text-sm text-gray-400">
                The React Framework – created and maintained by @vercel.
              </p>
              <div className="flex items-center pt-2">
                <CalendarDays className="mr-2 h-4 w-4 opacity-70 text-gray-400" />
                <span className="text-xs text-gray-400">
                  Joined December 2021
                </span>
              </div>
            </div>
          </div>
        </PeacockHoverCardContent>
      </PeacockHoverCard>
    </ComponentPreview>
  );
};
