// Test taking page
export default function TestPage({ params }) {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Test</h1>
      <p>Test ID: {params.testId}</p>
      {/* TODO: Implement test taking interface */}
    </div>
  )
}
