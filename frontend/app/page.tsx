import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ScheduleSection from "@/components/ScheduleSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { getSchedule } from "@/lib/api";

export default async function Home() {
  // Server Component: тянем расписание с FastAPI-бэкенда (/api/schedule)
  const schedule = await getSchedule();

  return (
    <main className="relative min-h-screen bg-background">
      {/* Глобальный фоновый градиент */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(139,92,246,0.08),_transparent_50%)]" />

      <Header />
      <Hero />
      <ScheduleSection schedule={schedule} />
      <CTA />
      <Footer />
    </main>
  );
}
