import { GradientButton } from "@/components/ui/GradientButton";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-8xl font-bold text-gradient mb-4">404</h1>
      <p className="text-xl text-gray-400 mb-8">
        This page doesn&apos;t exist or has been moved.
      </p>
      <GradientButton href="/">Go Home</GradientButton>
    </div>
  );
}
