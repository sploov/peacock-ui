import React from 'react';
import {
  PeacockContextMenu,
  PeacockContextMenuCheckboxItem,
  PeacockContextMenuContent,
  PeacockContextMenuItem,
  PeacockContextMenuLabel,
  PeacockContextMenuRadioGroup,
  PeacockContextMenuRadioItem,
  PeacockContextMenuSeparator,
  PeacockContextMenuShortcut,
  PeacockContextMenuSub,
  PeacockContextMenuSubContent,
  PeacockContextMenuSubTrigger,
  PeacockContextMenuTrigger,
} from '../../src';
import { ComponentPreview } from './ComponentPreview';

export const ContextMenuDemo = () => {
  return (
    <ComponentPreview>
      <PeacockContextMenu>
        <PeacockContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed border-white/20 text-sm text-white">
          Right click here
        </PeacockContextMenuTrigger>
        <PeacockContextMenuContent className="w-64">
          <PeacockContextMenuItem inset>
            Back
            <PeacockContextMenuShortcut>⌘[</PeacockContextMenuShortcut>
          </PeacockContextMenuItem>
          <PeacockContextMenuItem inset disabled>
            Forward
            <PeacockContextMenuShortcut>⌘]</PeacockContextMenuShortcut>
          </PeacockContextMenuItem>
          <PeacockContextMenuItem inset>
            Reload
            <PeacockContextMenuShortcut>⌘R</PeacockContextMenuShortcut>
          </PeacockContextMenuItem>
          <PeacockContextMenuSub>
            <PeacockContextMenuSubTrigger inset>More Tools</PeacockContextMenuSubTrigger>
            <PeacockContextMenuSubContent className="w-48">
              <PeacockContextMenuItem>
                Save Page As...
                <PeacockContextMenuShortcut>⇧⌘S</PeacockContextMenuShortcut>
              </PeacockContextMenuItem>
              <PeacockContextMenuItem>Create Shortcut...</PeacockContextMenuItem>
              <PeacockContextMenuItem>Name Window...</PeacockContextMenuItem>
              <PeacockContextMenuSeparator />
              <PeacockContextMenuItem>Developer Tools</PeacockContextMenuItem>
            </PeacockContextMenuSubContent>
          </PeacockContextMenuSub>
          <PeacockContextMenuSeparator />
          <PeacockContextMenuCheckboxItem checked>
            Show Bookmarks Bar
            <PeacockContextMenuShortcut>⌘⇧B</PeacockContextMenuShortcut>
          </PeacockContextMenuCheckboxItem>
          <PeacockContextMenuCheckboxItem>Show Full URLs</PeacockContextMenuCheckboxItem>
          <PeacockContextMenuSeparator />
          <PeacockContextMenuRadioGroup value="pedro">
            <PeacockContextMenuLabel inset>People</PeacockContextMenuLabel>
            <PeacockContextMenuSeparator />
            <PeacockContextMenuRadioItem value="pedro">
              Pedro Duarte
            </PeacockContextMenuRadioItem>
            <PeacockContextMenuRadioItem value="colm">
              Colm Tuite
            </PeacockContextMenuRadioItem>
          </PeacockContextMenuRadioGroup>
        </PeacockContextMenuContent>
      </PeacockContextMenu>
    </ComponentPreview>
  );
};
