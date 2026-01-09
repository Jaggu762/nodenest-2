import { BookOpen, Files, Wrench, Zap, Globe, Gamepad2 } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Documentation',
    description: 'Don\'t know how to set up that one thing on your server? Our awesome step-by-step documentation has your needs covered!'
  },
  {
    icon: Files,
    title: 'File Manager',
    description: 'Change every config file, upload new files and import and export with an easy to use File Manager within the panel or SFTP'
  },
  {
    icon: Wrench,
    title: 'Plugin & Mod Support',
    description: 'You have free reign over which plugins and mods you want to install to customize your server to your likings.'
  },
  {
    icon: Zap,
    title: 'Smart Hibernation',
    description: 'Your server goes offline when you\'re not playing and goes back online when you\'re ready to play again. That easy!'
  },
  {
    icon: Globe,
    title: 'Global Servers',
    description: 'Are you from Americas or Europe? No worries! We have servers in both continents, ensuring low latency.'
  },
  {
    icon: Gamepad2,
    title: 'Multiple Game Types',
    description: 'Host Minecraft servers, Discord bots, and Telegram bots with premium features, all completely free.'
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="p-8 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition bg-gradient-to-br from-slate-50 to-white">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
