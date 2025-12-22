import "bootstrap/dist/css/bootstrap.min.css";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

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
      link: "/startups/food-delivery",
      image: "src/assets/food.jpg",
    },
    {
      title: t("startup_items.crypto_title"),
      description: t("startup_items.crypto_desc"),
      link: "/startups/crypto-panel",
      image: "src/assets/crypto.jpg",
    },
    {
      title: t("startup_items.edu_title"),
      description: t("startup_items.edu_desc"),
      link: "/startups/education-platform",
      image: "src/assets/edu.jpg",
    },

{
  title: t("startup_items.uav_title"),
  description: t("startup_items.uav_desc"),
  link: "/startups/uav-factory", // корректный роут без #home
  image: "src/assets/uav.jpg",
}


    
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
                  <Link
                    to={s.link}
                    className="btn btn-primary w-100"
                  >
                    {t("view_project")}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
