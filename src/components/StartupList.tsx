
import "bootstrap/dist/css/bootstrap.min.css";

interface StartupItem {
  title: string;
  description: string;
  link: string;
  image: string;
}

const startups: StartupItem[] = [
  {
    title: "Food Delivery App",
    description: "MVP for local restaurants with payments, orders and delivery.",
    link: "https://example.com",
    image: "/startup1.png",
  },
  {
    title: "Crypto Trading Panel",
    description: "Trading interface using Bybit API with orders, charts, signals.",
    link: "https://example.com",
    image: "/startup2.png",
  },
  {
    title: "Online Education Platform",
    description: "Video lessons, student dashboard, quizzes, homework system.",
    link: "https://example.com",
    image: "/startup3.png",
  },
];

export default function StartupList() {
  return (
    <section className="py-5 bg-light" id="startups">
      <div className="container py-5">
        <h2 className="text-center display-5 fw-bold mb-5">
          🚀 My Startups
        </h2>

        <div className="row g-4">
          {startups.map((s, i) => (
            <div key={i} className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0">
                <img
                  src={s.image}
                  className="card-img-top"
                  style={{ height: 200, objectFit: "cover" }}
                  alt={s.title}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{s.title}</h5>
                  <p className="card-text">{s.description}</p>
                  <a
                    href={s.link}
                    target="_blank"
                    className="btn btn-primary w-100"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
