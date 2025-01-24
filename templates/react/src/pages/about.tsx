import { useSnapshot } from 'valtio';
import { sampleStore } from '../store/sample';
import { useNavigate } from '@/.router';

export default function About() {
  const sample = useSnapshot(sampleStore);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4">
      <p className="text-4">/pages/about.tsx</p>
      <p className="text-4">Store randomNumber = {sample.randomNumber}</p>

      <div>
        <button
          type="button"
          className="flex gap-2 items-center rounded px-4 py-2"
          onClick={() => {
            navigate('/');
          }}
        >
          go Home
        </button>
      </div>
    </div>
  );
}
