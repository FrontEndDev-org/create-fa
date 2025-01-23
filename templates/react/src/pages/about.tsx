import { useSnapshot } from 'valtio';
import { sampleStore } from '../store/sample';

export default function About() {
  const sample = useSnapshot(sampleStore);

  return (
    <div className="flex flex-col gap-4">
      <p className="text-4">/pages/about.tsx</p>
      <p className="text-4">Store randomNumber = {sample.randomNumber}</p>
    </div>
  );
}
