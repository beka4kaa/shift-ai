import type { ScheduleDay } from "./types";

/**
 * Базовый URL бэкенда. На сервере (SSR) ходим напрямую в FastAPI,
 * в браузере используем относительный путь через rewrites из next.config.js.
 */
const API_BASE =
  typeof window === "undefined"
    ? process.env.BACKEND_URL || "http://127.0.0.1:8000"
    : "";

/** Фолбэк-данные на случай, если бэкенд недоступен при сборке/деве. */
const FALLBACK_SCHEDULE: ScheduleDay[] = [
  {
    id: 1,
    day: "День 1",
    date: "20 июня",
    title: "Открытие и лекции",
    description:
      "Знакомимся, заряжаемся энергией и перенимаем опыт у лучших экспертов индустрии",
    highlighted: false,
    activities: [
      { time: "09:00 – 10:00", title: "Сбор участников и регистрация на месте" },
      { time: "10:00 – 10:30", title: "Официальное открытие. Вводное слово (Бекжан)" },
      { time: "10:30 – 11:30", title: "Лекция: Нурзат Тынымбек кызы (Lead BA, EPAM)" },
      { time: "11:40 – 12:40", title: "Лекция: Денис Павлов (ML Engineer, The Cramer Project)" },
      { time: "13:00 – 13:50", title: "Лекция: Игорь Чемеркин (основатель AI in KG)" },
      { time: "13:50 – 14:30", title: "Брифинг: рабочие зоны, старт и правила чекпоинта" },
      { time: "14:30 – 18:00", title: "Самостоятельная работа команд" },
    ],
  },
  {
    id: 2,
    day: "День 2",
    date: "21 июня",
    title: "Кодинг-марафон",
    description:
      "Весь день ваш: пилим фичи, собираем MVP и проходим квалификацию",
    highlighted: true,
    activities: [
      { time: "09:00 – 12:00", title: "Активная работа над проектами" },
      { time: "12:00", title: "Жёсткий дедлайн: закрытие приёма форм MVP" },
      { time: "12:00 – 13:00", title: "Обед: пицца и напитки 🍕 + аудит MVP жюри" },
      { time: "13:00 – 13:15", title: "Оглашение списка финалистов" },
      { time: "13:15 – 18:00", title: "Кодинг финалистов и подготовка презентаций" },
    ],
  },
  {
    id: 3,
    day: "День 3",
    date: "22 июня",
    title: "Финал и питчинг",
    description: "Дедлайн по презентациям и защита проектов перед жюри",
    highlighted: false,
    activities: [
      { time: "09:00 – 12:00", title: "Финализация проектов и подготовка к защите" },
      { time: "12:00 – 12:15", title: "Вступительное слово жюри" },
      { time: "12:15 – 13:45", title: "Защита проектов: 2 мин питч + вопросы" },
      { time: "13:45 – 14:30", title: "Совещание жюри (закрытое обсуждение)" },
      { time: "14:30 – 15:30", title: "Награждение победителей и закрытие 🏆" },
    ],
  },
];

export async function getSchedule(): Promise<ScheduleDay[]> {
  try {
    const res = await fetch(`${API_BASE}/api/schedule`, {
      // ISR: обновляем расписание раз в час
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error(`Backend responded with ${res.status}`);
    }

    return (await res.json()) as ScheduleDay[];
  } catch (error) {
    console.warn("[getSchedule] using fallback data:", error);
    return FALLBACK_SCHEDULE;
  }
}
