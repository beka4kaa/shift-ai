"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-44">
      {/* Радиальное фиолетовое свечение сверху */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-accent/20 blur-[140px]" />

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Бейдж с датами */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/70 backdrop-blur-md"
        >
          <Calendar className="h-3.5 w-3.5 text-accent" />
          20–22 июня · Школа «Маариф»
        </motion.div>

        {/* Заголовок */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          Shift Hackathon.
          <br />
          <span className="text-gradient">Создай свой ИИ-проект.</span>
        </motion.h1>

        {/* Подзаголовок */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-xl text-base text-white/50 sm:text-lg"
        >
          Трехдневный марафон для топовых талантов. 20–22 июня. Собери команду,
          построй прототип на базе ИИ и поборись за главный приз.
        </motion.p>

        {/* CTA-кнопки */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <button className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-dark py-3 pl-7 pr-3 text-sm font-medium text-white shadow-glow transition-transform hover:scale-105">
            Подать заявку
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </button>
          <a
            href="#schedule"
            className="rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-white/10"
          >
            Смотреть расписание
          </a>
        </motion.div>
      </div>
    </section>
  );
}
