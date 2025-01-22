import { useEffect, useLayoutEffect, useState } from 'react';
import { useSnapshot } from 'valtio';
import { sampleStore } from './store/sample';
import SvgIcon from './svg-icons';

export default function App() {
  const [number, setNumber] = useState(0);
  const sample = useSnapshot(sampleStore);
  const changeNumber = () => {
    const randomNumber = Math.random();
    setNumber(randomNumber);
    sampleStore.randomNumber = randomNumber;
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    changeNumber();
  }, []);

  return (
    <div className="flex flex-col gap-4 py-10 items-center">
      <h1 className="text-4xl mb-3">
        Component randomNumber =
        {number}
      </h1>

      <h1 className="text-4xl mb-3">
        Store randomNumber =
        {sample.randomNumber}
      </h1>

      <div>
        <button type="button" className="flex gap-2 items-center rounded px-4 py-2" onClick={changeNumber}>
          <SvgIcon icon="sample/random" className="w-6 h-6" />
          Random Number
        </button>
      </div>
    </div>
  );
}
