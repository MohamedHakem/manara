export default function DefaultSkeleton() {
  return (
    <div className="w-full max-w-[52rem] mx-auto fade-in-40 fade-out-40">
      {/* Header Skeleton */}
      <header className="flex items-center gap-4 p-4 border-b">
        <div className="h-8 w-8 rounded-full bg-gray-200 animate-pulse" />
        <div className="h-6 w-48 bg-gray-200 rounded animate-pulse" />
      </header>

      {/* Content Skeleton */}
      <div className="p-4 space-y-6">
        {/* Hero Section */}
        <div className="h-48 bg-gray-200 rounded-lg animate-pulse" />

        {/* Content Blocks */}
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="space-y-3">
              <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse" />
            </div>
          ))}
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-8 bg-gray-200 rounded-lg animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  );
}
