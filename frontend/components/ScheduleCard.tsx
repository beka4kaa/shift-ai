"use client";

import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import type { ScheduleDay } from "@/lib/types";

interface ScheduleCardProps {
  day: ScheduleDay;
  index: number;
}

export default function ScheduleCard({ day, index }: ScheduleCardProps) {
  const highlighted = day.highlighted;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
      className={`group relative overflow-hidden rounded-3xl border p-7 transition-colors duration-300 ${
        highlighted
          ? "border-accent/40 bg-gradient-to-b from-accent/25 via-accent/5 to-transparent shadow-glow-lg"
          : "border-white/10 bg-white/[0.02] backdrop-blur-xl hover:border-accent/30"
      }`}
    >
      {/* Верхний фиолетовый акцент-свечение */}
      <div
        className={`pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full blur-3xl transition-opacity duration-300 ${
          highlighted
            ? "bg-accent/40 opacity-100"
            : "bg-accent/20 opacity-0 group-hover:opacity-100"
        }`}
      />

      {/* Декоративные «шевроны» как на референсе */}
      <div className="pointer-events-none absolute right-5 top-5 flex gap-1 text-3xl font-black text-white/5">
        <span>/</span>
        <span>/</span>
      </div>

      <div className="relative">
        {/* Иконка-логотип дня */}
        <div
          className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl border text-lg font-bold ${
            highlighted
              ? "border-accent/50 bg-accent/30 text-white"
              : "border-white/10 bg-white/5 text-accent"
          }`}
        >
          {day.id}
        </div>

        {/* Заголовок дня */}
        <h3 className="text-2xl font-semibold text-white">{day.day}</h3>
        <p className="mt-1 text-sm text-white/50">{day.description}</p>

        {/* Дата */}
        <div className="mt-6 flex items-baseline gap-2">
          <span className="text-3xl font-bold text-white">{day.date}</span>
          <span className="text-sm text-white/40">/ {day.title}</span>
        </div>

        {/* CTA внутри карточки */}
        <button
          className={`mt-6 flex w-full items-center justify-between rounded-full px-5 py-3 text-sm font-medium transition-transform duration-200 hover:scale-[1.02] ${
            highlighted
              ? "bg-white text-black"
              : "bg-white/5 text-white hover:bg-white/10"
          }`}
        >
          Смотреть программу
          <span
            className={`flex h-7 w-7 items-center justify-center rounded-full ${
              highlighted ? "bg-accent text-white" : "bg-accent text-white"
            }`}
          >
            <ArrowRight className="h-4 w-4" />
          </span>
        </button>

        {/* Список активностей с иконками часов */}
        <ul className="mt-7 space-y-3.5">
          {day.activities.map((activity, i) => (
            <li key={i} className="flex items-start gap-3 text-sm">
              <span
                className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${
                  highlighted ? "bg-accent/30" : "bg-white/5"
                }`}
              >
                <Clock className="h-3 w-3 text-accent" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-mono text-xs text-accent-light">
                  {activity.time}
                </span>
                <span className="text-white/80">{activity.title}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
