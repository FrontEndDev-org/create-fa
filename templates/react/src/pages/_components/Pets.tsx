import { findPetsByStatus, getPetById } from '@/apis/.petStore3';
import { useRequest } from 'ahooks';

export default function Pets() {
  const { data: pets, loading } = useRequest(() => findPetsByStatus('available'));

  if (loading) {
    return <p className="text-gray-4 dark:text-gray-6">loading...</p>;
  }

  return (
    <ul className='lh-[2] list-disc list-inside'>
      {pets?.map((pet) => {
        return (
          <li key={pet.id}>
            <a href={`/pets/${pet.id}`}>{pet.name}</a>
          </li>
        );
      })}
    </ul>
  );
}
