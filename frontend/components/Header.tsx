"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { label: "О нас", href: "#about" },
  { label: "Партнеры", href: "#partners" },
  { label: "Контакты", href: "#contacts" },
];

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 px-6 py-4"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-black/40 px-5 py-3 backdrop-blur-xl">
        {/* Логотип */}
        <a href="#" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-dark text-sm font-black text-white shadow-glow">
            S
          </span>
          <span className="text-lg font-semibold tracking-tight text-white">
            Shift
          </span>
        </a>

        {/* Навигация */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Кнопка входа */}
        <button className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-dark py-2 pl-5 pr-2 text-sm font-medium text-white shadow-glow transition-transform hover:scale-105">
          Войти
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </button>
      </div>
    </motion.header>
  );
}
