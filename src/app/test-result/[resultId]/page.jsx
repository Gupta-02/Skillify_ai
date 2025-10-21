// Test result page
export default function TestResultPage({ params }) {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Test Results</h1>
      <p>Result ID: {params.resultId}</p>
      {/* TODO: Implement test results display */}
    </div>
  )
}
