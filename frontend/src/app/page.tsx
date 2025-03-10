import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-16 sm:py-20">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block">Welcome to</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">LTI Applicant Tracking System</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Streamline your recruitment process with our comprehensive applicant tracking system.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Link
                href="/jobs"
                className="btn-primary"
              >
                View Open Positions
              </Link>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <Link
                href="/candidates/apply"
                className="btn-secondary"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}