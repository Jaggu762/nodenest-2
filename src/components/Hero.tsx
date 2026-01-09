export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
          Free Server Hosting with <span className="text-blue-600 dark:text-blue-400">NodeNest</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
          Host Minecraft servers, Discord bots, and Telegram bots completely free. Premium features, no credit card required, instant setup with generous resources!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a href="https://store.ankitgupta.com.np" className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold text-lg">
            Create Your First Server
          </a>
          <a href="https://docs.ankitgupta.com.np" className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-slate-800 transition font-semibold text-lg">
            View Documentation
          </a>
        </div>

        <p className="text-slate-500 dark:text-slate-400 text-lg">
          No credit card required • Instant setup • Generous resources
        </p>
      </div>
    </section>
  );
}
