"use client";

import {useState} from "react";
import Link from "next/link";
import {SITE_CONFIG} from "@/types";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const autorized = []

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simuler un délai de connexion

        let user = autorized.map(user => {
            return user.login === email && user.password === password
        })
        setIsLoading(false);

        if (user.length > 0) {
            alert('Connexion réussie')
        } else {
            alert('Connexion ratée')
        }

    };

    if (process.env.NODE_ENV === 'production') {
        return (<div></div>);
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-950 p-4">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden -z-10">
                <div
                    className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl"></div>
                <div
                    className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="w-full max-w-md">
                {/* Logo Container */}
                <div className="flex flex-col items-center mb-8">
                    <Link href="/" className="transition-transform hover:scale-105 duration-300">
                        <div
                            className="bg-white dark:bg-zinc-900 p-4 rounded-2xl shadow-xl shadow-zinc-200/50 dark:shadow-none border border-zinc-100 dark:border-zinc-800">
                            <img
                                src="/assets/img/logo.png"
                                alt="Logo TOCF"
                                className="w-16 h-16 object-contain"
                            />
                        </div>
                    </Link>
                    <h1 className="mt-6 text-2xl font-bold text-zinc-900 dark:text-white">
                        Espace Membre
                    </h1>
                    <p className="text-zinc-500 dark:text-zinc-400 mt-2 text-center">
                        Connectez-vous pour accéder à vos avantages
                    </p>
                </div>

                {/* Login Card */}
                <div
                    className="bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl shadow-zinc-200/50 dark:shadow-none border border-zinc-100 dark:border-zinc-800 p-8">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5 ml-1"
                            >
                                Adresse e-mail
                            </label>
                            <input
                                id="email"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="nom@exemple.fr"
                                className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/50 text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            />
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-1.5 ml-1">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                                >
                                    Mot de passe
                                </label>
                                <a
                                    href="#"
                                    className="text-xs font-medium text-primary hover:underline transition-all"
                                >
                                    Oublié ?
                                </a>
                            </div>
                            <input
                                id="password"
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/50 text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            />
                        </div>

                        <div className="flex items-center ml-1">
                            <input
                                id="remember"
                                type="checkbox"
                                className="w-4 h-4 rounded border-zinc-300 text-primary focus:ring-primary/20 transition-all"
                            />
                            <label htmlFor="remember" className="ml-2 text-sm text-zinc-600 dark:text-zinc-400">
                                Se souvenir de moi
                            </label>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-primary/20 transition-all duration-300 transform active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                        >
                            {isLoading ? (
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg"
                                     fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                            strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor"
                                          d="4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            ) : (
                                "Se connecter"
                            )}
                        </button>
                    </form>

                    <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800 text-center">
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">
                            Pas encore membre ?{" "}
                            <a
                                href={SITE_CONFIG.links.membership}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary font-bold hover:underline transition-all"
                            >
                                Rejoignez le club
                            </a>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}
