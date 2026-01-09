import { Menu, X, Moon, Sun } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export function Header({ darkMode, setDarkMode }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <span className="text-xl font-bold text-slate-900 dark:text-white">NodeNest</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Features</a>
            <a href="https://docs.ankitgupta.com.np" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Documentation</a>
            <a href="https://discord.gg/ZaEdTBs7Ds" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Discord</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a href="https://panel.ankitgupta.com.np" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium">Panel Access</a>
            <a href="https://store.ankitgupta.com.np" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium">Dashboard</a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-slate-900 dark:text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden pb-4 border-t border-slate-200 dark:border-slate-700">
            <a href="#features" className="block py-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400">Features</a>
            <a href="https://docs.ankitgupta.com.np" target="_blank" rel="noopener noreferrer" className="block py-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400">Documentation</a>
            <a href="https://discord.gg/ZaEdTBs7Ds" target="_blank" rel="noopener noreferrer" className="block py-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400">Discord</a>
            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="px-4 py-2 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition font-medium flex items-center justify-center gap-2"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
              <a href="https://panel.ankitgupta.com.np" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium text-center">Panel Access</a>
              <a href="https://store.ankitgupta.com.np" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium text-center">Dashboard</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
