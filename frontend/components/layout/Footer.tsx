import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Aris L. Artates Jr. All rights reserved.
          </p>
          <SocialLinks size={18} />
        </div>
      </div>
    </footer>
  );
}
