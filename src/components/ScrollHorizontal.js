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

    console.log("window.innerWidth : ", window.innerWidth);

    sections.forEach((section, index) => {
      gsap.to(section, {
        x: () => `-${window.innerWidth * index}px`,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${window.innerWidth}`,
          scrub: true,
          markers: true,
        },
      });
    });
  }, []);

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
