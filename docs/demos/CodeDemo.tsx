import React from 'react';
import { PeacockCode } from '../../src';

export const CodeDemo = () => {
  const code = `function Peacock() {
  const [spread, setSpread] = useState(true);
  return (
    <motion.div animate={{ scale: spread ? 1.2 : 1 }} />
  );
}`;

  return (
    <div className="w-full max-w-lg">
      <PeacockCode code={code} language="typescript" />
    </div>
  );
};
