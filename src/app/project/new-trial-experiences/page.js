import Image from 'next/image';

export const metadata = {
  title: 'New Trial Experiences - Tony Sebastian',
  description: 'Increasing awareness by 27% and conversion by 5%',
};

export default function NewTrialExperiencesPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="mb-6">
          <Image
            src="/images/projects/wip.png"
            alt="Work in Progress"
            width={200}
            height={200}
            className="mx-auto"
          />
        </div>
        <h1 className="text-xl font-medium text-slate-900">
          Painting this project is in progress
        </h1>
      </div>
    </div>
  );
}