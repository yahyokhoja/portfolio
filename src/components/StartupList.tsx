import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";

interface StartupItem {
  title: string;
  description: string;
  link: string;
  image: string;
}

export default function StartupList() {
  const { t } = useTranslation();

  const startups: StartupItem[] = [
    {
      title: t("startup_items.food_title"),
      description: t("startup_items.food_desc"),
      link: "https://example.com",
      image: "/startup1.png",
    },
    {
      title: t("startup_items.crypto_title"),
      description: t("startup_items.crypto_desc"),
      link: "https://example.com",
      image: "/startup2.png",
    },
    {
      title: t("startup_items.edu_title"),
      description: t("startup_items.edu_desc"),
      link: "https://example.com",
      image: "/startup3.png",
    },
  ];

  return (
    <section className="py-5 bg-light" id="startups">
      <div className="container py-5">
        <h2 className="text-center display-5 fw-bold mb-5">
          {t("startups_title")}
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
                    {t("view_project")}
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
