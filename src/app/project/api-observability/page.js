import Image from 'next/image';

export const metadata = {
  title: 'API Observability in Postman - Tony Sebastian',
  description: '0 to 1 project that introduced observability in Postman',
};

export default function ApiObservabilityPage() {
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