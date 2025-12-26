import React from 'react';
import {
  PeacockSelect,
  PeacockSelectContent,
  PeacockSelectGroup,
  PeacockSelectItem,
  PeacockSelectLabel,
  PeacockSelectTrigger,
  PeacockSelectValue,
} from '../../src';
import { ComponentPreview } from './ComponentPreview';

export const SelectDemo = () => {
  return (
    <ComponentPreview>
      <PeacockSelect>
        <PeacockSelectTrigger className="w-[180px]">
          <PeacockSelectValue placeholder="Select a timezone" />
        </PeacockSelectTrigger>
        <PeacockSelectContent>
          <PeacockSelectGroup>
            <PeacockSelectLabel>North America</PeacockSelectLabel>
            <PeacockSelectItem value="est">Eastern Standard Time (EST)</PeacockSelectItem>
            <PeacockSelectItem value="cst">Central Standard Time (CST)</PeacockSelectItem>
            <PeacockSelectItem value="mst">Mountain Standard Time (MST)</PeacockSelectItem>
            <PeacockSelectItem value="pst">Pacific Standard Time (PST)</PeacockSelectItem>
            <PeacockSelectItem value="akst">Alaska Standard Time (AKST)</PeacockSelectItem>
            <PeacockSelectItem value="hst">Hawaii Standard Time (HST)</PeacockSelectItem>
          </PeacockSelectGroup>
          <PeacockSelectGroup>
            <PeacockSelectLabel>Europe</PeacockSelectLabel>
            <PeacockSelectItem value="gmt">Greenwich Mean Time (GMT)</PeacockSelectItem>
            <PeacockSelectItem value="cet">Central European Time (CET)</PeacockSelectItem>
            <PeacockSelectItem value="eet">Eastern European Time (EET)</PeacockSelectItem>
            <PeacockSelectItem value="west">Western European Summer Time (WEST)</PeacockSelectItem>
            <PeacockSelectItem value="cat">Central Africa Time (CAT)</PeacockSelectItem>
            <PeacockSelectItem value="eat">East Africa Time (EAT)</PeacockSelectItem>
          </PeacockSelectGroup>
        </PeacockSelectContent>
      </PeacockSelect>
    </ComponentPreview>
  );
};
