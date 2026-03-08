import { SkeletonLoader } from "@/components/ui/SkeletonLoader";

export default function DashboardLoading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12 text-center">
        <SkeletonLoader variant="text" className="h-10 w-64 mx-auto mb-4" />
        <SkeletonLoader variant="text" className="h-5 w-96 mx-auto" />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[...Array(4)].map((_, i) => (
          <SkeletonLoader key={i} variant="card" className="h-28" />
        ))}
      </div>
      <SkeletonLoader variant="chart" className="mb-8" />
      <SkeletonLoader variant="chart" />
    </div>
  );
}
