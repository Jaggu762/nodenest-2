import { Github, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-400 dark:text-slate-500 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-white font-semibold mb-4">Cloud Hosting</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition">Minecraft Servers</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Discord Bots</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Telegram Bots</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">About NodeNest</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition">About Us</a></li>
              <li><a href="https://discord.gg/ZaEdTBs7Ds" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">Community</a></li>
              <li><a href="https://docs.ankitgupta.com.np" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">Documentation</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal & Abuse</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Report Abuse</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 dark:border-slate-900 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-white font-semibold">NodeNest</span>
            </div>

            <p className="text-sm">© 2024 NodeNest. All rights reserved.</p>

            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-400 transition">
                <Github size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
