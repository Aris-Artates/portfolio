export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full bg-[#667eea] animate-bounce [animation-delay:-0.3s]" />
        <div className="w-3 h-3 rounded-full bg-[#764ba2] animate-bounce [animation-delay:-0.15s]" />
        <div className="w-3 h-3 rounded-full bg-[#4facfe] animate-bounce" />
      </div>
    </div>
  );
}
