# Shift Hackathon — Landing

Лендинг ИИ-хакатона «Shift Hackathon» (20–22 июня). Монорепозиторий: Next.js фронтенд + FastAPI бэкенд.

## Структура

```
shift/
├── frontend/                 # Next.js 15 (App Router) + Tailwind + Framer Motion + Lucide
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx          # Главная страница (Server Component, fetch /api/schedule)
│   │   └── globals.css
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── ScheduleSection.tsx
│   │   ├── ScheduleCard.tsx  # Переиспользуемая карточка дня
│   │   ├── CTA.tsx
│   │   └── Footer.tsx
│   ├── lib/
│   │   ├── api.ts            # fetch расписания с бэкенда + фолбэк
│   │   └── types.ts
│   └── ...config
└── backend/                  # FastAPI
    ├── main.py               # GET /api/schedule
    └── requirements.txt
```

## Запуск

### Backend (FastAPI)

```bash
cd backend
python -m venv venv && source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

API: http://127.0.0.1:8000/api/schedule

### Frontend (Next.js)

```bash
cd frontend
npm install
npm run dev
```

Сайт: http://localhost:3000
