from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="Shift Hackathon API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Activity(BaseModel):
    time: str
    title: str


class ScheduleDay(BaseModel):
    id: int
    day: str
    date: str
    title: str
    description: str
    highlighted: bool
    activities: list[Activity]


SCHEDULE: list[ScheduleDay] = [
    ScheduleDay(
        id=1,
        day="День 1",
        date="20 июня",
        title="Открытие и лекции",
        description="Знакомимся, заряжаемся энергией и перенимаем опыт у лучших экспертов индустрии",
        highlighted=False,
        activities=[
            Activity(time="09:00 – 10:00", title="Сбор участников и регистрация на месте"),
            Activity(time="10:00 – 10:30", title="Официальное открытие. Вводное слово (Бекжан)"),
            Activity(time="10:30 – 11:30", title="Время для работы"),
            Activity(time="11:40 – 12:40", title="Лекция: Нурзат Тынымбек кызы (Lead BA, EPAM)"),
            Activity(time="13:00 – 13:50", title="Лекция: Игорь Чемеркин (основатель AI in KG)"),
            Activity(time="13:50 – 14:30", title="Брифинг: рабочие зоны, старт и правила чекпоинта"),
            Activity(time="14:30 – 18:00", title="Самостоятельная работа команд"),
        ],
    ),
    ScheduleDay(
        id=2,
        day="День 2",
        date="21 июня",
        title="Кодинг-марафон",
        description="Весь день ваш: пилим фичи, собираем MVP и проходим квалификацию",
        highlighted=True,
        activities=[
            Activity(time="09:00 – 12:00", title="Активная работа над проектами"),
            Activity(time="12:00", title="Жёсткий дедлайн: закрытие приёма форм MVP"),
            Activity(time="12:00 – 13:00", title="Обед: пицца и напитки 🍕 + аудит MVP жюри"),
            Activity(time="13:00 – 13:15", title="Оглашение списка финалистов"),
            Activity(time="13:15 – 18:00", title="Кодинг финалистов и подготовка презентаций"),
        ],
    ),
    ScheduleDay(
        id=3,
        day="День 3",
        date="22 июня",
        title="Финал и питчинг",
        description="Дедлайн по презентациям и защита проектов перед жюри",
        highlighted=False,
        activities=[
            Activity(time="09:00 – 12:00", title="Финализация проектов и подготовка к защите"),
            Activity(time="12:00 – 12:15", title="Вступительное слово жюри"),
            Activity(time="12:15 – 13:45", title="Защита проектов: 2 мин питч + вопросы"),
            Activity(time="13:45 – 14:30", title="Совещание жюри (закрытое обсуждение)"),
            Activity(time="14:30 – 15:30", title="Награждение победителей и закрытие 🏆"),
        ],
    ),
]


@app.get("/")
def root():
    return {"status": "ok", "service": "Shift Hackathon API"}


@app.get("/api/schedule", response_model=list[ScheduleDay])
def get_schedule():
    return SCHEDULE
