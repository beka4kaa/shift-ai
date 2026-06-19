"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden px-6 py-28">
      <div className="relative mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/70 backdrop-blur-md">
            Регистрация закрыта
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl">
            Старт уже близко.
            <br />Готов показать результат?
          </h2>

          <p className="mx-auto mt-5 max-w-md text-white/50">
            Приём заявок завершён. Вся финальная программа — выше. Увидимся 20
            июня в 09:00 в Школе «Маариф».
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#schedule"
              className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-dark py-3 pl-7 pr-3 text-sm font-medium text-white shadow-glow transition-transform hover:scale-105"
            >
              Смотреть расписание
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
            <a
              href="#contacts"
              className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 py-3 pl-7 pr-3 text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-white/10"
            >
              Связаться с нами
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent">
                <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Фиолетовая «сфера»-свечение снизу, как на референсе */}
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gradient-to-t from-accent to-accent/0 opacity-40 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-20 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-accent/30 blur-[80px]" />
    </section>
  );
}
