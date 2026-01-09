import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <span className="text-xl font-bold text-slate-900">NodeNest</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-slate-600 hover:text-blue-600 transition">Features</a>
            <a href="https://docs.ankitgupta.com.np" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-600 transition">Documentation</a>
            <a href="https://discord.gg/ZaEdTBs7Ds" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-600 transition">Discord</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="https://panel.ankitgupta.com.np" className="text-slate-600 hover:text-blue-600 transition">Sign In</a>
            <a href="https://store.ankitgupta.com.np" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium">Dashboard</a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden pb-4 border-t border-slate-200">
            <a href="#features" className="block py-2 text-slate-600 hover:text-blue-600">Features</a>
            <a href="https://docs.ankitgupta.com.np" target="_blank" rel="noopener noreferrer" className="block py-2 text-slate-600 hover:text-blue-600">Documentation</a>
            <a href="https://discord.gg/ZaEdTBs7Ds" target="_blank" rel="noopener noreferrer" className="block py-2 text-slate-600 hover:text-blue-600">Discord</a>
            <div className="pt-4 flex gap-3">
              <a href="https://panel.ankitgupta.com.np" className="flex-1 text-center py-2 text-slate-600 hover:text-blue-600">Sign In</a>
              <a href="https://store.ankitgupta.com.np" className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium text-center">Dashboard</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
