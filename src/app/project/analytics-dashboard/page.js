export const metadata = {
  title: 'Analytics Dashboard - Tony Sebastian',
  description: 'Redesigned the API testing workflow to improve developer productivity and reduce cognitive load',
};

export default function AnalyticsDashboardPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-8 py-16">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Analytics Dashboard</h1>
          <p className="text-lg text-slate-600">Redesigned the API testing workflow to improve developer productivity and reduce cognitive load</p>
        </div>

        <div className="prose max-w-none">
          <p>This project focused on redesigning the analytics dashboard to provide better insights and improve the overall user experience for developers.</p>
          
          <h2>Challenge</h2>
          <p>The existing dashboard was overwhelming users with too much information and had poor information architecture.</p>

          <h2>Solution</h2>
          <ul>
            <li>Streamlined information hierarchy</li>
            <li>Improved data visualization</li>
            <li>Enhanced user workflow</li>
            <li>Reduced cognitive load</li>
          </ul>

          <h2>Results</h2>
          <p>The redesigned dashboard significantly improved developer productivity and user satisfaction.</p>
        </div>
      </div>
    </div>
  );
}