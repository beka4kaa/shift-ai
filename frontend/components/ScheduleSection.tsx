import ScheduleCard from "./ScheduleCard";
import type { ScheduleDay } from "@/lib/types";

interface ScheduleSectionProps {
  schedule: ScheduleDay[];
}

export default function ScheduleSection({ schedule }: ScheduleSectionProps) {
  return (
    <section id="schedule" className="relative px-6 py-24">
      {/* Фоновое свечение */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
            Расписание.
            <br />
            <span className="text-gradient">Три дня драйва.</span>
          </h2>
          <p className="mt-5 text-base text-white/50">
            Три насыщенных дня: от идеи до питча. Никакой воды — только хардкорная
            разработка, менторство и нетворкинг.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {schedule.map((day, index) => (
            <ScheduleCard key={day.id} day={day} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
