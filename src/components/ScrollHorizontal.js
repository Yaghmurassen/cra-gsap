import React, { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "gsap/all";
// import { useGSAP } from "@gsap/react";
import styles from "../style/ScrollHorizontal.module.scss";

const ScrollHorizontal = () => {
  const sectionsRef = useRef();
  const container = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sections = document.querySelectorAll(".h-section");

    sections.forEach((section, index) => {
      gsap.to(section, {
        x: () =>
          index === 0
            ? `-${window.innerWidth}px`
            : `-${window.innerWidth * index}px`,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${window.innerWidth}`,
          scrub: true,
          markers: true,
          // pin: true,
        },
      });
      ScrollTrigger.refresh();
    });
  }, []);

  // useEffect(() => {
  //   // This does not seem to work without a settimeout
  //   setTimeout(() => {
  //     console.log(ref.current.offsetWidth);
  //     console.log(ref.current.clientWidth);
  //     console.log({ current: ref.current });
  //     let sections = gsap.utils.toArray(".gallery-item-wrapper");

  //     gsap.to(sections, {
  //       xPercent: -100 * (sections.length - 1),
  //       ease: "none",
  //       scrollTrigger: {
  //         start: "top top",
  //         trigger: ref.current,
  //         scroller: "#main-container",
  //         pin: true,
  //         scrub: 0.5,
  //         snap: 1 / (sections.length - 1),
  //         end: () => `+=${ref.current.offsetWidth}`,
  //       },
  //     });
  //     ScrollTrigger.refresh();
  //   });
  // }, []);

  //// Comment récupérer l'index de l'item en court d'itération ?

  // useGSAP(
  //   () => {
  //     gsap.to(".h-section", {
  //       x: () => `-${window.innerWidth}px`,
  //       ease: "none",
  //       scrollTrigger: {
  //         trigger: ".h-section",
  //         start: "top top",
  //         end: `+=${window.innerWidth}`,
  //         scrub: true,
  //       },
  //     });
  //   },
  //   { scope: container }
  // );

  return (
    <div className="scroll-horizontal-container" ref={container}>
      <div
        className={`${styles.horizontal_section} h-section`}
        ref={sectionsRef}
      >
        Section 1
      </div>
      <div
        className={`${styles.horizontal_section} h-section`}
        ref={sectionsRef}
      >
        Section 2
      </div>
      <div
        className={`${styles.horizontal_section} h-section`}
        ref={sectionsRef}
      >
        Section 3
      </div>
      <div className={styles.horizontal_section}>Section fantome</div>
    </div>
  );
};

export default ScrollHorizontal;
