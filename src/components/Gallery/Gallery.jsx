import s from "./Gallery.module.scss";
import { tutorial } from "../../data/tutorial";

export default function Gallery() {
  return (
    <section className={s.gallery}>
      {Object.entries(tutorial).map(([key, value]) => (
        <div key={key} className={s.gallery__item}>
          <img src={value.cover} alt={value.title} />
          <h2>{value.title}</h2>
          <div>
            {value.GSAPClub && (
              <div className={s.gallery__item__gsapClub}>
                <img src="/images/gsapclub.png" alt="gsap club" />
              </div>
            )}
            <span>{"★".repeat(value.difficulty)}</span>
          </div>
        </div>
      ))}
    </section>
  );
}
