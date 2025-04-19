export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="container mx-auto px-4 py-8 text-center space-y-2">
        <p className="text-sm">
          © {new Date().getFullYear()} HEXASHOP. All rights reserved.
        </p>
        <p className="text-xs text-gray-400">
          Made with ❤️ by Next.js + Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
