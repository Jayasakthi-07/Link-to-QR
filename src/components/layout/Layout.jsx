import ThemeToggle from '../ui/ThemeToggle';

export default function Layout({ children }) {
    return (
        <div className="min-h-screen w-full bg-white dark:bg-slate-950 relative overflow-x-hidden text-slate-900 dark:text-slate-50 flex flex-col font-body transition-colors duration-300">

            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />

            {/* Navigation / Header */}
            <header className="w-full max-w-5xl mx-auto p-6 flex justify-between items-center relative z-10">
                <div className="font-display font-bold text-xl tracking-tight text-slate-900 dark:text-white">
                    Link to <span className="text-slate-500 dark:text-slate-400">QR</span>
                </div>
                <nav className="flex items-center gap-4">
                    <a href="#" className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">Documentation</a>
                    <ThemeToggle />
                </nav>
            </header>

            {/* Main Content */}
            <main className="relative z-10 flex-1 flex flex-col w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {children}
            </main>

            {/* Footer */}
            <footer className="relative z-10 py-8 text-center text-slate-400 text-sm">
                &copy; {new Date().getFullYear()} Link to QR. All rights reserved.
            </footer>
        </div>
    );
}
