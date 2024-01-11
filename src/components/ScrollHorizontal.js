import React, { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "gsap/all";

const ScrollHorizontal = () => {
  const sectionsRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sections = document.querySelectorAll(".horizontal-section");

    console.log("sections & sectionsRef :: ", sections, sectionsRef);

    sections.forEach((section, index) => {
      gsap.to(section, {
        x: () => `-${window.innerWidth * index}px`,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${window.innerWidth}`,
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <div className="scroll-horizontal-container">
      <div className="horizontal-section" ref={sectionsRef}>
        Section 1
      </div>
      <div className="horizontal-section" ref={sectionsRef}>
        Section 2
      </div>
      <div className="horizontal-section" ref={sectionsRef}>
        Section 3
      </div>
    </div>
  );
};

export default ScrollHorizontal;
