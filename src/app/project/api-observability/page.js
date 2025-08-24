export const metadata = {
  title: 'API Observability in Postman - Tony Sebastian',
  description: '0 to 1 project that introduced observability in Postman',
};

export default function ApiObservabilityPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-8 py-16">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">API Observability in Postman</h1>
          <p className="text-lg text-slate-600">0 to 1 project that introduced observability in Postman</p>
        </div>

        <div className="prose max-w-none">
          <p>This groundbreaking project introduced observability capabilities to Postman, enabling developers to monitor and understand their API performance in real-time.</p>
          
          <h2>Project Overview</h2>
          <p>As a 0 to 1 initiative, this project involved:</p>
          <ul>
            <li>Research and user discovery</li>
            <li>Product strategy and roadmap development</li>
            <li>Design system creation</li>
            <li>Implementation and launch</li>
          </ul>

          <h2>Impact</h2>
          <p>This feature became a cornerstone of Postman's monitoring capabilities, helping thousands of developers gain insights into their API performance.</p>
        </div>
      </div>
    </div>
  );
}