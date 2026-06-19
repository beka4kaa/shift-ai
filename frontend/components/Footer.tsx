import { Github, Twitter, Linkedin } from "lucide-react";

const FOOTER_COLUMNS = [
  {
    title: "Хакатон",
    links: ["О нас", "Расписание", "Призы", "FAQ"],
  },
  {
    title: "Навигация",
    links: ["Партнеры", "Менторы", "Жюри", "Контакты"],
  },
];

export default function Footer() {
  return (
    <footer
      id="contacts"
      className="relative border-t border-white/5 px-6 py-12"
    >
      <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl sm:p-10">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          {/* Лого + соцсети */}
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-dark text-sm font-black text-white">
                S
              </span>
              <span className="text-lg font-semibold text-white">Shift</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-white/40">
              ИИ-хакатон для тех, кто двигает индустрию вперёд.
            </p>
            <div className="mt-5 flex gap-3">
              {[Github, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/60 transition-colors hover:border-accent/40 hover:text-accent"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Колонки ссылок */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-medium text-white/80">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/40 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Контакты */}
          <div>
            <h4 className="text-sm font-medium text-white/80">Контакты</h4>
            <p className="mt-4 text-sm text-white/40">
              Москва, Технопарк
              <br />
              Innovation Hub, 4 этаж
            </p>
            <a
              href="mailto:hello@shift.ai"
              className="mt-2 inline-block text-sm text-accent-light hover:text-accent"
            >
              hello@shift.ai
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-white/5 pt-6 text-xs text-white/30 sm:flex-row">
          <span>© 2026 Shift Hackathon. Все права защищены.</span>
          <span>
            Создано с <span className="text-accent">♥</span> для разработчиков
          </span>
        </div>
      </div>
    </footer>
  );
}
