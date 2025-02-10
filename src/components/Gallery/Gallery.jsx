import s from "./Gallery.module.scss";
import { tutorial } from "../../data/tutorial";
import StarFilledSVG from "../SVG/StarFilledSVG";
import StarEmptySVG from "../SVG/StarEmptySVG";
import { Link } from "react-router-dom";

export default function Gallery() {
  return (
    <section className={s.gallery}>
      {Object.entries(tutorial).map(([key, value]) => (
        <Link key={key} to={`/tutorial/${key}`} className={s.gallery__item}>
          <img src={value.cover} alt={value.title} />
          <div className={s.gallery__item__details}>
            <h2>{value.title}</h2>
            <div className={s.gallery__item__details__difficulty}>
              {[...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className={s.gallery__item__details__difficulty__star}
                >
                  {index < value.difficulty ? (
                    <StarFilledSVG />
                  ) : (
                    <StarEmptySVG />
                  )}
                </div>
              ))}
            </div>
          </div>
          <div>
            {value.GSAPClub && (
              <div className={s.gallery__item__gsapClub}>
                <img src="/images/gsap-club.png" alt="gsap club" />
              </div>
            )}
          </div>
        </Link>
      ))}
    </section>
  );
}
