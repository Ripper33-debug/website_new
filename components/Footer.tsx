"use client";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-gray-800 py-12" style={{ scrollSnapAlign: 'none' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-bold text-white">
            Weatherhaven
          </div>
          <p className="text-gray-400 text-sm">
            © 2025 Weatherhaven Global Resources Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
}
