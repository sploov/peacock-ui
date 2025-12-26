import React from 'react';
import {
  PeacockMenubar,
  PeacockMenubarCheckboxItem,
  PeacockMenubarContent,
  PeacockMenubarItem,
  PeacockMenubarMenu,
  PeacockMenubarRadioGroup,
  PeacockMenubarRadioItem,
  PeacockMenubarSeparator,
  PeacockMenubarShortcut,
  PeacockMenubarSub,
  PeacockMenubarSubContent,
  PeacockMenubarSubTrigger,
  PeacockMenubarTrigger,
} from '../../src';
import { ComponentPreview } from './ComponentPreview';

export const MenubarDemo = () => {
  return (
    <ComponentPreview>
      <PeacockMenubar>
        <PeacockMenubarMenu>
          <PeacockMenubarTrigger>File</PeacockMenubarTrigger>
          <PeacockMenubarContent>
            <PeacockMenubarItem>
              New Tab <PeacockMenubarShortcut>⌘T</PeacockMenubarShortcut>
            </PeacockMenubarItem>
            <PeacockMenubarItem>
              New Window <PeacockMenubarShortcut>⌘N</PeacockMenubarShortcut>
            </PeacockMenubarItem>
            <PeacockMenubarItem disabled>New Incognito Window</PeacockMenubarItem>
            <PeacockMenubarSeparator />
            <PeacockMenubarSub>
              <PeacockMenubarSubTrigger>Share</PeacockMenubarSubTrigger>
              <PeacockMenubarSubContent>
                <PeacockMenubarItem>Email link</PeacockMenubarItem>
                <PeacockMenubarItem>Messages</PeacockMenubarItem>
                <PeacockMenubarItem>Notes</PeacockMenubarItem>
              </PeacockMenubarSubContent>
            </PeacockMenubarSub>
            <PeacockMenubarSeparator />
            <PeacockMenubarItem>
              Print... <PeacockMenubarShortcut>⌘P</PeacockMenubarShortcut>
            </PeacockMenubarItem>
          </PeacockMenubarContent>
        </PeacockMenubarMenu>
        <PeacockMenubarMenu>
          <PeacockMenubarTrigger>Edit</PeacockMenubarTrigger>
          <PeacockMenubarContent>
            <PeacockMenubarItem>
              Undo <PeacockMenubarShortcut>⌘Z</PeacockMenubarShortcut>
            </PeacockMenubarItem>
            <PeacockMenubarItem>
              Redo <PeacockMenubarShortcut>⇧⌘Z</PeacockMenubarShortcut>
            </PeacockMenubarItem>
            <PeacockMenubarSeparator />
            <PeacockMenubarSub>
              <PeacockMenubarSubTrigger>Find</PeacockMenubarSubTrigger>
              <PeacockMenubarSubContent>
                <PeacockMenubarItem>Search the web</PeacockMenubarItem>
                <PeacockMenubarSeparator />
                <PeacockMenubarItem>Find...</PeacockMenubarItem>
                <PeacockMenubarItem>Find Next</PeacockMenubarItem>
                <PeacockMenubarItem>Find Previous</PeacockMenubarItem>
              </PeacockMenubarSubContent>
            </PeacockMenubarSub>
            <PeacockMenubarSeparator />
            <PeacockMenubarItem>Cut</PeacockMenubarItem>
            <PeacockMenubarItem>Copy</PeacockMenubarItem>
            <PeacockMenubarItem>Paste</PeacockMenubarItem>
          </PeacockMenubarContent>
        </PeacockMenubarMenu>
      </PeacockMenubar>
    </ComponentPreview>
  );
};
