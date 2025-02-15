export default function Events() {
  return (
    <div className="h-full flex items-center justify-center p-6">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8 animate-bounce">
          <span className="text-6xl">🎉</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Events Coming Soon!
        </h1>
        <div className="bg-blue-50 rounded-lg p-8 shadow-lg">
          <p className="text-xl text-gray-600 mb-4">
            We're working on something exciting for you
          </p>
          <div className="flex items-center justify-center space-x-3 text-blue-600">
            <span className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></span>
            <span className="w-3 h-3 bg-blue-600 rounded-full animate-pulse delay-150"></span>
            <span className="w-3 h-3 bg-blue-600 rounded-full animate-pulse delay-300"></span>
          </div>
          <p className="mt-6 text-gray-500">
            Stay tuned for upcoming recruitment events, workshops, and career fairs
          </p>
        </div>
      </div>
    </div>
  );
} 