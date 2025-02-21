import { useRef } from "react";
import s from "./Home.module.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Home() {
  const titleRef = useRef(null);
  const timelineHomeRef = useRef(gsap.timeline({ paused: true }));

  useGSAP(() => {
    const items = document.querySelectorAll("[data-home-item]");
    timelineHomeRef.current
      .from(
        titleRef.current,
        {
          delay: 4.5, //total duration of the loader -0.5
          duration: 1,
          y: 30,
          opacity: 0,
          ease: "power2.inOut",
        },
        "loaderComplete"
      )
      .from(items, {
        duration: 0.5,
        opacity: 0,
        stagger: 0.1,
        ease: "power2.inOut",
      });

    timelineHomeRef.current.play();
  }, []);

  return (
    <main className={s.home}>
      <video
        className={s.video}
        src="/videos/TreeLakelow.webm"
        autoPlay
        muted
        loop
      />
      <nav className={s.home__nav}>
        <span data-home-item>Services</span>
        <span data-home-item>About</span>
        <span data-home-item>Contact</span>
      </nav>
      <h1 className={s.home__title} ref={titleRef}>
        Take to <br />
        the skies
      </h1>
      <div className={s.home__bottom}>
        <span className={s.home__bottom__span} data-home-item>
          Discover new horizons
        </span>
        <span className={s.home__bottom__span} data-home-item>
          Scroll to explore
        </span>
      </div>
    </main>
  );
}
