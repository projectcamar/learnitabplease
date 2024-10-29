'use client'

import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary'

type ErrorFallbackProps = {
  error: Error;
  resetErrorBoundary: () => void;
}

function ErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h2 className="text-2xl font-bold">Something went wrong!</h2>
      <pre className="mt-2 text-red-500">{error.message}</pre>
      <button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-white"
        onClick={resetErrorBoundary}
      >
        Try again
      </button>
    </div>
  );
}

export function CustomErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <ReactErrorBoundary FallbackComponent={ErrorFallback}>
      {children}
    </ReactErrorBoundary>
  );
} 