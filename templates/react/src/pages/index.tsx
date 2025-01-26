import { useEffect, useLayoutEffect, useState } from 'react';
import { useSnapshot } from 'valtio';
import { sampleStore } from '../store/sample';
import SvgIcon from '../svg-icons/SvgIcon';
import Pets from './_components/Pets';

export default function Index() {
  const sample = useSnapshot(sampleStore);
  const changeNumber = () => {
    const randomNumber = Math.random();
    sampleStore.randomNumber = randomNumber;
  };

  return (
    <div className="flex flex-col gap-4">
      <p className="text-4">/pages/_index.tsx</p>
      <p className="text-4">Store randomNumber = {sample.randomNumber}</p>

      <div>
        <button type="button" className="flex gap-2 items-center rounded px-4 py-2" onClick={changeNumber}>
          <SvgIcon icon="sample/random" className="w-6 h-6" />
          Random Number
        </button>
      </div>

      <h1 className="text-10">Pets</h1>
      <Pets />
    </div>
  );
}
