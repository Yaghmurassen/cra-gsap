import React, { useRef, useEffect, useLayoutEffect } from "react";
import { gsap, ScrollTrigger } from "gsap/all";
import styles from "../style/ScrollSection.module.scss";

function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-400vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      {
        /* A return function for killing the animation on component unmount */
      }
      pin.kill();
    };
  }, []);

  return (
    <section className={styles.scroll_section_outer}>
      {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

      {/* The div below act just as a trigger. As the doc suggests, the trigger and 
      the animation should alway be two separated refs */}
      <div ref={triggerRef}>
        <div ref={sectionRef} className={styles.scroll_section_inner}>
          <div className={styles.scroll_section}>
            <h3>Section 1</h3>
          </div>
          <div className={styles.scroll_section}>
            <h3>Section 2</h3>
          </div>
          <div className={styles.scroll_section}>
            <h3>Section 3</h3>
          </div>
          <div className={styles.scroll_section}>
            <h3>Section 4</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
