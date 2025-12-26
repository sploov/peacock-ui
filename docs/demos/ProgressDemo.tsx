import React from 'react';
import { PeacockProgress } from '../../src';
import { ComponentPreview } from './ComponentPreview';

export const ProgressDemo = () => {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ComponentPreview>
      <div className="w-[60%]">
        <PeacockProgress value={progress} />
      </div>
    </ComponentPreview>
  );
};
