import Gallery from "../Gallery/Gallery";
import s from "./Landing.module.scss";

export default function Landing() {
  return (
    <main className={s.landing}>
      <nav className={s.landing__nav}>
        <h1 className={s.landing__nav__title}>GSAP + React Tutorial</h1>

        <div className={s.landing__nav__logo}></div>
      </nav>
      <Gallery />
    </main>
  );
}
